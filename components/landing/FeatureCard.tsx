"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";

export function FeatureCard({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description: string;
  eyebrow: string;
}) {
  return (
    <Card className="h-full border border-default-200 bg-content1/80 backdrop-blur">
      <CardHeader className="flex flex-col items-start gap-2">
        <Chip className="bg-default-100" size="sm" variant="flat">
          {eyebrow}
        </Chip>
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      </CardHeader>
      <CardBody className="pt-0 text-default-600">{description}</CardBody>
    </Card>
  );
}
