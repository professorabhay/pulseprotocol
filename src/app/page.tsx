"use client";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { RevealOnScroll } from "./components/ui/reveal-on-scroll";
import Header from "./components/header";
import React from "react";
import { BentoDemo } from "./components/Features-Bento2";
import { catchyLine as CatchyLine } from "./components/catchyline";

function RevealLayout({ children }: { children: React.ReactNode }) {
  return React.Children.map(children, (child) => (
    <RevealOnScroll width="100%">
      {child}
    </RevealOnScroll>
  ));
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <RevealLayout>
        <Hero />
        <CatchyLine />
        <div className="w-1/2 mx-auto">
          <BentoDemo/>
        </div>
        <Features />
        <Footer />
      </RevealLayout>
    </div>
  );
}