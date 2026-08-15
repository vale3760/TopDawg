"use client";

type ContactBookingFieldsProps = {
  initialService?: string;
  initialStartDate?: string;
  initialEndDate?: string;
  initialDate?: string;
  initialTime?: string;
  onServiceChange?: (service: string) => void;
};

function getServiceTitle(service: string) {
  switch (service) {
    case "boarding":
      return "In-Home Boarding";

    case "board-and-train":
      return "Board & Train";

    case "assessment":
      return "Initial Assessment + First Lesson";

    default:
      return "General Inquiry";
  }
}

function formatDate(dateString: string) {
  if (!dateString) return "";

  const [year, month, day] = dateString.split("-").map(Number);

  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function ContactBookingFields({
  initialService = "",
  initialStartDate = "",
  initialEndDate = "",
}: ContactBookingFieldsProps) {
  const needsDates =
    initialService === "boarding" ||
    initialService === "board-and-train";

  return (
    <div>
      {/* Hidden values submitted with the form */}
      <input
        type="hidden"
        name="service"
        value={initialService}
      />

      {needsDates && (
        <>
          <input
            type="hidden"
            name="startDate"
            value={initialStartDate}
          />

          <input
            type="hidden"
            name="endDate"
            value={initialEndDate}
          />
        </>
      )}

      {/* SELECTION SUMMARY */}
      <div className="rounded-2xl border border-stone-200 bg-[#f8f4ec] p-6 md:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4C6A58]">
          Your Selection
        </p>

        <h2 className="mt-2 text-2xl font-black text-stone-950">
          {getServiceTitle(initialService)}
        </h2>

        {needsDates && initialStartDate && initialEndDate && (
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {/* DROP OFF */}
            <div className="rounded-xl bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-stone-500">
                Drop-off
              </p>

              <p className="mt-1 font-bold text-stone-950">
                {formatDate(initialStartDate)}
              </p>
            </div>

            {/* PICK UP */}
            <div className="rounded-xl bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-stone-500">
                Pick-up
              </p>

              <p className="mt-1 font-bold text-stone-950">
                {formatDate(initialEndDate)}
              </p>
            </div>
          </div>
        )}

        {needsDates && (
          <p className="mt-4 text-sm leading-6 text-stone-500">
            These dates were selected from the availability calendar.
            Your reservation is not confirmed until your request has
            been reviewed.
          </p>
        )}

        {initialService === "assessment" && (
          <p className="mt-4 text-sm leading-6 text-stone-500">
            After reviewing your inquiry, José will reach out to
            coordinate your initial assessment and first lesson.
          </p>
        )}
      </div>
    </div>
  );
}