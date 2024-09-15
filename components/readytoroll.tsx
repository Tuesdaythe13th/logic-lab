/**
 * v0 by Vercel.
 * @see https://v0.dev/t/17kzxVu2URM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client';

import React, { useState } from 'react';
import {  PowerIcon } from 'lucide-react'; // Import the icon

export default function ReadyToRoll() {
  const [isSignIn, setIsSignIn] = useState(false);

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
            <PowerIcon className="w-6 h-6 text-foreground" /> {/* Use the imported icon */}
          </div>
          <div className="mt-4 w-full space-y-2">
            {/* ... your other components ... */}
          </div>
          <div className="mt-4 w-full">
            {/* ... your other components ... */}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-foreground rounded-b-2xl" />
      </div>
    </div>
  );
}

// ... other components ...