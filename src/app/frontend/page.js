"use client";
import { useState } from "react";

export default function Splash() {
  const [isLoading, setLoading] = useState(true);

  if (isLoading) {
    return (
      <div className="loading">
        <video
          src="/loading.mp4"
          autoPlay
          muted
          onEnded={() => {
            setLoading(false);
          }}
        />
      </div>
    );
  }
}
