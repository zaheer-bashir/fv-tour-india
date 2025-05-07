"use client";

import Image from "next/image";
import { Card, Button } from "@radix-ui/themes";

type Reason = {
  id: number;
  icon: string;
  highlight: string;
  label: string;
  body: string;
  cta: { text: string; href: string };
};

const reasons: Reason[] = [
  {
    id: 1,
    icon: "/owl.png",
    highlight: "200+",
    label: "Reseñas",
    body: "Contamos con excelentes reseñas en los sitios de viajes más confiables. Ofrecemos paquetes turísticos con la mejor relación calidad-precio.",
    cta: { text: "LEER RESEÑAS", href: "/reviews" },
  },
  {
    id: 2,
    icon: "/walk.png",
    highlight: "500+",
    label: "Viajes",
    body: "Ofrecemos más de quinientos paquetes turísticos hechos a medida para convertir tu viaje soñado en realidad.",
    cta: { text: "PLANEA MI VIAJE", href: "/trips" },
  },
  {
    id: 3,
    icon: "/support.png",
    highlight: "Soporte",
    label: "de Viaje",
    body: "Nuestro equipo está disponible 24 × 7. Un experto en viajes te sugerirá el mejor plan según tu presupuesto e intereses.",
    cta: {
      text: "LLAMA: +91 9891774769",
      href: "tel: +91 9891774769",
    },
  },
];

function ReasonsToBook() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="mb-6 text-center text-2xl font-bold tracking-wide sm:text-3xl">
        ALGUNAS <span className="text-[#F63C61]">BUENAS</span> RAZONES PARA{" "}
        <span className="text-[#F63C61]">RESERVAR</span> CON NOSOTROS
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r) => (
          <Card
            key={r.id}
            className="flex flex-col items-center border border-[#E7E7E7] rounded-none bg-white p-10 transition duration-200 ease-in-out hover:shadow-md"
          >
            <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-full border border-dashed border-[#D0D0D0]">
              <Image
                src={r.icon}
                alt=""
                width={72}
                height={72}
                className="select-none"
                draggable={false}
              />
            </div>

            <p className="mb-5 text-center text-xl font-semibold">
              <span className="text-[#F63C61]">{r.highlight}</span>{" "}
              <span className="text-[#333333]">{r.label}</span>
            </p>

            <p className="mb-8 max-w-[260px] text-center text-sm leading-relaxed text-[#7A7A7A]">
              {r.body}
            </p>

            <Button
              asChild
              variant="ghost"
              className="rounded-full border border-[#262626] bg-white px-8 py-2 text-xs font-semibold uppercase tracking-wide text-[#262626] hover:bg-white hover:text-[#262626] focus:outline-none"
            >
              <a href={r.cta.href}>{r.cta.text}</a>
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}

export { ReasonsToBook };
