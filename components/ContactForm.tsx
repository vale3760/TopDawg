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
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [message, setMessage] = useState("");

  const [numberOfDogs, setNumberOfDogs] = useState("1");

  const isBoarding = initialService === "boarding";
  const isBoardAndTrain = initialService === "board-and-train";
  const isAssessment = initialService === "assessment";

  const needsBoardingQuestions =
    isBoarding || isBoardAndTrain;

  const needsTrainingQuestions =
    isAssessment || isBoardAndTrain;

  const allowsMultipleDogs =
    isBoarding;

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const service =
      formData.get("service")?.toString() ?? "";

    const startDate =
      formData.get("startDate")?.toString() ?? "";

    const endDate =
      formData.get("endDate")?.toString() ?? "";

    let requestedDates = "Not applicable";

    if (
      service === "boarding" ||
      service === "board-and-train"
    ) {
      requestedDates =
        `Drop-off date: ${startDate || "Not provided"}; ` +
        `Pick-up date: ${endDate || "Not provided"}`;
    }

    const payload = {
      // OWNER
      firstName:
        formData.get("firstName")?.toString() ?? "",

      lastName:
        formData.get("lastName")?.toString() ?? "",

      ownerName: `${formData.get("firstName") ?? ""} ${
        formData.get("lastName") ?? ""
      }`.trim(),

      email:
        formData.get("email")?.toString() ?? "",

      phone:
        formData.get("phone")?.toString() ?? "",

      // NUMBER OF DOGS
      numberOfDogs:
        formData.get("numberOfDogs")?.toString() ?? "1",

      // DOG 1
      dogName:
        formData.get("dogName")?.toString() ?? "",

      breed:
        formData.get("breed")?.toString() ?? "",

      dogAge:
        formData.get("dogAge")?.toString() ?? "",

      dogPersonality:
        formData.get("dogPersonality")?.toString() ?? "",

      // DOG 2
      secondDogName:
        formData.get("secondDogName")?.toString() ?? "",

      secondDogBreed:
        formData.get("secondDogBreed")?.toString() ?? "",

      secondDogAge:
        formData.get("secondDogAge")?.toString() ?? "",

      secondDogPersonality:
        formData.get("secondDogPersonality")?.toString() ?? "",

      // BOOKING
      service,

      startDate:
        startDate || null,

      endDate:
        endDate || null,

      requestedDates,

      // BOARDING
      houseTrained:
        formData.get("houseTrained")?.toString() ?? "",

      aroundDogs:
        formData.get("aroundDogs")?.toString() ?? "",

      // TRAINING
      behaviorConcerns:
        formData.get("behaviorConcerns")?.toString() ?? "",

      goals:
        formData.get("goals")?.toString() ?? "",

      challengingSituations:
        formData.get("challengingSituations")?.toString() ?? "",
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
        throw new Error(
          result.error ||
            "The request could not be sent.",
        );
      }

      setStatus("success");

      setMessage(
        "Your inquiry was sent successfully.",
      );
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
      <div className="mx-auto max-w-4xl rounded-3xl border border-green-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <span className="text-3xl">🐾</span>
        </div>

        <h2 className="mt-6 text-4xl font-black text-stone-900">
          Thank You!
        </h2>

        <p className="mt-4 text-lg leading-8 text-stone-600">
          Your inquiry has been received.
        </p>

        <p className="mt-2 text-lg leading-8 text-stone-600">
          José will review your request and contact you within
          24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-4xl rounded-3xl border border-stone-200 bg-white p-8 shadow-sm md:p-12"
    >
      {/* SELECTED SERVICE / DATES */}
      <ContactBookingFields
        initialService={initialService}
        initialStartDate={initialStartDate}
        initialEndDate={initialEndDate}
        initialDate={initialDate}
        initialTime={initialTime}
      />

      {/* OWNER INFORMATION */}
      <FormSection
        eyebrow="About You"
        title="Owner Information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            label="First Name"
            name="firstName"
            required
          />

          <FormField
            label="Last Name"
            name="lastName"
            required
          />

          <FormField
            label="Email"
            name="email"
            type="email"
            required
          />

          <FormField
            label="Phone Number"
            name="phone"
            type="tel"
            required
          />
        </div>
      </FormSection>

      {/* DOG INFORMATION */}
      <FormSection
        eyebrow={allowsMultipleDogs ? "Your Dog(s)" : "Your Dog"}
        title={allowsMultipleDogs ? "About Your Dog(s)" : "About Your Dog"}
      >
        {/* NUMBER OF DOGS */}
        {allowsMultipleDogs && (
          <label className="flex max-w-xs flex-col gap-2">
            <span className="font-bold text-stone-800">
              How many dogs?
            </span>

            <select
              name="numberOfDogs"
              value={numberOfDogs}
              onChange={(event) =>
                setNumberOfDogs(event.target.value)
              }
              className="rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-[#4C6A58] focus:ring-2 focus:ring-[#4C6A58]/10"
            >
              <option value="1">1 dog</option>
              <option value="2">2 dogs</option>
            </select>
          </label>
        )}

        {/* If training only, still submit 1 */}
        {!allowsMultipleDogs && (
          <input
            type="hidden"
            name="numberOfDogs"
            value="1"
          />
        )}

        {/* DOG 1 */}
        <div>
          {numberOfDogs === "2" && allowsMultipleDogs && (
            <h3 className="mb-5 text-lg font-black text-stone-900">
              Dog 1
            </h3>
          )}

          <div className="grid gap-6 md:grid-cols-3">
            <FormField
              label="Name"
              name="dogName"
              required
            />

            <FormField
              label="Breed / Mix"
              name="breed"
            />

            <FormField
              label="Age"
              name="dogAge"
            />
          </div>

          <div className="mt-6">
            <TextAreaField
              label="Tell me a little about your dog."
              name="dogPersonality"
              rows={4}
              required
              placeholder="Their personality and anything you think would be helpful for me to know."
            />
          </div>
        </div>

        {/* DOG 2 */}
        {numberOfDogs === "2" && allowsMultipleDogs && (
          <div className="mt-10 border-t border-stone-200 pt-8">
            <div className="mb-5">
              <h3 className="text-lg font-black text-stone-900">
                Dog 2
              </h3>

              <p className="mt-1 text-sm text-stone-500">
                Tell me a little about your second dog.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <FormField
                label="Name"
                name="secondDogName"
                required
              />

              <FormField
                label="Breed / Mix"
                name="secondDogBreed"
              />

              <FormField
                label="Age"
                name="secondDogAge"
              />
            </div>

            <div className="mt-6">
              <TextAreaField
                label="Tell me a little about your second dog."
                name="secondDogPersonality"
                rows={4}
                required
                placeholder="Their personality and anything you think would be helpful for me to know."
              />
            </div>
          </div>
        )}
      </FormSection>

      {/* BOARDING QUESTIONS */}
      {needsBoardingQuestions && (
        <FormSection
          eyebrow="Their Stay"
          title="Boarding Information"
        >
          <SelectField
            label={
              numberOfDogs === "2"
                ? "Are both dogs house trained?"
                : "Is your dog house trained?"
            }
            name="houseTrained"
            required
            options={[
              {
                value: "yes",
                label: "Yes",
              },
              {
                value: "mostly",
                label: "Mostly",
              },
              {
                value: "no",
                label: "No",
              },
            ]}
          />

          <TextAreaField
            label={
              numberOfDogs === "2"
                ? "How do your dogs do around other dogs?"
                : "How does your dog do around other dogs?"
            }
            name="aroundDogs"
            rows={3}
            required
            placeholder="Tell me briefly how they typically behave around other dogs."
          />
        </FormSection>
      )}

      {/* TRAINING QUESTIONS */}
      {needsTrainingQuestions && (
        <FormSection
          eyebrow="Training"
          title="What Would You Like Help With?"
        >
          <TextAreaField
            label="What behaviors or challenges are you currently experiencing?"
            name="behaviorConcerns"
            rows={4}
            required
          />

          <TextAreaField
            label="What would you like to accomplish through training?"
            name="goals"
            rows={4}
            required
          />
        </FormSection>
      )}

      {/* SUBMIT */}
      <div className="mt-10 border-t border-stone-200 pt-8">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-[#4C6A58] px-8 py-4 font-bold text-white transition hover:bg-[#365243] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading"
            ? "Sending..."
            : "Submit Inquiry"}
        </button>

        {message && (
          <p
            className={`mt-4 text-sm ${
              status === "error"
                ? "text-red-600"
                : "text-stone-600"
            }`}
          >
            {message}
          </p>
        )}

        {!message && (
          <p className="mt-4 text-sm text-stone-500">
            Your request will be reviewed before your
            reservation is confirmed.
          </p>
        )}
      </div>
    </form>
  );
}

