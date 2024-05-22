"use client"; // Error components must be Client Components

import { useEffect } from "react";
import ReplayIcon from "@mui/icons-material/Replay";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center h-[500px] justify-center ">
      <div className=" text-center text-3xl">
        <p className="mb-3">Oops!!</p>
        <h2 className=" mb-10"> Something went wrong!</h2>
      </div>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="text-xl bg-cyan-700 p-2 rounded-lg"
      >
        <ReplayIcon></ReplayIcon>
        Try again
      </button>
    </div>
  );
}
