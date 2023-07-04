import "./globals.css";
import { Inter } from "next/font/google";
import { ServerRuntime } from "next";

const inter = Inter({ subsets: ["latin"] });

export const runtime: ServerRuntime = "edge";

export const metadata = {
  title: "Vercel Geo Data",
  description: "Testing the vercel geo headers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
