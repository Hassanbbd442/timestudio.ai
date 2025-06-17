import Head from 'next/head';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | TimeStudio.ai` : 'TimeStudio.ai'}</title>
        <meta name="description" content="Preserve your legacy. Time-lock and release your content into the future." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="TimeStudio.ai" />
        <meta property="og:description" content="A platform for timed content release — posthumous, delayed, or future-dated digital capsules." />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-900 text-white min-h-screen">
        {children}
      </main>
    </>
  );
}
