import { NextResponse } from "next/server";

export async function GET(req) {
  // Make a request to the server
  const getServerStatus = async () => {
    // let url =
    //   process.env.NODE_ENV == "production" 
    //     ? "http://gatewaygenius-demo-service:80" //process.env.BACKEND_URL
    //     : "http://localhost:5400";

    let url = "http://gatewaygenius-demo-service.default.svc.cluster.local";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

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
      });
    }
  };

  return getServerStatus();
}