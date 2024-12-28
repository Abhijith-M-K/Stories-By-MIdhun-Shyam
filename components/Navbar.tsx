"use client";

import { useState, useEffect } from "react";
import { Camera } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Camera className={isScrolled ? "text-gray-900" : "text-white"} />
            <span
              className={`text-xl font-bold ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Stories By Midhun Shyam
            </span>
          </Link>
          <div className="hidden space-x-8 md:flex">
            {["about", "services", "works", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`capitalize ${
                  isScrolled ? "text-gray-900" : "text-white"
                } hover:text-gray-300`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}