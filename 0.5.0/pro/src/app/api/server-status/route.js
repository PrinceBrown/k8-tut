import { NextResponse } from "next/server";

export async function GET(req) {


  console.log("Hitting the backend", 'http://localhost:5400/server-status');

  // Make a request to the server
  const getServerStatus = async () => {
    let url =
      process.env.NODE_ENV == "development"
        ? "http://localhost:5400"
        : '';
    try {
      const response = await fetch(url + "/server-status");
      const data = await response.json();

      // console.log (response)

      console.log("Received data: ",data);

      return NextResponse.json({
        serverName: data.serverName,
        status: data.status,
        env: data.environment,
      });
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        serverName: "Couldn't retrieve server status",
        status: "Error",
        env: 'local',
      });
    }
  };

  return getServerStatus();
}
