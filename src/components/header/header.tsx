"use client";

import Link from "next/link";
import Image from "next/image";
import { PhoneCall, Send, Mail } from "lucide-react";

function TopHeader() {
  return (
    <header
      className="
        text-white font-medium bg-cover
        border-b border-white/20
      "
      style={{
        backgroundImage: "url('/slide_hero.jpg')",
      }}
      aria-label="Top bar with contact information"
    >
      <div
        className="
          max-w-5xl mx-auto 
          h-auto md:h-[44px] px-3 md:px-5 text-[15px] md:text-[16px] tracking-wide
          flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0 py-2 md:py-0
        "
      >
        <div className="flex items-center gap-2 shrink-0">
          <PhoneCall size={16} className="stroke-[2]" aria-hidden="true" />
          <span className="sr-only">Phone:</span>
          <a
            href="tel:+911141573677"
            className="hover:underline"
            aria-label="Call us at +919891774769"
          >
            +91-989-1774769
          </a>

          <span className="mx-2 hidden md:inline" aria-hidden="true">
            |
          </span>

          <Image src="/whatsapp.svg" alt="WhatsApp" width={16} height={16} color="white" />
          <span className="sr-only">WhatsApp:</span>
          <a
            href="https://wa.me/919891774769"
            className="hover:underline"
            aria-label="WhatsApp us at +919891774769"
            target="_blank"
            rel="noopener noreferrer"
          >
            +91-989-1774769
          </a>
        </div>

        {/* Contact Email */}
        <div className="flex items-center gap-2 shrink-0">
          <Mail size={16} className="stroke-[2]" aria-hidden="true" />
          <span className="sr-only">Email:</span>
          <Link
            href="mailto:aoti.delhi@gmail.com"
            className="hover:underline"
            aria-label="Email us at aoti.delhi@gmail.com"
          >
            aoti.delhi@gmail.com
          </Link>
        </div>
      </div>
    </header>
  );
}

export { TopHeader };
