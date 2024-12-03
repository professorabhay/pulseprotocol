"use client";
import React from 'react';
import { ContainerScroll } from './ui/container-scroll-animation';
import Image from "next/image";
import Dashboard from "../../../public/dashboard.png";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden pt-10 -mb-10 min-h-screen">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff33_1px,transparent_1px)] [mask-image:radial-gradient(circle_at_center,_black,transparent_90%)] [background-size:16px_16px]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem]">
        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-[128px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-48">
        <div className="flex flex-col gap-12">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent leading-tight">
                <span>Pulse</span>
                <span className="font-light">Protocol</span>
              </h1>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto font-light text-blue-200/90">
                A social graph protocol running on AO by Arweave!
              </p>
            </div>
            
            <div className="flex justify-center">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#60A5FA_0%,#1D4ED8_50%,#60A5FA_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-4 text-lg font-bold text-white backdrop-blur-3xl">
                  Social Pulse Of AO
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}