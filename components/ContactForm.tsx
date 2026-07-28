"use client";

import { useState } from "react";
import ContactBookingFields from "@/components/ContactBookingFields";

type ContactFormProps = {
  initialService?: string;
  initialStartDate?: string;
  initialEndDate?: string;
  initialDate?: string;
  initialTime?: string;
};

export default function ContactForm({
  initialService = "",
  initialStartDate = "",
  initialEndDate = "",
  initialDate = "",
  initialTime = "",
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const service = formData.get("service")?.toString() ?? "";
    const startDate = formData.get("startDate")?.toString() ?? "";
    const endDate = formData.get("endDate")?.toString() ?? "";
    const lessonDate = formData.get("lessonDate")?.toString() ?? "";
    const lessonTime = formData.get("lessonTime")?.toString() ?? "";

    let requestedDates = "Not provided";

    if (service === "boarding" || service === "board-and-train") {
      requestedDates = `Drop-off date: ${startDate || "Not provided"}; Pick-up date: ${endDate || "Not provided"}`;
    } else if (
      service === "assessment" ||
      service === "private-training" ||
      service === "three-lesson-package" ||
      service === "five-lesson-package"
    ) {
      requestedDates = `Lesson date: ${lessonDate || "Not provided"}; Preferred time: ${lessonTime || "Not provided"}`;
    }

    const payload = {
        ownerName: formData.get("ownerName")?.toString() ?? "",
        email: formData.get("email")?.toString() ?? "",
        phone: formData.get("phone")?.toString() ?? "",
        dogName: formData.get("dogName")?.toString() ?? "",
        breed: formData.get("breed")?.toString() ?? "",
        dogAge: formData.get("dogAge")?.toString() ?? "",
        dogWeight: formData.get("dogWeight")?.toString() ?? "",

        service,

        startDate: startDate || null,
        endDate: endDate || null,
        lessonDate: lessonDate || null,
        lessonTime: lessonTime || null,

        requestedDates,

        goals: formData.get("goals")?.toString() ?? "",
        additionalInformation:
            formData.get("additionalInformation")?.toString() ?? "",
    };

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "The request could not be sent.");
      }

      setStatus("success");
      setMessage("Your intake form was sent successfully. I’ll be in touch soon.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending the form.",
      );
    }
  }

  if (status === "success") {
  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-green-200 bg-white p-10 text-center shadow-sm">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <span className="text-3xl">🐾</span>
      </div>

      <h2 className="mt-6 text-4xl font-black text-stone-900">
        Thank You!
      </h2>

      <p className="mt-4 text-lg leading-8 text-stone-600">
        Your booking request has been received.
      </p>

      <p className="mt-2 text-lg leading-8 text-stone-600">
        José will review your request and contact you within 24 hours.
      </p>
    </div>
  );
}

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl rounded-3xl border border-stone-200 bg-white p-8 shadow-sm md:p-12"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormField label="Your name" name="ownerName" required />
        <FormField label="Email address" name="email" type="email" required />
        <FormField label="Phone number" name="phone" type="tel" required />
        <FormField label="Dog's name" name="dogName" required />
        <FormField label="Breed" name="breed" />
        <FormField label="Dog's age" name="dogAge" />
        <FormField label="Dog's weight" name="dogWeight" />
      </div>

      <ContactBookingFields
        initialService={initialService}
        initialStartDate={initialStartDate}
        initialEndDate={initialEndDate}
        initialDate={initialDate}
        initialTime={initialTime}
      />

      <label className="mt-6 flex flex-col gap-2">
        <span className="font-bold text-stone-800">
          Tell me about your dog and your goals
        </span>

        <textarea
          name="goals"
          rows={6}
          required
          placeholder="Share your dog's personality, behaviors, routines, and what you would like help with."
          className="resize-y rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-600"
        />
      </label>

      <label className="mt-6 flex flex-col gap-2">
        <span className="font-bold text-stone-800">
          Medical needs, reactivity, or other important information
        </span>

        <textarea
          name="additionalInformation"
          rows={4}
          className="resize-y rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-600"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-8 rounded-full bg-stone-950 px-8 py-4 font-bold text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Submit Intake Form"}
      </button>

      {message ? (
        <p
          className={`mt-4 text-sm ${
            status === "error" ? "text-red-600" : "text-stone-600"
          }`}
        >
          {message}
        </p>
      ) : (
        <p className="mt-4 text-sm text-stone-500">
          Your form will be emailed to your booking inbox once the message is sent.
        </p>
      )}
    </form>
  );
}

type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
};

function FormField({ label, name, type = "text", required = false }: FormFieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-bold text-stone-800">{label}</span>

      <input
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-600"
      />
    </label>
  );
}
