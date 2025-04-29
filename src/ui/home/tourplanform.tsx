"use client";

import { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

function TourPlanForm() {
  const [fixedDate, setFixedDate] = useState(true);

  return (
    <section
      className="
      bg-cover bg-center px-4 py-10"
      style={{
        backgroundImage: "url('/slide_hero.jpg')",
      }}
    >
      <h2 className="mb-3 text-center text-white text-2xl font-bold md:text-3xl">
        BIENVENIDO A TOUR OF INDIA
      </h2>
      <div
        className="relative max-w-5xl mx-auto rounded-xl bg-white px-4 py-5 shadow-lg text-[12px]"
        style={{
          borderRadius: "40px 40px 10px 10px",
          border: "15px solid #090",
          color: "#333",
          borderBottomColor: "#FC3",
          borderTopColor: "#09F",
          borderLeftColor: "#C00",
        }}
      >
        <h2 className="mb-8 text-2xl text-center font-bold tracking-wide text-red-700">
          VAMOS A PLANEAR TU VIAJE
        </h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Nombre completo</label>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              className="h-10 rounded-md border border-gray-300 px-3 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Estoy interesado en</label>
            <Select.Root>
              <Select.Trigger className="flex h-10 items-center justify-between rounded-md border border-gray-300 px-3 focus:border-blue-500 focus:outline-none">
                <Select.Value placeholder="Estoy interesado en" />
                <Select.Icon>
                  <ChevronDown className="h-4 w-4 opacity-60" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Content className="z-50 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
                <Select.ScrollUpButton className="flex items-center justify-center p-1">
                  <ChevronUp className="h-4 w-4" />
                </Select.ScrollUpButton>
                <Select.Viewport className="p-1">
                  {[
                    "Triángulo Dorado",
                    "Tour por Rajasthan",
                    "Sur de la India",
                    "Aventura",
                  ].map((option) => (
                    <Select.Item
                      key={option}
                      value={option}
                      className="relative flex cursor-pointer select-none items-center gap-2 rounded-md px-6 py-2 outline-none data-[highlighted]:bg-blue-50"
                    >
                      <Select.ItemText>{option}</Select.ItemText>
                      <Select.ItemIndicator className="absolute left-2">
                        <Check className="h-4 w-4 text-green-600" />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Root>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Correo electrónico</label>
            <input
              type="email"
              placeholder="Ingresa tu correo electrónico"
              className="h-10 rounded-md border border-gray-300 px-3 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Número de contacto</label>
            <input
              type="tel"
              placeholder="Ingresa tu número de contacto"
              className="h-10 rounded-md border border-gray-300 px-3 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-stretch justify-between w-full md:col-span-2">
            <div className="flex flex-1 flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              <label className="font-semibold mb-2 md:mb-0">
                Fecha de viaje
              </label>
              <div className="flex items-center gap-4">
                <RadioGroup.Root
                  value={fixedDate ? "fixed" : "anytime"}
                  onValueChange={(val) => setFixedDate(val === "fixed")}
                  className="flex items-center gap-4"
                >
                  <div className="flex items-center gap-1">
                    <RadioGroup.Item
                      id="fixed"
                      value="fixed"
                      className="h-4 w-4 rounded-full border border-gray-400 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                    />
                    <label htmlFor="fixed" className="text-sm">
                      Fija
                    </label>
                  </div>
                  <div className="flex items-center gap-1">
                    <RadioGroup.Item
                      id="anytime"
                      value="anytime"
                      className="h-4 w-4 rounded-full border border-gray-400 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                    />
                    <label htmlFor="anytime" className="">
                      Cualquier fecha
                    </label>
                  </div>
                </RadioGroup.Root>
              </div>
              <input
                type="month"
                className="mt-3 md:mt-0 h-10 rounded-md border border-gray-300 px-3 focus:border-blue-500 focus:outline-none w-full md:w-auto"
              />
            </div>
            <div className="flex flex-1 flex-col md:flex-row items-stretch gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-semibold">Duración</label>
                <input
                  type="text"
                  placeholder="Duración"
                  className="h-10 rounded-md border border-gray-300 px-3 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="font-semibold">Total Adultos</label>
                <input
                  type="number"
                  min={1}
                  defaultValue={1}
                  className="h-10 w-full rounded-md border border-gray-300 px-3 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="font-semibold">Niños (Edad 6‑11)</label>
                <input
                  type="number"
                  min={0}
                  defaultValue={0}
                  className="h-10 w-full rounded-md border border-gray-300 px-3 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Selecciona país</label>
            <Select.Root>
              <Select.Trigger className="flex h-10 items-center justify-between rounded-md border border-gray-300 px-3 focus:border-blue-500 focus:outline-none">
                <Select.Value placeholder="País de residencia" />
                <Select.Icon>
                  <ChevronDown className="h-4 w-4 opacity-60" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Content className="z-50 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
                <Select.ScrollUpButton className="flex items-center justify-center p-1">
                  <ChevronUp className="h-4 w-4" />
                </Select.ScrollUpButton>
                <Select.Viewport className="p-1">
                  {[
                    "India",
                    "Estados Unidos",
                    "Reino Unido",
                    "Australia",
                    "Canadá",
                  ].map((country) => (
                    <Select.Item
                      key={country}
                      value={country}
                      className="relative flex cursor-pointer select-none items-center gap-2 rounded-md px-6 py-2 outline-none data-[highlighted]:bg-blue-50"
                    >
                      <Select.ItemText>{country}</Select.ItemText>
                      <Select.ItemIndicator className="absolute left-2">
                        <Check className="h-4 w-4 text-green-600" />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Root>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Cuéntanos más</label>
            <textarea
              rows={1}
              placeholder="Escribe tu mensaje"
              className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="mx-auto flex w-40 items-center justify-center gap-2 rounded-full bg-red-700 py-3 font-semibold uppercase tracking-wide text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="h-4 w-4"
              >
                <path d="M6.547 14.72c-2.546 0-4.532-1.897-4.532-4.483 0-1.158.345-2.078 1.04-2.754C3.216 6.84 4.033 6.5 5 6.5h2.566c.19 0 .335-.046.433-.139.097-.093.146-.236.146-.428 0-.057-.014-.113-.041-.166l-.625-1.21c-.118-.23-.177-.39-.177-.48 0-.195.068-.344.205-.445C7.515 3.159 8.259 3 9.2 3c1.56 0 2.637.39 3.23 1.17C12.904 4.55 13.2 5.45 13.2 6.6c0 3.145-1.58 5.692-4.75 7.64l-.354.215-.179.105-.159.09-.137.064-.119.05-.11.032-.09.026-.076.016-.065.01-.057.006-.05.002z" />
              </svg>
              CONSULTAR AHORA
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-xl font-medium text-gray-700 border-t border-gray-300 pt-4">
          O
          <br />
          Chatea en <span className="font-bold text-red-600">
            Whatsapp
          </span>{" "}
          para una respuesta rápida.{" "}
          <a href="#" className="font-bold text-red-600">
            Haz clic aquí
          </a>
        </p>
      </div>
    </section>
  );
}

export { TourPlanForm };
