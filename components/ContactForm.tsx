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
  const [selectedService, setSelectedService] = useState(initialService);

  const isBoarding = selectedService === "boarding";
  const isBoardAndTrain = selectedService === "board-and-train";
  const isAssessment = selectedService === "assessment";

  const needsBoardingCare = isBoarding || isBoardAndTrain;
  const needsTrainingQuestions = isAssessment || isBoardAndTrain;

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
      // Owner
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

      address:
        formData.get("address")?.toString() ?? "",

      // Dog
      dogName:
        formData.get("dogName")?.toString() ?? "",

      breed:
        formData.get("breed")?.toString() ?? "",

      dogAge:
        formData.get("dogAge")?.toString() ?? "",

      dogOwnershipLength:
        formData
          .get("dogOwnershipLength")
          ?.toString() ?? "",

      dogPersonality:
        formData.get("dogPersonality")?.toString() ?? "",

      // Booking
      service,

      startDate: startDate || null,
      endDate: endDate || null,

      requestedDates,

      // Boarding
      homeAlone:
        formData.get("homeAlone")?.toString() ?? "",

      aroundDogs:
        formData.get("aroundDogs")?.toString() ?? "",

      houseTrained:
        formData.get("houseTrained")?.toString() ?? "",

      feedingSchedule:
        formData.get("feedingSchedule")?.toString() ?? "",

      medications:
        formData.get("medications")?.toString() ?? "",

      allergies:
        formData.get("allergies")?.toString() ?? "",

      behaviorConcerns:
        formData.get("behaviorConcerns")?.toString() ?? "",

      additionalInformation:
        formData
          .get("additionalInformation")
          ?.toString() ?? "",

      // Emergency
      veterinarian:
        formData.get("veterinarian")?.toString() ?? "",

      emergencyContact:
        formData
          .get("emergencyContact")
          ?.toString() ?? "",

      emergencyInformation:
        formData
          .get("emergencyInformation")
          ?.toString() ?? "",

      // Training / behavior
      goals:
        formData.get("goals")?.toString() ?? "",

      challengingSituations:
        formData.get("challengingSituations")?.toString() ?? "",

      trainingHistory:
        formData.get("trainingHistory")?.toString() ?? "",

      dogMotivation:
        formData.get("dogMotivation")?.toString() ?? "",

      desiredChanges:
        formData.get("desiredChanges")?.toString() ?? "",

      ownerQuestions:
        formData.get("ownerQuestions")?.toString() ?? "",

      boardAndTrainGoals:
        formData.get("boardAndTrainGoals")?.toString() ?? "",
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
        "Your intake form was sent successfully.",
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
          Your booking request has been received.
        </p>

        <p className="mt-2 text-lg leading-8 text-stone-600">
          José will review your request and contact you
          within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-4xl rounded-3xl border border-stone-200 bg-white p-8 shadow-sm md:p-12"
    >
      {/* SERVICE */}
      <ContactBookingFields
        initialService={initialService}
        initialStartDate={initialStartDate}
        initialEndDate={initialEndDate}
        initialDate={initialDate}
        initialTime={initialTime}
        onServiceChange={setSelectedService}
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

          <div className="md:col-span-2">
            {needsBoardingCare ? (
              <FormField
                label="Address"
                name="address"
                required
              />
            ) : (
              <FormField
                label="City / Neighborhood"
                name="address"
                placeholder="For example: Dogpatch, Mission, Noe Valley"
              />
            )}
          </div>
        </div>
      </FormSection>

      {/* DOG INFORMATION */}
      <FormSection
        eyebrow="Your Companion"
        title="About Your Dog"
      >
        <div className="grid gap-6 md:grid-cols-2">
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

          {needsTrainingQuestions && (
            <FormField
              label="How long have you had your dog?"
              name="dogOwnershipLength"
            />
          )}
        </div>

        <TextAreaField
          label={
            needsTrainingQuestions
              ? "Tell me about your dog's personality, background, and history."
              : "Tell me a little about your dog and their personality."
          }
          name="dogPersonality"
          rows={5}
          required
          placeholder="What are they like at home? What do they enjoy? What makes them excited, nervous, comfortable, or happy?"
        />
      </FormSection>

      {/* BOARDING INTAKE */}
      {needsBoardingCare && (
        <>
          <FormSection
            eyebrow="Their Stay"
            title="Boarding Information"
          >
            <TextAreaField
              label="How does your dog do when left home alone?"
              name="homeAlone"
              rows={3}
              required
            />

            <TextAreaField
              label="How does your dog do around other dogs?"
              name="aroundDogs"
              rows={3}
              required
            />

            <SelectField
              label="Is your dog house trained?"
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
              label="Feeding Schedule"
              name="feedingSchedule"
              rows={4}
              required
              helperText="Please provide enough of your dog's regular food for their entire stay."
              placeholder="For example: 1 cup at 8 AM and 1 cup at 6 PM."
            />

            <TextAreaField
              label="Does your dog take any medications?"
              name="medications"
              rows={3}
              placeholder="List medication, dosage, and schedule. Write 'None' if applicable."
            />

            <TextAreaField
              label="Does your dog have any allergies or dietary restrictions?"
              name="allergies"
              rows={3}
              placeholder="Food allergies, treats to avoid, sensitivities, etc."
            />

            <TextAreaField
              label="Are there any behaviors or situations I should be aware of?"
              name="behaviorConcerns"
              rows={5}
              required
              placeholder="For example: reactivity, resource guarding, separation anxiety, fear of strangers, escape behavior, or anything else I should know."
            />

            <TextAreaField
              label="Is there anything else you'd like me to know?"
              name="additionalInformation"
              rows={4}
            />
          </FormSection>

          {/* EMERGENCY */}
          <FormSection
            eyebrow="Just In Case"
            title="Emergency Information"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                label="Veterinarian / Veterinary Hospital"
                name="veterinarian"
                required
              />

              <FormField
                label="Emergency Contact"
                name="emergencyContact"
                required
                placeholder="Name and phone number"
              />
            </div>

            <TextAreaField
              label="Anything I should know in case of an emergency?"
              name="emergencyInformation"
              rows={4}
              placeholder="Emergency preferences, medical history, or other important information."
            />
          </FormSection>
        </>
      )}

      {/* TRAINING / BEHAVIOR */}
      {needsTrainingQuestions && (
        <FormSection
          eyebrow="Training & Behavior"
          title="Tell Me What You're Working On"
        >
          <TextAreaField
            label="What behaviors or challenges are you currently experiencing, and what would you like to accomplish through training?"
            name="goals"
            rows={5}
            required
            placeholder="Tell me what's happening now and what you would like to see change."
          />

          <TextAreaField
            label="What situations are most challenging for your dog?"
            name="challengingSituations"
            rows={4}
            placeholder="For example: seeing other dogs, visitors, walks, being alone, new environments, handling, or settling at home."
          />

          <TextAreaField
            label="Has your dog worked with a trainer or attended training classes before? What techniques were used, and how did your dog respond?"
            name="trainingHistory"
            rows={4}
            placeholder="It's completely okay if this is your dog's first training experience."
          />

          <TextAreaField
            label="What motivates your dog?"
            name="dogMotivation"
            rows={3}
            placeholder="Food, toys, play, praise, sniffing, affection, or anything else they love."
          />

          <TextAreaField
            label="What changes would make everyday life with your dog easier or more enjoyable?"
            name="desiredChanges"
            rows={4}
            required
            placeholder="Think about what you'd love daily life together to look like."
          />

          <TextAreaField
            label="What questions do you have for me?"
            name="ownerQuestions"
            rows={4}
            placeholder="Ask anything you'd like to discuss during your assessment."
          />

          <TextAreaField
            label="Is there anything else about your dog's behavior, personality, or history that would be helpful for me to know?"
            name="additionalInformation"
            rows={4}
          />
        </FormSection>
      )}

      {/* BOARD & TRAIN */}
      {isBoardAndTrain && (
        <FormSection
          eyebrow="Board & Train"
          title="Goals for Their Stay"
        >
          <TextAreaField
            label="What specific behaviors would you like me to work on during your dog's stay?"
            name="boardAndTrainGoals"
            rows={5}
            required
            placeholder="Tell me which behaviors or skills you'd most like the stay to focus on."
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
            : "Submit Intake Form"}
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

/* ------------------------------
   FORM COMPONENTS
------------------------------ */

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
          <span className="ml-1 text-amber-700">*</span>
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
  helperText,
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
  placeholder?: string;
  helperText?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-bold text-stone-800">
        {label}
        {required && (
          <span className="ml-1 text-amber-700">*</span>
        )}
      </span>

      {helperText && (
        <span className="text-sm leading-6 text-stone-500">
          {helperText}
        </span>
      )}

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
          <span className="ml-1 text-amber-700">*</span>
        )}
      </span>

      <select
        name={name}
        required={required}
        defaultValue=""
        className="rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-[#4C6A58] focus:ring-2 focus:ring-[#4C6A58]/10"
      >
        <option value="" disabled>
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