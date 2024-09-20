import Image from "next/image";
import { Footer } from "./components/footer";
import { GenerateFreeCardForm } from "./components/generate-free-card-form";
import { Header } from "./components/header";
import ManPaintingImage from "/public/images/illustrations/img.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-y-auto font-nunito-sans-regular bg-rd-primary-600">
      <Header />
      <main className="text-white flex xl:flex-1 items-center min-h-[calc(100vh_-_140px)] xl:min-h-full px-6 xl:px-20">
        <div className="flex flex-col gap-11 items-center justify-center w-full py-[54px] xl:py-6">
          <div className="flex flex-col gap-4 text-center max-w-[560px]">
            <h1 className="font-darker-grotesque-extra-bold text-xl xl:text-4xl">
              Gerador de Cartão de Visita Digital
            </h1>
            <h2 className="text-base">
              Crie grátis seu cartão de visita em passos rápidos! Você o insere
              no Instagram e demais canais digitais.
            </h2>
          </div>
          <section className="flex flex-col xl:flex-row gap-12 xl:gap-4 items-center justify-center xl:justify-between w-full">
            <Image
              src={ManPaintingImage}
              width={268}
              height={198}
              alt="Ilustração de um homem pintando, representando criatividade."
              className="block xl:hidden"
            />
            <Image
              src={ManPaintingImage}
              width={471}
              height={347}
              alt="Ilustração de um homem pintando, representando criatividade."
              className="hidden xl:block"
            />
            <GenerateFreeCardForm />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
