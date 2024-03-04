import axios from 'axios';
import { NextResponse } from "next/server";

export async function GET(req) {
  return getServerStatus();
}

  // Make a request to the server
const getServerStatus = async () => {

  let url =  "simulated";

  try {
    // Simulate a delay with a Promise
    // await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate response data
    const data = {
      serverName: "NextJS Simulated Server",
      status: "OK",
      env: process.env.NODE_ENV,
      response: "Simulated response data",
      url: url,
    };

    console.log(data);

    return NextResponse.json(data);
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