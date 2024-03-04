import axios from 'axios';
import { NextResponse } from "next/server";

export async function GET(req) {
  return getServerStatus();
}

  // Make a request to the server
  const getServerStatus = async () => {

    let url = process.env.NODE_ENV === "production" ? "http://gatewaygenius-demo-service:80" : "http://localhost:3000";

    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = response.data;

      console.log(data);

      return NextResponse.json({
        serverName: data.serverName,
        status: data.status,
        env: data.environment,
        response: data.response,
        url: url,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        serverName: "Couldn't retrieve server status",
        status: "Error",
        error: error,
        env: process.env.NODE_ENV,
        url: url,
      });
    }
  };