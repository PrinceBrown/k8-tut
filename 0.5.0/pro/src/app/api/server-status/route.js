import axios from 'axios';
import { NextResponse } from "next/server";
import dotenv from 'dotenv';
dotenv.config();

export async function GET(req) {
  return getServerStatus();
}

  // Make a request to the server
  const getServerStatus = async () => {

    // let url = process.env.NODE_ENV === "production" ? "http://gatewaygenius-demo-service:80" : "http://localhost:3000";

    try {
      const response = await axios.get('https://rocketscore.com/');
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = response.data;

      return NextResponse.json({
        serverName: data.serverName,
        status: data.status,
        env: data.environment,
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