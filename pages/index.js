import fs from "fs";
import Head from "next/head";
import Script from "next/script";
import path from "path";

export async function getStaticProps() {
  const root = process.cwd();
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const appSource = fs.readFileSync(path.join(root, "app.js"), "utf8");
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = (bodyMatch?.[1] || "")
    .replace(/<script\s+src=["']\.\/app\.js["']><\/script>/i, "")
    .trim();

  return {
    props: {
      bodyHtml,
      appSource
    }
  };
}

export default function Home({ bodyHtml, appSource }) {
  return (
    <>
      <Head>
        <title>New SUV Compare</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <Script id="suv-compare-app" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: appSource }} />
    </>
  );
}
