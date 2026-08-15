import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

type ContactPageProps = {
  searchParams: Promise<{
    service?: string;
    startDate?: string;
    endDate?: string;
    date?: string;
    time?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Top Dawg Pet Care about training, boarding, or board-and-train services.",
};

export default async function ContactPage({
  searchParams,
}: ContactPageProps) {
  const params = await searchParams;

  const service = params.service ?? "";

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-28">
        <Image
          src="/HollyPark.jpeg"
          alt="José working with a dog"
          fill
          className="object-cover object-[center_40%]"
          priority
        />

        <div className="absolute inset-0 bg-[#4C6A58]/65" />

        <div className="relative mx-auto max-w-7xl text-white">
          <p className="text-sm font-bold uppercase tracking-[0.22em]">
            Contact
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black md:text-7xl">
            Tell me about your dog.
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-8 text-white/90">
            Complete the inquiry form and we'll be in touch soon.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-[#f8f4ec] px-6 py-24">
        <ContactForm
          initialService={service}
          initialStartDate={params.startDate}
          initialEndDate={params.endDate}
          initialDate={params.date}
          initialTime={params.time}
        />
      </section>
    </>
  );
}