import { ErrorMessage } from "@hookform/error-message";
import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import InputMask, { Props as InputMaskProps } from "react-input-mask";

import { tv } from "tailwind-variants";

const inputClassName = tv({
  base: "bg-rd-gray-50 py-2 px-3 placeholder-rd-gray-800 text-rd-gray-900 font-nunito-sans-regular",
});

type InputProps = Omit<InputMaskProps, "mask"> & {
  label?: string;
  mask?: string;
  name: string;
};

type LabelProps = ComponentProps<"label"> & {
  label: string;
  htmlFor?: string;
  required?: boolean;
};

function Label({ label, required, ...props }: LabelProps) {
  return (
    <label className="text-white" {...props}>
      {label}
      {required && "*"}
    </label>
  );
}

export function Input({
  label,
  className,
  mask,
  required,
  name,
  ...props
}: InputProps) {
  const inputClass = inputClassName({ className });
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="font-nunito-sans-bold flex flex-col gap-3 w-full">
      {label ? (
        <Label label={label} htmlFor={props.id} required={required} />
      ) : null}
      {mask ? (
        <InputMask
          {...register(name)}
          mask={mask}
          className={inputClass}
          {...props}
        />
      ) : (
        <input {...register(name)} className={inputClass} {...props} />
      )}
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p role="alert" className="text-left text-rd-gray-900">
            {message}
          </p>
        )}
      />
    </div>
  );
}
