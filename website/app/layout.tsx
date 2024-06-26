import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Barlow } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const barlow = Barlow({ subsets: ["latin"], weight:["100","200","300","400","500","600","700","800","900",],
  
 });

export const metadata: Metadata = {
  title: "Assiduous Dev",
  description: "Made by Devs @Assiduous Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
