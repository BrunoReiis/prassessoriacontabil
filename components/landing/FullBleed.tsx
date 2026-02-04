"use client";

import type { CSSProperties, PropsWithChildren } from "react";

import clsx from "clsx";

export function FullBleed({
  children,
  className,
  style,
}: PropsWithChildren<{ className?: string; style?: CSSProperties }>) {
  return (
    <div
      className={clsx(
        "relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}
