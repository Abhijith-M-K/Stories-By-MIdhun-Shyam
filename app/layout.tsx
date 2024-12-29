import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Stories By Midhun Shyam',
  description: 'Professional photographer capturing life\'s precious moments',
  metadataBase: new URL('https://storiesbymidhunshyam.netlify.app'), // Set the base URL here
  openGraph: {
    title: 'Stories By Midhun Shyam',
    description: 'Professional photographer capturing life\'s precious moments',
    url: 'https://storiesbymidhunshyam.netlify.app',
    siteName: 'Stories By Midhun Shyam',
    images: [
      {
        url: '/og-image.jpg', // Now resolved relative to metadataBase
        width: 800,
        height: 600,
        alt: 'Stories By Midhun Shyam',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="H0D0bC_0_MZn9IyUt0ylGLWMMqBTjhTayG7wekfvV2Y" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="photography, stories, professional photographer, moments, life" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Stories By Midhun Shyam" />
        <meta property="og:description" content="Professional photographer capturing life's precious moments" />
        <meta property="og:image" content="https://storiesbymidhunshyam.netlify.app/og-image.jpg" />
        <meta property="og:url" content="https://storiesbymidhunshyam.netlify.app" />
        {/* Google Analytics Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5EJCH2P0KJ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5EJCH2P0KJ');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
