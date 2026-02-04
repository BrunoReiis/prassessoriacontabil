"use client";

import { FeatureCard } from "@/components/landing/FeatureCard";
import { Section } from "@/components/landing/Section";
import { title } from "@/components/primitives";

export function ServicesSection() {
  return (
    <Section id="servicos" tone="white">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h2 className={title({ size: "md" })}>Serviços</h2>
          <p className="mt-3 text-default-600 max-w-2xl">
            O essencial bem feito — e com visibilidade. Você sabe o que está
            sendo feito, quando e por quê.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          description="Do CNPJ ao enquadramento ideal: organização, documentos e orientação para começar certo."
          eyebrow="Empresas"
          title="Abertura e regularização"
        />
        <FeatureCard
          description="Lançamentos, conciliação, demonstrações e acompanhamento com linguagem simples."
          eyebrow="Mensal"
          title="Contabilidade completa"
        />
        <FeatureCard
          description="Apuração e entrega de obrigações com consistência — sem sustos e sem atrasos."
          eyebrow="Fiscal"
          title="Impostos e obrigações"
        />
        <FeatureCard
          description="Admissões, folhas, encargos e eventos do eSocial com orientação para reduzir risco."
          eyebrow="RH"
          title="Folha e eSocial"
        />
        <FeatureCard
          description="Rotina financeira organizada, relatórios e previsibilidade para decisões melhores."
          eyebrow="Gestão"
          title="BPO financeiro"
        />
        <FeatureCard
          description="Análise de cenários e revisão do regime para pagar o justo e manter conformidade."
          eyebrow="Consultivo"
          title="Planejamento tributário"
        />
      </div>
    </Section>
  );
}
