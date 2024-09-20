import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nunitoSansRegular = localFont({
  src: "./fonts/nunito-sans-regular.ttf",
  variable: "--font-nunito-sans-regular",
  weight: "400",
  display: "swap",
});

const nunitoSansBold = localFont({
  src: "./fonts/nunito-sans-bold.ttf",
  variable: "--font-nunito-sans-bold",
  weight: "700",
  display: "swap",
});

const darkerGrotesqueBlack = localFont({
  src: "./fonts/darker-grotesque-black.ttf",
  variable: "--font-darker-grotesque-black",
  weight: "900",
  display: "swap",
});

const darkerGrotesqueExtraBold = localFont({
  src: "./fonts/darker-grotesque-extra-bold.ttf",
  variable: "--font-darker-grotesque-extra-bold",
  weight: "800",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RD Station - Gerador de Cartão de Visita do Resultados Digitais",
  description:
    "Crie gratuitamente seu cartão de visita com o Gerador de Cartão de Visita do Resultados Digitais.",
  openGraph: {
    title: "RD Station - Gerador de Cartão de Visita",
    description:
      "Crie gratuitamente seu cartão de visita com o Gerador de Cartão de Visita do Resultados Digitais.",
    url: "https://rd-station-gerador-website.vercel.app/",
    type: "website",
    images: ["https://rd-station-gerador-website.vercel.app/og-image.png"],
  },
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
