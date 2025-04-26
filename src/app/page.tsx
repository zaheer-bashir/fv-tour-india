import Image from "next/image";

import {
  TourPlanForm,
  TourPackagesSection,
  ReasonsToBook
} from "@/ui/home";

export default function Home() {
  return (
    <>
      <TourPlanForm />
      <TourPackagesSection />
      <ReasonsToBook />
    </>
  );
}
