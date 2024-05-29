import type { Metadata } from "next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs Blog",
  description: "Trying Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-zinc-900 bg-zinc-300`}>
        <Container>
          <Header />
            {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
