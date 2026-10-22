import type { Metadata } from "next";
import { Jura, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import EventsTicker from "@/components/EventsTicker";
import HintSystem from "@/components/HintSystem";
import Footer from "@/components/Footer";

// Global Styles
import "@/styles/style.css";
import "@/styles/navbar.css";
import "@/styles/hints.css";

const jura = Jura({
  subsets: ["latin"],
  variable: "--font-jura",
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vantage Persona | Luxury Sartorial Experience",
  description:
    "Dedicated to engineering your identity, style, and presence through personalized, bespoke sartorial systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jura.variable} ${plusJakarta.variable}`}
    >
      <body>
        <EventsTicker />
        <Navbar />
        {children}
        <Footer />
        <HintSystem />
      </body>
    </html>
  );
}
