'use client';

import Image from "next/image";
import { useState } from "react";




export default function Home() {
  const [serverResponse, setServerResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  // function to make a request to the backend /api route's GET method
  const fetchNextJsBackend = async () => {
    setServerResponse(null);
    setIsLoading
    try {
      const response = await fetch("/api/");

      const data = await response.json();
      console.log(data);
      setServerResponse(data);
      setIsLoading(false);
    } catch (error) {
      console.error('An error occurred while fetching the data:', error);
      setServerResponse(null)
      setIsLoading(false);
    }
  };


  const fetchK8GatewayGenius = async () => {
    setServerResponse(null);
    setIsLoading(true)
    try {
      const response = await fetch("/api/gatewaygenius");
      const data = await response.json();
      console.log(data);
      setServerResponse(data);
      setIsLoading(false);
    } catch (error) {
      console.error('An error occurred while fetching the data:', error);
      setServerResponse(null)
      setIsLoading(false);
    }
  }


  const fetchK8Copycat = async () => {
    setServerResponse(null);
    setIsLoading(true)
    try {
      const response = await fetch("/api/copycat");
      const data = await response.json();
      console.log(data);
      setServerResponse(data);
      setIsLoading(false);
    } catch (error) {
      console.error('An error occurred while fetching the data:', error);
      setServerResponse(null)
      setIsLoading(false);
    }
  }








  return (

    <>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Server Response</h1>

{isLoading ? (
  <div className="flex justify-center items-center h-screen">
    <svg className="animate-spin h-5 w-5 mr-3 text-purple-700" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  </div>
) : (
  <div className="bg-white rounded-lg shadow-md p-6 m-4">
    <h2 className="text-2xl font-bold mb-2 text-purple-700">Server Status:</h2>
    {serverResponse ? (
      <>
        <p className="text-purple-700">
          <span className="font-bold">Name:</span> {serverResponse.serverName ?? "No server name available"}
        </p>
        <p className="text-purple-700">
          <span className="font-bold">Status:</span> {serverResponse.status}
        </p>
        <p className="text-purple-700">
          <span className="font-bold">Response:</span> {serverResponse.response}
        </p>
        <p className="text-purple-700">
          <span className="font-bold">URL:</span> {serverResponse.url}
        </p>
      </>
    ) : (
      <p className="text-purple-700">No server response available.</p>
    )}
  </div>
)}

            <div className="">
              <button onClick={fetchNextJsBackend} className="btn btn-primary me-2">Fetch NextJs Backend</button>
              <button onClick={fetchK8GatewayGenius} className="btn btn-warning me-2">K8 Fetch Gateway Genius</button>

            </div>

            <div className="mt-2">
              <button onClick={fetchK8Copycat} className="btn btn-info">K8 Fetch Copycat</button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
