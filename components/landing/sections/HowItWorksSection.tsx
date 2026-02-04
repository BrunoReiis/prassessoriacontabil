"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";

import { Metric } from "@/components/landing/Metric";
import { Section } from "@/components/landing/Section";
import { BRAND, BRAND_SOFT } from "@/components/landing/theme";
import { title } from "@/components/primitives";

export function HowItWorksSection() {
  return (
    <Section tone="soft">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className={title({ size: "md" })}>Como funciona</h2>
          <p className="mt-3 text-default-600 max-w-2xl">
            Um processo simples, com entregas claras e acompanhamento próximo.
          </p>

          <div className="mt-8 grid gap-4">
            <Card className="border border-default-200 bg-content1/70">
              <CardBody className="flex gap-4">
                <Chip variant="flat" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
                  1
                </Chip>
                <div>
                  <p className="font-semibold">Diagnóstico rápido</p>
                  <p className="text-default-600">
                    Entendemos seu momento, regime, rotinas e prioridades.
                  </p>
                </div>
              </CardBody>
            </Card>
            <Card className="border border-default-200 bg-content1/70">
              <CardBody className="flex gap-4">
                <Chip variant="flat" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
                  2
                </Chip>
                <div>
                  <p className="font-semibold">Onboarding e organização</p>
                  <p className="text-default-600">
                    Checklist de documentos + agenda de entregas, sem confusão.
                  </p>
                </div>
              </CardBody>
            </Card>
            <Card className="border border-default-200 bg-content1/70">
              <CardBody className="flex gap-4">
                <Chip variant="flat" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
                  3
                </Chip>
                <div>
                  <p className="font-semibold">Rotina mensal com visibilidade</p>
                  <p className="text-default-600">
                    Fechamento, impostos, folhas e relatórios em um fluxo
                    previsível.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="lg:pl-10">
          <Card className="border border-default-200 bg-content1/70 backdrop-blur">
            <CardHeader className="flex items-start justify-between">
              <div>
                <p className="text-sm text-default-500">O que você recebe</p>
                <p className="font-semibold tracking-tight">Entregas que ajudam a decidir</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="gap-4">
              <div className="grid grid-cols-2 gap-3">
                <Metric label="DRE" value="Mensal" />
                <Metric label="Balancete" value="Mensal" />
                <Metric label="Pró-labore" value="Em dia" />
                <Metric label="Impostos" value="Previsíveis" />
              </div>
              <Card className="border border-default-200 bg-content2/60">
                <CardBody className="gap-2">
                  <p className="text-sm font-medium">Acompanhamento</p>
                  <p className="text-default-600 text-sm">
                    Você sempre sabe o status do mês — e o que depende de você.
                  </p>
                </CardBody>
              </Card>
            </CardBody>
          </Card>
        </div>
      </div>
    </Section>
  );
}
