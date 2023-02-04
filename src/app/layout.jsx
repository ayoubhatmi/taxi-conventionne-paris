import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "@next/font/google";
import Script from "next/script";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "optional",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={poppins.className}>
      <head />

      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-P70MTJ3J16"
      />
      <Script strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-P70MTJ3J16');`}
      </Script>

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
