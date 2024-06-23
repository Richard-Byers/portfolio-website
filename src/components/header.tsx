"use client";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
const goldenSignature = localFont({
  src: "../assets/GoldenSignature.otf",
  display: "swap",
});

export default function Header() {
  const links = ["about", "skills", "contact"];
  return (
    <>
      <nav className="justify-center py-2 flex w-full select-none pt-6 font-light md:px-28 md:pb-2">
        <div className="container flex flex-col items-center justify-between md:flex-row">
          <div className="text-5xl drop-shadow-2xl">
            <Link href="/">Richard Byers</Link>
          </div>
          <div className="nav-links flex gap-x-8 text-xs md:text-base justify-center">
            {links.map((link) => (
              <span
                key={link}
                className="cursor-pointer"
                onClick={() => {
                  document
                    .getElementById(link)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
