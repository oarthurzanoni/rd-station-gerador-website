import Image from "next/image";
import RDStationLogo from "/public/images/logos/logo-rd-station-default.svg";

export function Header() {
  return (
    <header className="min-h-[84px] bg-rd-gray-50 py-6 px-6 xl:px-20 flex items-center justify-between">
      <Image
        src={RDStationLogo}
        width={147}
        height={36}
        alt="Logo RD Station"
        className="hidden xl:block"
      />
      <Image
        src={RDStationLogo}
        width={100}
        height={24}
        alt="Logo RD Station"
        className="block xl:hidden"
      />
      <span className="font-darker-grotesque-extra-bold text-rd-gray-900 text-lg xl:text-2xl">
        Gerador de Cartão de Visita
      </span>
    </header>
  );
}
