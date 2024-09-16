/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cpEbo3FSAH3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ReadyToRoll() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/workspaces/thirdtry/app/directory"); // Replace with the correct path
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="relative w-[280px] h-[560px] bg-white rounded-2xl shadow-lg border border-foreground">
        <div className="flex flex-col items-center justify-center h-full px-4">
          <div className="relative w-full h-[150px] flex items-center justify-center">
            <h1 className="text-5xl font-extrabold text-foreground leading-tight text-center uppercase animate-bounce">
              READY
              <br />
              TO ROLL?
            </h1>
          </div>
          <div className="mt-3 animate-spin">
            <PowerIcon className="w-6 h-6 text-foreground" />
          </div>
          <div className="mt-4 w-full space-y-2">
            <div className="group relative">
              <div className="bg-gradient-to-br from-pink-300 to-pink-400 rounded-full p-3 border border-foreground flex items-center justify-center group-hover:bg-pink-350 transition-colors">
                <ChromeIcon className="w-4 h-4 mr-2 text-white" />
                <span className="text-white text-[10px]">
                  Sign in with Google
                </span>
              </div>
              <p className="mt-1 text-[10px] text-muted-foreground" />
            </div>
            <div className="group relative">
              <div className="bg-gradient-to-br from-pink-300 to-pink-400 rounded-full p-3 border border-foreground flex items-center justify-center group-hover:bg-pink-350 transition-colors">
                <GithubIcon className="w-4 h-4 mr-2 text-white" />
                <span className="text-white text-[10px]">
                  Sign in with GitHub
                </span>
              </div>
              <p className="mt-1 text-[10px] text-muted-foreground" />
            </div>
            <div className="group relative">
              <div className="bg-gradient-to-br from-pink-300 to-pink-400 rounded-full p-3 border border-foreground flex items-center justify-center group-hover:bg-pink-350 transition-colors">
                <MailIcon className="w-4 h-4 mr-2 text-white" />
                <span className="text-white text-[10px]">
                  Sign in with Email
                </span>
              </div>
              <p className="mt-1 text-[10px] text-muted-foreground" />
            </div>
          </div>
          <div className="mt-4 w-full">
            <form className="bg-white rounded-2xl p-3 border border-foreground">
              <div className="space-y-2">
                <Input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="bg-transparent text-foreground placeholder:text-foreground text-[12px]"
                />
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="bg-transparent text-foreground placeholder:text-foreground text-[12px]"
                />
                <Link href="/directory">
                  <Button
                    type="submit"
                    onClick={handleRedirect} // Call the redirect function on button click
                    className="w-full h-7 flex items-center justify-center bg-black text-white rounded-md hover:bg-gray-700 transition-colors text-[10px]"
                  >
                    <RocketIcon className="w-3 h-3 mr-1 animate-[bounce_1s_ease-in-out_infinite]" />
                    Lets Go
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-foreground rounded-b-2xl" />
      </div>
    </div>
  );
}

function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PowerIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  );
}

function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}