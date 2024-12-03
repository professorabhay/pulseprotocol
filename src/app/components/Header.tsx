"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import pulse from "./pulse.png"

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress from 0 to 1 over first 100px of scroll
      const progress = Math.min(window.scrollY / 100, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Interpolate opacity from 0.65 to 0 based on scroll progress
  const shadowOpacity = 0.65 * (1 - scrollProgress);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4",
        "backdrop-blur-xl border-b border-white/10",
        "after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-[20px] after:bg-gradient-to-b after:from-black/20 after:to-transparent after:pointer-events-none"
      )}
      style={{
        boxShadow: `0 80px 200px 0 rgba(59,130,246,${shadowOpacity})`
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex text-3xl font-bold bg-clip-text text-transparent ">
          <Image
            src={pulse}
            alt="Bot Interface"
            height={50}
            width={50}
            className="object-cover rounded-3xl"
            draggable={false}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="https://x.com/Pulseprotocolao"
            target="_blank"
            className="text-base text-gray-300 hover:text-white transition-colors"
          >
            Twitter
          </Link>
          <Link
            href="mailto:pulseprotocolao@gmail.com"
            className="text-base text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </Link>
          <Link 
              href="https://abhays-organization-2.gitbook.io/pulse-protocol-docs/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 transition-colors"
            >
              Docs
            </Link>
        </nav>

        <button className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
