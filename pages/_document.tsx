import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  console.log('document called');
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Playfair+Display&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
