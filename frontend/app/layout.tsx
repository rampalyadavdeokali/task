import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering Search Platform",
  description: "Browse and search catering services"
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
