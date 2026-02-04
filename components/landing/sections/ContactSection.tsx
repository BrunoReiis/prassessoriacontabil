"use client";

import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";

import { Section } from "@/components/landing/Section";
import { BRAND } from "@/components/landing/theme";
import { title } from "@/components/primitives";

export function ContactSection() {
  return (
    <Section id="contato" tone="white">
      <Card className="border border-default-200 bg-content1/80 backdrop-blur">
        <CardBody className="py-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h2 className={title({ size: "md" })}>Vamos organizar sua contabilidade?</h2>
              <p className="mt-3 text-default-600 max-w-2xl">
                Conte seu cenário em 2 minutos e receba um diagnóstico inicial com os próximos passos.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Button
                isExternal
                as={Link}
                href="https://wa.me/5500000000000"
                radius="full"
                size="lg"
                className="text-white"
                style={{ backgroundColor: BRAND }}
              >
                Falar no WhatsApp
              </Button>
              <Button
                as={Link}
                href="mailto:contato@prassessoria.com"
                radius="full"
                size="lg"
                variant="bordered"
              >
                Enviar e-mail
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Section>
  );
}
