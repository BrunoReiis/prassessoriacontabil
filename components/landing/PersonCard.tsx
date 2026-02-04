"use client";

import Image from "next/image";

import { Card, CardBody } from "@heroui/card";

export function PersonCard({
  name,
  jobTitle,
  quote,
  src,
}: {
  name: string;
  jobTitle: string;
  quote: string;
  src: string;
}) {
  return (
    <Card className="h-full border border-default-200 bg-content1/80 backdrop-blur">
      <CardBody className="gap-4">
        <div className="flex items-center gap-3">
          <div className="size-12 overflow-hidden rounded-2xl border border-default-200 bg-white">
            <Image alt={`Foto ilustrativa de ${name}`} height={96} src={src} width={96} />
          </div>
          <div className="min-w-0">
            <p className="font-semibold tracking-tight truncate">{name}</p>
            <p className="text-sm text-default-500 truncate">{jobTitle}</p>
          </div>
        </div>
        <p className="text-default-600">“{quote}”</p>
      </CardBody>
    </Card>
  );
}
