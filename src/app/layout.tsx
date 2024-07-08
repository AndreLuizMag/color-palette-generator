import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/helix/helixcss.css";
import "@/styles/helix/helixcolor.css";
import "@/styles/main.scss";

const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "Color Picker",
  description: "A color picker component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-10 theme-secondary`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
