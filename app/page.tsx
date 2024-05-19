"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (
      "mediaDevices" in navigator &&
      "getUserMedia" in navigator.mediaDevices
    ) {
      console.log("It worked!");
      const constraints = {
        video: true,
        facingMode: {
          exact: "environment", //rear-facing camera
        },
      };
      navigator.mediaDevices.getUserMedia(constraints);
    }
  });

  async function getDevices() {
    const devices = await navigator.mediaDevices.enumerateDevices();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Camera App</h1>
      <div className="video-options">
        <select name="" id="" className="custom-select">
          <option value="">Select Camera</option>
        </select>
      </div>
      <img className="screenshot-image d-none" alt=""></img>
      <div className="controls">
        <button className="btn btn-danger play" title="Play">
          <i data-feather="play-circle"></i>
        </button>
        <button className="btn btn-info pause d-none" title="Pause">
          <i data-feather="pause"></i>
        </button>
        <button
          className="btn btn-outline-success screenshot d-none"
          title="ScreenShot"
        >
          <i data-feather="image"></i>
        </button>
      </div>
      <script src="https://unpkg.com/feather-icons"></script>
    </main>
  );
}
