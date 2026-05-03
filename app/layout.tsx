import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedSnap – Photo-based Medication Adherence Tracking',
  description: 'Take photos of your pills before taking them, track adherence patterns, and keep family informed automatically. AI-powered pill recognition for elderly patients.',
  keywords: 'medication reminder, pill tracker, adherence tracking, family alerts, elderly care',
  openGraph: {
    title: 'MedSnap – Photo-based Medication Adherence Tracking',
    description: 'Take photos of your pills, track adherence, and alert family automatically.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="11fa5966-9d3c-4d91-ab2e-6b6d03584bf6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
