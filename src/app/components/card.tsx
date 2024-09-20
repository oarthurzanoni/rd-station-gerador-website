import { formatPhone } from "@/app/utils/format-phone";
import Image from "next/image";
import RDStationSymbol from "/public/images/symbols/symbol-rd-station-default.svg";

interface CardProps {
  name?: string;
  phone?: string;
  email?: string;
}

export function Card({ name, phone, email }: CardProps) {
  return (
    <div className="flex justify-center gap-4 xl:gap-5 py-8 px-8 xl:px-[72px] bg-white rounded-3xl xl:min-h-[247px]">
      <Image
        src={RDStationSymbol}
        height={60}
        width={70}
        alt="RD Symbol"
        className="hidden xl:block"
      />
      <Image
        src={RDStationSymbol}
        height={38}
        width={45}
        alt="RD Symbol"
        className="block xl:hidden"
      />
      <div className="border-l-[3px] bg-rd-primary-200" />
      <div className="flex justify-center flex-col gap-3 xl:gap-6 text-black w-full">
        <p>{name ?? "Nome e Sobrenome"}</p>
        <p>{phone ? formatPhone(phone) : "(00) 0 0000-000"}</p>
        <p>{email ?? "meuemail@email.com"}</p>
      </div>
    </div>
  );
}
