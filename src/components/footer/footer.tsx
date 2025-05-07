"use client";

import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-slate-900">
      <AspectRatio.Root
        ratio={21 / 2}
        className="relative w-full sm:h-[220px] py-16"
      >
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Beautiful Indian landscape"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-1 bg-black/40">
          <p className="text-white font-semibold text-sm sm:text-base">
            © {new Date().getFullYear()} | Art of Travel India Holidays Pvt Ltd
          </p>
          <p className="text-white font-semibold text-sm sm:text-base">
            Approved by Ministry of Tourism India.
          </p>
        </div>

        <Link
          href="#"
          aria-label="Back to top"
          className="absolute bottom-3 right-3 grid place-items-center rounded-full bg-white/20 hover:bg-white/40 backdrop-blur p-2 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-white"
          >
            <path d="M12 5l7 7h-4v7h-6v-7H5l7-7z" />
          </svg>
        </Link>
      </AspectRatio.Root>
    </footer>
  );
}