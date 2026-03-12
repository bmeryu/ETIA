"use client";

import { cn } from "@/lib/utils";
import { Outfit } from "next/font/google";

// Outfit perfectly matches the reference: flat 't', circular dots, geometric 'e' and 'a'.
const logoFont = Outfit({ 
  subsets: ["latin"], 
  weight: ["800", "900"], 
  display: "swap" 
});

interface LogoProps {
  theme?: "dark" | "light";
  className?: string;
}

/**
 * ETIIA Logo — CSS-rendered with exact geometric font matching reference.
 * Navy "et" + bright blue "iia."
 */
export function Logo({ theme = "dark", className }: LogoProps) {
  // Exact colors from the user's logo reference image
  const navy = theme === "dark" ? "text-[#121626]" : "text-white";
  const blue = "text-[#177aff]"; 

  return (
    <span
      className={cn(
        logoFont.className,
        "inline-flex items-baseline font-[900] select-none",
        className
      )}
      style={{ lineHeight: "0.8" }}
      aria-label="ETIIA"
    >
      {/* Bloque 1: Estrategia & Tecnología (Base sólida) */}
      <span className={cn(navy, "tracking-[-0.04em]")}>et</span>
      
      {/* Bloque 2: Inteligencia Humana + IA (Corazón vibrante) */}
      <span className={blue}>
        {/* La doble 'i' como unidad simétrica - kerning más estrecho entre ellas para unirlas visualmente */}
        <span style={{ letterSpacing: "-0.07em" }}>i</span>
        {/* Segunda 'i' con kerning estándar hacia la 'a' para mantener ritmo */}
        <span style={{ letterSpacing: "-0.02em" }}>i</span>
        {/* La 'a' y el punto validatorio final */}
        <span className="tracking-[-0.04em]">a.</span>
      </span>
    </span>
  );
}
