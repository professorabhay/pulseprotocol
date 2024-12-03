"use client";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect"

const words2 = "Empowering the Future of Social Networks with Pulse Protocol on AO by Arweave."


export function catchyLine() {
  return (
    <div className="w-full md:w-1/2 mx-auto py-12 flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <TextGenerateEffect words={words2} />
      </div>
     
    </div>
  );
}