"use client";

import { useRef, useEffect, use } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-youtube";

export default function PlayerCSS() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = videojs(videoRef.current, {
        techOrder: ["youtube"],
        sources: [
          {
            src: "https://www.youtube.com/watch?v=IkOVe40Sy0U",
            type: "video/youtube",
          },
        ],
        controls: true,
        preload: "auto",
      });

      return () => {
        player.dispose();
      };
    }
  }, []);

  return (
    <div data-vjs-player>
    <h1 >
      The implementation below is without react functions
    </h1>
      <video
        ref={videoRef}
        className="video-js vjs-theme-city"
        playsInline
      />
    </div>
  );
}
