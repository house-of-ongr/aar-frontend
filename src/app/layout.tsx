import type { Metadata } from "next";
import "./globals.css";
import SWRConfigContext from "@/context/SWRConfigContext";


export const metadata: Metadata = {
  title: "aar-frontend",
  description: "아오옹의 소리모음",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="flex flex-col w-full"
      >
        <SWRConfigContext>
          {children}
        </SWRConfigContext>
      </body>
    </html>
  );
}
