import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://danish-portfolio-liard.vercel.app/'
const pageTitle = 'Mohammed Danish — Product Management Intern & Frontend Developer'
const pageDescription = 'Mohammed Danish is a Product Management Intern at Edapt and a freelance frontend developer building modern digital products and user-focused web experiences.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: pageTitle,
    description: 'Product Management Intern at Edapt and freelance frontend developer building modern digital products and user-focused web experiences.',
    type: 'website',
    url: siteUrl,
    images: [{ url: '/md-favicon.png', width: 1280, height: 1280, alt: 'MD monogram for Mohammed Danish' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/md-favicon.png'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            { '@type': 'Person', name: 'Mohammed Danish', url: siteUrl, jobTitle: 'Product Management Intern', worksFor: { '@type': 'Organization', name: 'Edapt' }, sameAs: ['https://github.com/mmdanish', 'https://linkedin.com/in/mmdanish'] },
            { '@type': 'WebSite', name: 'Mohammed Danish', url: siteUrl },
          ],
        }) }} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
