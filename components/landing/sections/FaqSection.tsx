"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";

import { Section } from "@/components/landing/Section";
import { title } from "@/components/primitives";

export function FaqSection() {
  return (
    <Section id="faq" tone="soft">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className={title({ size: "md" })}>Perguntas frequentes</h2>
          <p className="mt-3 text-default-600">Transparência desde o primeiro contato.</p>
        </div>
        <Accordion variant="splitted">
          <AccordionItem key="1" aria-label="Atendem MEI?" title="Vocês atendem MEI?">
            Sim. Avaliamos se faz sentido continuar como MEI ou migrar para ME.
          </AccordionItem>
          <AccordionItem key="2" aria-label="Troca de contador" title="Como funciona a troca de contador?">
            Organizamos a transição com checklist e alinhamento com o contador atual.
          </AccordionItem>
          <AccordionItem key="3" aria-label="Atendimento" title="O atendimento é online?">
            Sim. Atendimento digital com suporte rápido por canais combinados.
          </AccordionItem>
          <AccordionItem key="4" aria-label="Valores" title="Como são definidos os valores?">
            Depende do regime, volume e necessidades (folha, BPO, consultivo). Enviamos proposta objetiva.
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
}
