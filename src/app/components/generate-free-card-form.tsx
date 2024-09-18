"use client";

import { formatPhone } from "@/app/utils/format-phone";
import ArrowRight from "@/public/images/icons/arrow-right.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./button";
import { Input } from "./input";

const generateFreeCardFormValidationSchema = z.object({
  name: z.string().min(2, "Insira seu nome"),
  email: z.string().min(5, "Insira seu e-mail").email("E-mail inválido"),
  phone: z
    .string()
    .min(14, "Insira seu telefone")
    .max(16, "O número deve conter no máximo 16 dígitos"),
});

type FormData = z.infer<typeof generateFreeCardFormValidationSchema>;

export function GenerateFreeCardForm() {
  const router = useRouter();
  const subscribe = useForm<FormData>({
    resolver: zodResolver(generateFreeCardFormValidationSchema),
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
    setValue,
    watch,
  } = subscribe;

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const rawValue = e.target.value;

    const cleanedValue = rawValue.replace(/[^\d]/g, "").slice(0, 11);
    const formattedValue = formatPhone(cleanedValue);

    setValue("phone", formattedValue, { shouldValidate: true });
  }

  async function handleFormSubmit(formData: FormData) {
    try {
      const queryString = new URLSearchParams({
        name: encodeURIComponent(formData.name),
        phone: encodeURIComponent(formData.phone.replace(/\D/g, "")),
        email: encodeURIComponent(formData.email),
      }).toString();

      router.push(`/card?${queryString}`);
    } catch (error) {
      console.error(error);
      window.alert("Erro ao gerar cartão");
    }
  }

  return (
    <form
      className="max-w-screen-sm flex flex-col gap-8 w-full mb-[6px]"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <FormProvider {...subscribe}>
        <fieldset className="flex flex-col gap-6 w-full">
          <Input
            name="name"
            required
            label="Nome"
            type="text"
            placeholder="Nome"
          />
          <div className="flex flex-col xl:flex-row items-center justify-between gap-6 w-full">
            <Input
              name="phone"
              required
              label="Telefone"
              type="tel"
              placeholder="(00) 0 0000-0000"
              maxLength={16}
              onChange={handlePhoneChange}
              value={watch("phone")}
            />
            <Input
              name="email"
              required
              label="E-mail"
              type="email"
              placeholder="nome@email.com"
            />
          </div>
        </fieldset>
        <div className="text-rd-gray-200 text-sm flex flex-col gap-4">
          <ul className="list-disc list-inside">
            <li>
              <small>
                Ao preencher o formulário, concordo * em receber comunicações de
                acordo com meus interesses.
              </small>
            </li>
            <li>
              <small>
                Ao informar meus dados, eu concordo com a Política de
                privacidade.
              </small>
            </li>
          </ul>
          <p className="text-xs">
            * Você pode alterar suas permissões de comunicação a qualquer tempo.
          </p>
        </div>
        <Button
          text="Gerar CARTÃO Grátis"
          disabled={isSubmitting}
          iconRight={
            <Image
              src={ArrowRight}
              height={24}
              width={24}
              alt="Arrow right icon"
            />
          }
        />
      </FormProvider>
    </form>
  );
}
