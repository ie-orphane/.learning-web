import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: ".learning",
  description: "the dot learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black p-4">
        <div className="*:rounded-lg rounded-lg">{children}</div>
      </body>
    </html>
  );
}
