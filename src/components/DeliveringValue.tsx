"use client";
import * as React from "react";
import { ValueTitle } from "./ValueTitle";
import { ImageGrid } from "./ImageGrid";

const DeliveringValue: React.FC = () => {
  return (
    <section className="overflow-hidden bg-black">
      <ValueTitle />
      <ImageGrid />
      <footer className="flex w-full bg-black rounded-full min-h-[327px] max-md:max-w-full" />
    </section>
  );
};

export default DeliveringValue;
