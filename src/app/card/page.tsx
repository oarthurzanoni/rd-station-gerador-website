import { Button } from "@/app/components/button";
import { Card } from "@/app/components/card";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { Link } from "@/app/components/link";
import ArrowDown from "@/public/images/icons/arrow-down.svg";
import ArrowRightWhite from "@/public/images/icons/arrow-right-white.svg";
import ChevronLeft from "@/public/images/icons/chevron-left.svg";
import ManPaintingImage from "@/public/images/illustrations/img.png";
import Image from "next/image";

interface CardPageProps {
  searchParams: { [key: string]: string | undefined };
}

export default function CardPage({ searchParams }: CardPageProps) {
  const name = searchParams.name ? decodeURIComponent(searchParams.name) : "";
  const phone = searchParams.phone
    ? decodeURIComponent(searchParams.phone)
    : "";
  const email = searchParams.email
    ? decodeURIComponent(searchParams.email)
    : "";

  return (
    <div className="flex flex-col min-h-screen overflow-y-auto font-nunito-sans-regular bg-rd-primary-600">
      <Header />
      <main className="text-white flex xl:flex-1 items-center min-h-[calc(100vh_-_140px)] xl:min-h-full px-6 xl:px-20">
        <h1 className="sr-only">Cartão de Visita de {name}</h1>
        <div className="flex flex-col items-start justify-center w-full py-9 xl:py-6">
          <section className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-center justify-center xl:justify-between w-full">
            <div className="flex w-full justify-center xl:justify-end">
              <Image
                src={ManPaintingImage}
                width={268}
                height={198}
                alt="Man Painting"
                className="hidden md:block xl:hidden"
              />
              <Image
                src={ManPaintingImage}
                width={471}
                height={347}
                alt="Man Painting"
                className="hidden xl:block"
              />
            </div>
            <div className="flex justify-center xl:justify-start w-full">
              <div className="flex flex-col gap-4 w-full max-w-[510px]">
                <Link
                  text="normal"
                  href="/"
                  rel="noopener noreferrer"
                  leftIcon={
                    <Image
                      src={ChevronLeft}
                      height={24}
                      width={24}
                      alt="Chevron left icon"
                    />
                  }
                >
                  Gerar outro cartão
                </Link>
                <Card name={name} phone={phone} email={email} />
                <Button
                  disabled
                  text="Baixar Cartão"
                  iconLeft={
                    <Image
                      src={ArrowDown}
                      height={24}
                      width={24}
                      alt="Arrow down icon"
                    />
                  }
                />
                <Link
                  href="https://app.rdstation.com.br/signup"
                  className="w-full flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    text="fazer um teste grátis do RD Station Marketing"
                    color="transparent"
                    className="text-sm w-fit"
                    iconRight={
                      <Image
                        src={ArrowRightWhite}
                        height={24}
                        width={24}
                        alt="Arrow right icon"
                      />
                    }
                  />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
