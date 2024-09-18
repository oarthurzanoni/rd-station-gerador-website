import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nunitoSansRegular = localFont({
  src: "./fonts/nunito-sans-regular.ttf",
  variable: "--font-nunito-sans-regular",
  weight: "400",
});

const nunitoSansBold = localFont({
  src: "./fonts/nunito-sans-bold.ttf",
  variable: "--font-nunito-sans-bold",
  weight: "700",
});

const darkerGrotesqueBlack = localFont({
  src: "./fonts/darker-grotesque-black.ttf",
  variable: "--font-darker-grotesque-black",
  weight: "900",
});

const darkerGrotesqueExtraBold = localFont({
  src: "./fonts/darker-grotesque-extra-bold.ttf",
  variable: "--font-darker-grotesque-extra-bold",
  weight: "800",
});

export const metadata: Metadata = {
  title: "RD Station - Gerador de Cartão de Visita do Resultados Digitais",
  description: "Gerador de Cartão de Visita do Resultados Digitais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${nunitoSansRegular.variable} ${nunitoSansBold.variable} ${darkerGrotesqueBlack.variable} ${darkerGrotesqueExtraBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
