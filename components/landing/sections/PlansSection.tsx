"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";

import { Section } from "@/components/landing/Section";
import { BRAND, BRAND_BORDER } from "@/components/landing/theme";
import { title } from "@/components/primitives";

export function PlansSection() {
  return (
    <Section id="planos" tone="white">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h2 className={title({ size: "md" })}>Planos</h2>
          <p className="mt-3 text-default-600 max-w-2xl">
            Escolha o nível de acompanhamento ideal. Ajustamos conforme seu
            crescimento.
          </p>
        </div>
        <Button
          as={Link}
          href="#contato"
          radius="full"
          variant="flat"
          className="text-white"
          style={{ backgroundColor: BRAND }}
        >
          Pedir proposta
        </Button>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Card className="border border-default-200">
          <CardHeader className="flex flex-col items-start gap-2">
            <Chip className="bg-default-100" size="sm" variant="flat">
              Essencial
            </Chip>
            <p className="text-xl font-semibold">Para começar com segurança</p>
            <p className="text-default-600 text-sm">
              Rotina contábil e fiscal bem amarrada.
            </p>
          </CardHeader>
          <CardBody className="pt-0">
            <ul className="list-disc pl-5 space-y-2 text-default-600">
              <li>Contabilidade mensal</li>
              <li>Apuração de impostos</li>
              <li>Obrigações acessórias</li>
            </ul>
            <Button
              as={Link}
              className="mt-6"
              href="#contato"
              radius="full"
              variant="bordered"
            >
              Conversar
            </Button>
          </CardBody>
        </Card>

        <Card className="border shadow-lg" style={{ borderColor: BRAND_BORDER }}>
          <CardHeader className="flex flex-col items-start gap-2">
            <Chip
              size="sm"
              variant="solid"
              className="text-white"
              style={{ backgroundColor: BRAND }}
            >
              Mais popular
            </Chip>
            <p className="text-xl font-semibold">Crescimento</p>
            <p className="text-default-600 text-sm">
              Para empresas que querem previsibilidade e relatórios.
            </p>
          </CardHeader>
          <CardBody className="pt-0">
            <ul className="list-disc pl-5 space-y-2 text-default-600">
              <li>Tudo do Essencial</li>
              <li>Folha + eSocial</li>
              <li>Relatórios mensais</li>
            </ul>
            <Button
              as={Link}
              className="mt-6 text-white"
              href="#contato"
              radius="full"
              style={{ backgroundColor: BRAND }}
            >
              Agendar diagnóstico
            </Button>
          </CardBody>
        </Card>

        <Card className="border border-default-200">
          <CardHeader className="flex flex-col items-start gap-2">
            <Chip className="bg-default-100" size="sm" variant="flat">
              Consultivo
            </Chip>
            <p className="text-xl font-semibold">Performance</p>
            <p className="text-default-600 text-sm">
              Para quem precisa de análise e planejamento.
            </p>
          </CardHeader>
          <CardBody className="pt-0">
            <ul className="list-disc pl-5 space-y-2 text-default-600">
              <li>Tudo do Crescimento</li>
              <li>BPO financeiro (opcional)</li>
              <li>Planejamento tributário</li>
            </ul>
            <Button
              as={Link}
              className="mt-6"
              href="#contato"
              radius="full"
              variant="bordered"
            >
              Montar plano
            </Button>
          </CardBody>
        </Card>
      </div>
    </Section>
  );
}
