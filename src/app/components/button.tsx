import React, { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonRootClassName = tv({
  base: "relative cursor-pointer disabled:cursor-not-allowed group",
});

const buttonClassName = tv({
  base: "flex items-center justify-center gap-2 text-base transition-colors font-bold py-2 px-8 uppercase",
  variants: {
    color: {
      primary:
        "group-disabled:border-rd-gray-200 group-disabled:bg-rd-gray-200 group-disabled:text-rd-gray-600 bg-rd-secondary-500 border border-black text-black group-hover:bg-rd-secondary-400 group-hover:border-rd-secondary-400 group-disabled:border-none",
      transparent: "text-white",
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
      {color !== "transparent" ? (
        <span
          className="absolute bottom-[-6px] left-0 w-full h-[6px] bg-black group-disabled:bg-rd-gray-600 z-10 transition-all"
          style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)" }}
        />
      ) : null}
    </button>
  );
}
