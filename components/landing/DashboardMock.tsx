"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Progress } from "@heroui/progress";

import { Metric } from "@/components/landing/Metric";

export function DashboardMock() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 rounded-[32px]"
        style={{
          background:
            "radial-gradient(circle_at_30%_20%,rgba(46,125,50,0.18),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.14),transparent_45%),radial-gradient(circle_at_60%_10%,rgba(16,185,129,0.12),transparent_40%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 rounded-[28px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.8),rgba(255,255,255,0.35))] blur-[2px]"
      />

      <Card className="relative border border-default-200/70 bg-content1/70 backdrop-blur shadow-xl">
        <CardHeader className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm text-default-500">Visão geral</p>
            <p className="font-semibold tracking-tight">Painel financeiro</p>
          </div>
          <Chip color="success" size="sm" variant="flat">
            Em dia
          </Chip>
        </CardHeader>
        <Divider />
        <CardBody className="gap-4">
          <div className="grid grid-cols-2 gap-3">
            <Metric label="Impostos" value="OK" />
            <Metric label="Folha" value="OK" />
            <Metric label="Obrigações" value="8/8" />
            <Metric label="Relatórios" value="Mensal" />
          </div>
          <div className="rounded-2xl border border-default-200 bg-content2/60 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Saúde do caixa</p>
              <p className="text-sm text-default-500">30 dias</p>
            </div>
            <div className="mt-3 space-y-3">
              <Progress aria-label="Receitas" color="success" label="Receitas" value={78} />
              <Progress aria-label="Despesas" color="warning" label="Despesas" value={46} />
              <Progress aria-label="Reserva" color="success" label="Reserva" value={62} />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
