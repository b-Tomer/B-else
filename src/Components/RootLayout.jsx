import "../app/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Ashdod - Driving school",
//   description: "Ashdod - Driving school",
// };

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="vAeSIT0wmGq-6fVBD1MHc9iFUUiimStpsmbOTMP9ApI" />
        <link rel="icon" sizes="192x192" href="https://res.cloudinary.com/dlz0x3nss/image/upload/v1715603117/main-web/uht6mggxu01sxytu6vx1.jpg" type="image/png"></link>
        <link rel="shortcut icon" href="https://res.cloudinary.com/dlz0x3nss/image/upload/v1715603117/main-web/uht6mggxu01sxytu6vx1.jpg" type="image/png"></link>
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dlz0x3nss/image/upload/v1715603117/main-web/uht6mggxu01sxytu6vx1.jpg" type="image/png"></link>
        <title>בית ספר לנהיגה - אשדוד</title>
      </Head>

      {/* <Header /> */}
      <section dir='rtl' className='scroll-smooth relative bg-main-yellow max-w-[1300px] mx-auto min-h-screen px-0 '>

        {children}

        {/* <Footer /> */}
      </section>
    </>

  );
}
