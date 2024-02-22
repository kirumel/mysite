"use client";
import React, { useState, useEffect } from "react";

export default function Splash() {
  const [isloading, setloading] = useState(true);
  const [isout, setout] = useState(false);

  //setloading 함수를 3.5초 뒤에 false로 바꿈
  useEffect(() => {
    const timeout = setTimeout(() => {
      setloading(false);
    }, 3500);

    //시간 초기화
    return () => clearTimeout(timeout);
  }, []);

  //set out 함수를 2초 뒤에 true로 바꿈
  useEffect(() => {
    const fadeouttime = setTimeout(() => {
      setout(true);
    }, 2000);

    //시간 초기화
    return () => clearTimeout(fadeouttime);
  }, []);

  //is out의 state값이 true로 바뀌면 yesfadeout으로 classname을 지정함 false일시 ""로 지정
  if (isloading) {
    return (
      <div className={`fadeout ${isout ? "yesfadeout" : ""}`}>
        <div className="loading">
          <video
            src="/loading.mp4"
            autoPlay
            muted
            onEnded={() => {
              setloading(false);
            }}
          />
        </div>
      </div>
    );
  }
}
