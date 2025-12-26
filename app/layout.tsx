import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iago Fragnan - Portfolio",
  description: "Portfolio de Iago Fragnan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
