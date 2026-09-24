import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://mohammeddanish.vercel.app/'
const pageTitle = 'Mohammed Danish — Product Associate & Frontend Developer'
const pageDescription =
  'Mohammed Danish is a Product Associate at Edapt and a freelance frontend developer building modern digital products and user-focused web experiences.'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mohammed Danish',
  url: siteUrl,
  jobTitle: 'Product Associate',
  worksFor: {
    '@type': 'Organization',
    name: 'Edapt',
    url: 'https://edapt.me/',
  },
  sameAs: [
    'https://www.linkedin.com/in/mmdanish/',
    'https://github.com/mmdanish',
  ],
  knowsAbout: [
    'Product Management',
    'Product Development',
    'Frontend Development',
    'React.js',
    'JavaScript',
    'Web Development',
    'User Experience',
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    url: siteUrl,
    images: [
      {
        url: '/md-favicon.png',
        width: 1280,
        height: 1280,
        alt: 'Mohammed Danish',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/md-favicon.png'],
  },

  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: 'white',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: 'black',
    },
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}