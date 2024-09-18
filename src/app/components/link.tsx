import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React, { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const linkClassName = tv({
  base: "flex items-center gap-2",
  variants: {
    text: {
      normal: "font-nunito-sans-regular",
      bold: "font-nunito-sans-bold",
    },
  },
  defaultVariants: {
    text: "bold",
  },
});

type LinkProps = NextLinkProps &
  ComponentProps<"a"> &
  VariantProps<typeof linkClassName> & {
    className?: string;
    children?: React.ReactNode;
    leftIcon?: React.ReactNode;
  };

export function Link({
  children,
  leftIcon,
  href,
  className,
  text,
  ...props
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={linkClassName({ className, text })}
      rel="noopener noreferrer"
      {...props}
    >
      {leftIcon}
      {children}
    </NextLink>
  );
}
