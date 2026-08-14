"use client";

import { useState } from "react";

type ContactBookingFieldsProps = {
  initialService?: string;
  initialStartDate?: string;
  initialEndDate?: string;
  initialDate?: string;
  initialTime?: string;
  onServiceChange?: (service: string) => void;
};

export default function ContactBookingFields({
  initialService = "",
  initialStartDate = "",
  initialEndDate = "",
  onServiceChange,
}: ContactBookingFieldsProps) {
  const [service, setService] = useState(initialService);
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  const needsDates =
    service === "boarding" || service === "board-and-train";

  return (
    <div className="mt-6">
      <label className="flex flex-col gap-2">
        <span className="font-bold text-stone-800">
          Service you are interested in
        </span>

        <select
          name="service"
          required
          value={service}
          onChange={(event) => {
            const nextService = event.target.value;

            setService(nextService);
            onServiceChange?.(nextService);

            setStartDate("");
            setEndDate("");
          }}
          className="rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-[#355C4B] focus:ring-2 focus:ring-[#355C4B]/10"
        >
          <option value="">Select a service</option>

          <option value="assessment">
            Initial Assessment + First Lesson
          </option>

          <option value="boarding">
            In-Home Boarding
          </option>

          <option value="board-and-train">
            Board & Train
          </option>
        </select>
      </label>

      {needsDates && (
        <div className="mt-6">
          <p className="mb-4 text-sm leading-6 text-stone-500">
            Tell me the dates you're interested in. Your stay is not
            confirmed until your request has been reviewed.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="font-bold text-stone-800">
                Drop-off date
              </span>

              <input
                type="date"
                name="startDate"
                required
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
                className="rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-[#355C4B] focus:ring-2 focus:ring-[#355C4B]/10"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-bold text-stone-800">
                Pick-up date
              </span>

              <input
                type="date"
                name="endDate"
                required
                value={endDate}
                min={startDate || undefined}
                onChange={(event) => setEndDate(event.target.value)}
                className="rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-[#355C4B] focus:ring-2 focus:ring-[#355C4B]/10"
              />
            </label>
          </div>
        </div>
      )}

      {service === "assessment" && (
        <p className="mt-4 text-sm leading-6 text-stone-500">
          No date is needed yet. After reviewing your intake form, José will
          reach out to coordinate your initial assessment and first lesson.
        </p>
      )}

      {!service && (
        <p className="mt-4 text-sm text-stone-500">
          Select a service to get started.
        </p>
      )}
    </div>
  );
}