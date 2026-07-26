import "./globals.css";
import { Nunito_Sans } from 'next/font/google'

const nunito = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: "Iago Fragnan - Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${nunito.className} h-full antialiased`} >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
