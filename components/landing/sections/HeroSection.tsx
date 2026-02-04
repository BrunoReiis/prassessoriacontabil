"use client";

import clsx from "clsx";

import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";

import { subtitle, title } from "@/components/primitives";
import { DashboardMock } from "@/components/landing/DashboardMock";
import { Section } from "@/components/landing/Section";
import { BRAND, BRAND_SOFT } from "@/components/landing/theme";

export function HeroSection() {
  return (
    <Section id="inicio" tone="soft">
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center">
        <div className="text-center lg:text-left">
          <Chip
            className="w-fit mx-auto lg:mx-0"
            variant="flat"
            style={{ backgroundColor: BRAND_SOFT, color: BRAND }}
          >
            Contabilidade moderna — foco no seu crescimento
          </Chip>
          <h1 className={clsx(title({ size: "lg" }), "mt-4")}>Prassessoria</h1>
          <p className={clsx(subtitle(), "mt-4 max-w-2xl mx-auto lg:mx-0")}>
            Uma contabilidade feita para dar clareza, previsibilidade e
            tranquilidade. Rotinas em dia, relatórios objetivos e suporte de
            verdade.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              as={Link}
              href="#contato"
              radius="full"
              size="lg"
              className="text-white"
              style={{ backgroundColor: BRAND }}
            >
              Agendar diagnóstico
            </Button>
            <Button
              as={Link}
              href="#planos"
              radius="full"
              size="lg"
              variant="bordered"
            >
              Ver planos
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            <Card className="border border-default-200 bg-content1/60">
              <CardBody className="py-4">
                <p className="text-sm text-default-500">Atendimento</p>
                <p className="text-lg font-semibold">Rápido</p>
              </CardBody>
            </Card>
            <Card className="border border-default-200 bg-content1/60">
              <CardBody className="py-4">
                <p className="text-sm text-default-500">Rotinas</p>
                <p className="text-lg font-semibold">Em dia</p>
              </CardBody>
            </Card>
            <Card className="border border-default-200 bg-content1/60">
              <CardBody className="py-4">
                <p className="text-sm text-default-500">Gestão</p>
                <p className="text-lg font-semibold">Clara</p>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="lg:pl-10">
          <DashboardMock />
        </div>
      </div>
    </Section>
  );
}
