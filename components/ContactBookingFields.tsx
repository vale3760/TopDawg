"use client";

import { useState } from "react";

type ContactBookingFieldsProps = {
  initialService?: string;
  initialStartDate?: string;
  initialEndDate?: string;
  initialDate?: string;
  initialTime?: string;
};

const trainingServices = [
  "assessment",
  "private-training",
  "three-lesson-package",
  "five-lesson-package",
];

export default function ContactBookingFields({
  initialService = "",
  initialStartDate = "",
  initialEndDate = "",
  initialDate = "",
}: ContactBookingFieldsProps) {
  const [service, setService] = useState(initialService);
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);
  const [lessonDate, setLessonDate] = useState(initialDate);

  const isTraining = trainingServices.includes(service);
  const isBoarding =
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
            setStartDate("");
            setEndDate("");
            setLessonDate("");
          }}
          className="rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-[#355C4B]"
        >
          <option value="">Select a service</option>

          <option value="assessment">
            Initial Assessment + First Lesson
          </option>

          <option value="boarding">In-Home Boarding</option>

          <option value="board-and-train">
            Board and Train
          </option>
        </select>
      </label>

      {isBoarding && (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
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
              className="rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-[#355C4B]"
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
              className="rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-[#355C4B]"
            />
          </label>
        </div>
      )}

      {!service && (
        <p className="mt-4 text-sm text-stone-500">
          Select a service to choose your requested date.
        </p>
      )}
    </div>
  );
}