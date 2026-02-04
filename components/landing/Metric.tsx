"use client";

export function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-content1/70 backdrop-blur border border-default-200 p-4">
      <p className="text-sm text-default-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
        {value}
      </p>
    </div>
  );
}
