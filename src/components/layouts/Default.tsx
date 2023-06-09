import Head from "next/head";
import { type ReactNode } from "react";
import { Navbar } from "../modules/Navbar";
import { Footer } from "../modules/Footer";

interface DefaultProps {
  children: ReactNode;
  pageTitle: string;
  description?: string;
  pageImage?: string;
}

export function Default({
  children,
  pageTitle,
  pageImage,
  description,
}: DefaultProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />

        <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="theme-color" content="#121214" />
        <meta name="msapplication-TileColor" content="#121214" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="google" content="notranslate" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={pageTitle} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:image:secure_url" content={pageImage} />
        <meta property="og:image:alt" content="Thumbnail" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@parajasbrasil" />
        <meta name="twitter:creator" content="@parajasbrasil" />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:image:src" content={pageImage} />
        <meta name="twitter:image:alt" content="Thumbnail" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="620" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col">{children}</main>
      <Footer />
    </>
  );
}
