import React, { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonClassName = tv({
  base: "relative cursor-pointer button-shadow disabled:button-shadow-disabled flex items-center justify-center gap-2 text-base transition-colors font-bold py-2 px-4 uppercase",
  variants: {
    color: {
      primary:
        "disabled:cursor-not-allowed  disabled:bg-rd-gray-200 disabled:text-rd-gray-600 bg-rd-secondary-500 border border-black text-black hover:bg-rd-secondary-400 hover:border-rd-secondary-400 disabled:border-none",
      transparent: "text-white button-shadow-transparent",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type buttonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonClassName> & {
    text: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  };

export function Button({
  iconRight,
  iconLeft,
  text,
  className,
  color,
  ...props
}: buttonProps) {
  return (
    <button className={buttonClassName({ className, color })} {...props}>
      {iconLeft}
      <span>{text}</span>
      {iconRight}
    </button>
  );
}
