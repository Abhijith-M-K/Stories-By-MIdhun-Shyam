// app/head.tsx
export default function Head() {
    return (
      <>
        <title>My Next.js App</title>
        <meta name="description" content="My Next.js App with Google Analytics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
  
        {/* Google Analytics */}
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
      </>
    );
  }
  