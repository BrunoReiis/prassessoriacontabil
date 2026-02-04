"use client";

import type { PropsWithChildren } from "react";

import { FullBleed } from "@/components/landing/FullBleed";
import { SOFT_BG } from "@/components/landing/theme";

export function Section({
  id,
  tone = "soft",
  children,
}: PropsWithChildren<{ id?: string; tone?: "soft" | "white" }>) {
  return (
    <FullBleed
      className="py-16 sm:py-20"
      style={{ backgroundColor: tone === "white" ? "#ffffff" : SOFT_BG }}
    >
      <section className="mx-auto max-w-7xl px-6" id={id}>
        {children}
      </section>
    </FullBleed>
  );
}