/* --------------------------------
   FORM COMPONENTS
-------------------------------- */

function FormSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 border-t border-stone-200 pt-10 first:mt-8">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4C6A58]">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-2xl font-black text-stone-950">
        {title}
      </h2>

      <div className="mt-7 space-y-6">
        {children}
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

function FormField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: FormFieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-bold text-stone-800">
        {label}

        {required && (
          <span className="ml-1 text-amber-700">
            *
          </span>
        )}
      </span>

      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-[#4C6A58] focus:ring-2 focus:ring-[#4C6A58]/10"
      />
    </label>
  );
}

function TextAreaField({
  label,
  name,
  rows = 4,
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-bold text-stone-800">
        {label}

        {required && (
          <span className="ml-1 text-amber-700">
            *
          </span>
        )}
      </span>

      <textarea
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className="resize-y rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-[#4C6A58] focus:ring-2 focus:ring-[#4C6A58]/10"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
  }[];
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-bold text-stone-800">
        {label}

        {required && (
          <span className="ml-1 text-amber-700">
            *
          </span>
        )}
      </span>

      <select
        name={name}
        required={required}
        defaultValue=""
        className="rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-[#4C6A58] focus:ring-2 focus:ring-[#4C6A58]/10"
      >
        <option
          value=""
          disabled
        >
          Select an option
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}