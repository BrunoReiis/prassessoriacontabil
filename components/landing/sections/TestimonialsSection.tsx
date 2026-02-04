"use client";

import clsx from "clsx";

import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";

import { PersonCard } from "@/components/landing/PersonCard";
import { Section } from "@/components/landing/Section";
import { BRAND, BRAND_SOFT } from "@/components/landing/theme";
import { title } from "@/components/primitives";

export function TestimonialsSection() {
  return (
    <Section id="depoimentos" tone="soft">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <Chip
            className="w-fit"
            size="sm"
            variant="flat"
            style={{ backgroundColor: BRAND_SOFT, color: BRAND }}
          >
            Histórias reais, impacto direto
          </Chip>
          <h2 className={clsx(title({ size: "md" }), "mt-4")}>
            Mais tranquilidade.
            <span className="block">Mais clareza.</span>
            <span className="block">Mais crescimento.</span>
          </h2>
          <p className="mt-3 text-default-600 max-w-2xl">
            A ideia é simples: uma contabilidade que tira o peso do seu dia a dia
            e deixa você focar no que faz a empresa avançar.
          </p>
          <div className="mt-8">
            <Button
              as={Link}
              href="#contato"
              radius="full"
              className="text-white"
              style={{ backgroundColor: BRAND }}
            >
              Quero isso para minha empresa
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <PersonCard
            name="Ana Martins"
            role="Serviços • Comércio"
            src="/people/ana.svg"
            quote="Passei a ter previsibilidade de impostos e uma rotina mensal que realmente fecha."
          />
          <PersonCard
            name="Carlos Lima"
            role="Tecnologia • Prestação de serviços"
            src="/people/carlos.svg"
            quote="Relatórios objetivos e suporte rápido. Agora eu decido com base em números."
          />
          <div className="sm:col-span-2">
            <PersonCard
              name="Mariana Souza"
              role="Saúde • Clínica"
              src="/people/mariana.svg"
              quote="A sensação é de controle: obrigações em dia e uma visão clara do mês."
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
