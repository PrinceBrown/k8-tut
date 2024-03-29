import axios from 'axios';
import { NextResponse } from "next/server";
import dotenv from 'dotenv';
dotenv.config();

export async function GET(req) {
  return getServerStatus();
}

  // Make a request to the server
  const getServerStatus = async () => {

    let url = process.env.NODE_ENV === "production" ? process.env.COPY_CAT_URL : "http://localhost:5500"; //"http://34.118.226.187:80"

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