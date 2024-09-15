// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import {  } from 'lucide-react';

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
}) as any; // Need to cast to any due to limitations in the Inter type

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
}) as any; // Need to cast to any due to limitations in the Inter type

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}