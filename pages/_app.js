/** App wrapper for Next.js pages. Keeps global metadata minimal to prevent conflicts with static site scripts. */
import Head from "next/head";

// PUBLIC_INTERFACE
export default function MyApp({ Component, pageProps }) {
  /** Renders the Next.js application and injects global meta tags. */
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Portfolio</title>
        {/* This meta is used by the static contact form (mailto) if needed */}
        <meta name="contact-email" content="rkamathvenkatesh@gmail.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
