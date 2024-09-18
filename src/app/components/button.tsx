import React, { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonRootClassName = tv({
  base: "relative cursor-pointer disabled:cursor-not-allowed group",
});

const buttonClassName = tv({
  base: "button-shadow flex items-center justify-center gap-2 text-base transition-colors font-bold py-2 px-4 uppercase",
  variants: {
    color: {
      primary:
        "group-disabled:button-shadow-disabled group-disabled:bg-rd-gray-200 group-disabled:text-rd-gray-600 bg-rd-secondary-500 border border-black text-black group-hover:bg-rd-secondary-400 group-hover:border-rd-secondary-400 group-disabled:border-none",
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
    <button className={buttonRootClassName({})} {...props}>
      <div className={buttonClassName({ className, color })}>
        {iconLeft}
        <span>{text}</span>
        {iconRight}
      </div>
    </button>
  );
}
