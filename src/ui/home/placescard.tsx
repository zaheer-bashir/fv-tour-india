"use client";

import Image from "next/image";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { motion } from "framer-motion";

const tourPackages = [
  {
    id: 1,
    title: "India Básico (Triángulo Dorado)",
    subtitle: "Delhi, Jaipur y Agra",
    nights: 5,
    days: 6,
    image: "https://artoftravel.co.in/wp-content/uploads/2023/02/4k.jpg",
    ribbon: "POPULAR",
    discount: "20%",
    ribbonColor: "bg-red-600",
  },
  {
    id: 2,
    title: "Rajastán Real",
    subtitle:
      "Delhi – Mandawa – Bikaner – Jaisalmer – Jodhpur – Udaipur – Pushkar – Jaipur – Agra",
    nights: 13,
    days: 14,
    image:
      "https://artoftravel.co.in/wp-content/uploads/2023/02/240447-indium-rajasthan-monument-and-historic-place-hd.jpg ",
    ribbon: "POPULAR",
    discount: "20%",
    ribbonColor: "bg-red-600",
  },
  {
    id: 3,
    title: "Tour Clásico de India",
    subtitle: "Delhi – Jaipur – Agra – Khajuraho – Varanasi",
    nights: 8,
    days: 9,
    image:
      "https://artoftravel.co.in/wp-content/uploads/2023/02/Ganga-Aarti-Varanasi-1-1.jpg",
    ribbon: "POPULAR",
    discount: "20%",
    ribbonColor: "bg-red-600",
  },
  {
    id: 4,
    title: "Taj y Tigre",
    subtitle: "Delhi – Agra – Ranthambhore – Jaipur – Delhi",
    nights: 7,
    days: 8,
    image:
      "https://artoftravel.co.in/wp-content/uploads/2025/04/Untitled-design.jpg",
    ribbon: "MEJOR VALORADO",
    discount: "20%",
    ribbonColor: "bg-green-600",
  },
  {
    id: 5,
    title: "Karnataka te llama",
    subtitle: "Bangalore, Mysore, Hospet, Badami, Goa",
    nights: 9,
    days: 10,
    image:
      "https://artoftravel.co.in/wp-content/uploads/2023/02/180693-excyrhfhlh-1664704284.jpeg",
    ribbon: "MEJOR VALORADO",
    discount: "20%",
    ribbonColor: "bg-green-600",
  },
  {
    id: 6,
    title: "Sentido del Sur",
    subtitle:
      "Cochin, Periyar, Munnar, Ooty, Mysore, Hassan, Hospet, Patadakal, Aihole, Badami, Goa, Mumbai",
    nights: 13,
    days: 14,
    image:
      "https://artoftravel.co.in/wp-content/uploads/2023/02/iStock-471119274-1.jpg",
    ribbon: "POPULAR",
    discount: "20%",
    ribbonColor: "bg-red-600",
  },
];

const Ribbon = ({ label, color }: { label: string; color: string }) => (
  <span
    className={clsx(
      "absolute top-15 left-[-6px] z-10 rotate-[-45deg] origin-top-left px-2 py-1 w-24 text-center text-[10px] font-bold uppercase tracking-wider text-white shadow-md",
      color
    )}
  >
    {label}
  </span>
);

const DiscountBadge = ({ text }: { text: string }) => (
  <span className="absolute top-3 right-3 z-10 flex h-10 w-10 flex-col items-center justify-center rounded-full bg-red-600 text-[10px] font-semibold leading-tight text-white shadow-md">
    AHORRA
    <br />
    {text}
  </span>
);

function TourPackagesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12">
      <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
        <span className="text-red-600">INDIA </span>
        PAQUETES TURÍSTICOS
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tourPackages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="border border-[#E7E7E7] rounded-none bg-white transition duration-200 ease-in-out hover:shadow-md overflow-hidden relative">
              <div className="relative">
                <AspectRatio.Root ratio={16 / 9}>
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </AspectRatio.Root>

                {pkg.ribbon && (
                  <Ribbon label={pkg.ribbon} color={pkg.ribbonColor} />
                )}
                <DiscountBadge text={pkg.discount} />

                <div className="absolute bottom-0 left-0 flex w-full items-center gap-1 bg-black/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-3 w-3 shrink-0"
                    fill="currentColor"
                  >
                    <path d="M12 2 1 21h22L12 2Z" />
                  </svg>
                  {pkg.nights.toString().padStart(2, "0")} Noches /{" "}
                  {pkg.days.toString().padStart(2, "0")} Días
                </div>
              </div>

              <CardContent className="flex flex-col items-center gap-2 py-5 text-center">
                <h3 className="text-base font-medium uppercase">{pkg.title}</h3>
                <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>

                <Button className="mt-3 rounded-full bg-red-600 px-6 uppercase text-white hover:bg-red-700">
                  Solicitar Cotización
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export { TourPackagesSection };
