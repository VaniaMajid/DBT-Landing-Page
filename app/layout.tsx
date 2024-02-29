import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Disrupt the Basic",
  description: "DTB Landing Page",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        <ScrollToTop/>
        </div>
      </body>
    </html>
  );
}
