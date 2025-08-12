/** Next.js landing page that redirects to the static index.html under /public for full experience. */
import { useEffect } from "react";
import Head from "next/head";

// PUBLIC_INTERFACE
export default function Home() {
  /** Client-side redirect to the static HTML experience. */
  useEffect(() => {
    // Use replace to avoid back button loop
    window.location.replace("/index.html");
  }, []);

  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Loading portfolio…</h1>
        <p>
          If you are not redirected automatically,{" "}
          <a href="/index.html">click here to open the portfolio</a>.
        </p>
      </main>
    </>
  );
}
