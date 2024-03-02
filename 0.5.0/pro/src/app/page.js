'use client';
import { useState } from 'react';

export default function Home() {

  const [serverStatusData, setServerStatusData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [lastRequestedAt, setLastRequestedAt] = useState(null);




  // Make a request to the server
  const getServerStatus = async () => {
    setIsLoading(true);
    setIsError(false);
    setServerStatusData(null);
    try {
      const response = await fetch('/api/server-status',{ cache: 'no-store' });
      const data = await response.json();
      console.log(data);
      setServerStatusData(data);
      setIsLoading(false);
      // set the last requested and time to the current time
      setLastRequestedAt(new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }).format(new Date()));
    } catch (error) {
      console.log(error);
      setServerStatusData(null);
      setIsError(true);
      setErrorMessage(error.message);
      setIsLoading(false);
      setLastRequestedAt(new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }).format(new Date()));
    }
  }






  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col lg:flex-row">
        <p className=" ps-2 w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          RocketScore&nbsp;
          k8-<code className="font-mono font-bold">Demo</code>
        </p>
        <div className="h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://iwebdevelop.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            Prince Brown
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">

      </div>

      <div className="max-w-md w-full p-6 bg-white rounded-xl shadow-lg min-w-80">

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Server Response
        </h2>

        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-blue-600 text-xs">Last Requested at:</p>
            {lastRequestedAt ? <p className="text-black text-xs">{lastRequestedAt}</p> :
              <p className="text-black text-xs">N/A</p>}
          </div>
          <div>
            <button onClick={getServerStatus} className="bg-blue-500 text-black p-1 text-xs rounded-sm"><b>† Check Status</b></button>
          </div>
        </div>

        {isLoading && <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        </div>}

        {isError && <div className="border-t border-gray-200 pt-4">
          <div className="">
            <p className="text-red-500 text-xs">Error: Unable to fetch server status</p>
            <hr />
            <div>
              <p className="text-red-500 text-xs py-2">{errorMessage}</p>
            </div>
          </div>
        </div>}



        {serverStatusData && !isLoading && !isError &&

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between text-sm text-gray-700 mb-2">
              <p className="font-semibold">Server Name:</p>
              <p className="font-light">{serverStatusData.serverName}</p>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <p className="font-semibold">Server Status:</p>
              <p className="font-light flex items-center">
                <span className="mr-2 h-2 w-2 bg-green-500 rounded-full inline-block"></span>
                {serverStatusData.status} | {serverStatusData.env}
              </p>
            </div>
          </div>
        }

        {!isLoading && !isError && !serverStatusData &&

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between text-sm text-gray-700 mb-2">
              <p className="font-semibold">Server Name:</p>
              <p className="font-light">N/A</p>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <p className="font-semibold">Server Status:</p>
              <p className="font-light flex items-center">
                <span className="mr-2 h-2 w-2 bg-gray-500 rounded-full inline-block"></span>
                Unknown
              </p>
            </div>

          </div>

        }





      </div>
    </main>
  );
}
