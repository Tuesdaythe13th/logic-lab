/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cpEbo3FSAH3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="bg-black h-20 flex items-center justify-center  
                    relative z-10 max-w-sm mx-auto">
        <h1 className="text-3xl font-bold text-white">Logic Lab</h1>
        <div className="ml-8 flex items-center gap-4">
          <InboxIcon className="w-6 h-6 text-white" />
          <CloudLightningIcon className="w-6 h-6 text-white" />
          <LightbulbIcon className="w-6 h-6 text-white" />
          <ShareIcon className="w-6 h-6 text-white" />
          <CodeIcon className="w-6 h-6 text-white" />
        </div>
      </div>

      <main className="flex-1 bg-white flex flex-col items-center justify-center p-8 gap-8 max-w-sm mx-auto">
        <div className="grid grid-cols-1 gap-4 justify-center">
          <MessageCircleIcon className="w-6 h-6 text-white mb-2 animate-bounce" />
          <Link href="/debatedojo">
            <div className="bg-gradient-to-br from-[#FFB6C1] to-[#FFC0CB] rounded-xl shadow-lg border-2 border-foreground p-4 flex flex-col items-center justify-center animate-pulse">
              <h3 className="text-lg font-bold text-white">Debate Dojo</h3>
            </div>
          </Link>
          <Link href="/dilemmagenerator">
            <div className="bg-gradient-to-br from-[#FFB6C1] to-[#FFC0CB] rounded-xl shadow-lg border-2 border-foreground p-4 flex flex-col items-center justify-center animate-pulse">
              <LightbulbIcon className="w-6 h-6 text-white mb-2 animate-bounce" />
              <h3 className="text-lg font-bold text-white">Dilemma Generator</h3>
            </div>
          </Link>
          <Link href="/logiclabAA">
            <div className="bg-gradient-to-br from-[#FFB6C1] to-[#FFC0CB] rounded-xl shadow-lg border-2 border-foreground p-4 flex flex-col items-center justify-center animate-pulse">
              <CodeIcon className="w-6 h-6 text-white mb-2 animate-bounce" />
              <h3 className="text-lg font-bold text-white">Argument Analyzer</h3>
            </div>
          </Link>
          <Link href="/ideafarm">
            <div className="bg-gradient-to-br from-[#FFB6C1] to-[#FFC0CB] rounded-xl shadow-lg border-2 border-foreground p-4 flex flex-col items-center justify-center animate-pulse">
              <FeatherIcon className="w-6 h-6 text-white mb-2 animate-bounce" />
              <h3 className="text-lg font-bold text-white">Idea Farm</h3>
            </div>
          </Link>
          <Link href="/chatbox">
            <div className="bg-gradient-to-br from-[#FFB6C1] to-[#FFC0CB] rounded-xl shadow-lg border-2 border-foreground p-4 flex flex-col items-center justify-center animate-pulse">
              <MessageCircleIcon className="w-6 h-6 text-white mb-2 animate-bounce" />
              <h3 className="text-lg font-bold text-white">ChatBox</h3>
            </div>
          </Link>
        </div>

        {/* Correct Link for "Go to my notebook" */}
        <Link href="/mynotebook">
          <Button className="bg-white text-black rounded-full px-8 py-3 animate-pulse text-lg mt-4" >
            Go to my notebook
          </Button>
        </Link>
      </main>
  
    </div>
  );
}


function CloudLightningIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  );
}

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function FeatherIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
      <path d="M16 8 2 22" />
      <path d="M17.5 15H9" />
    </svg>
  );
}

function InboxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}