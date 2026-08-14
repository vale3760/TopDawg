import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      address,

      dogName,
      breed,
      dogAge,
      dogOwnershipLength,
      dogPersonality,

      service,
      startDate,
      endDate,
      requestedDates,

      homeAlone,
      aroundDogs,
      houseTrained,
      feedingSchedule,
      medications,
      allergies,
      behaviorConcerns,

      veterinarian,
      emergencyContact,
      emergencyInformation,

      goals,
      challengingSituations,
      trainingHistory,
      dogMotivation,
      desiredChanges,
      ownerQuestions,
      boardAndTrainGoals,

      additionalInformation,
    } = body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !dogName ||
      !service
    ) {
      return NextResponse.json(
        {
          error: "Please complete all required fields.",
        },
        {
          status: 400,
        },
      );
    }

    const serviceLabel =
      service === "boarding"
        ? "In-Home Boarding"
        : service === "board-and-train"
          ? "Board & Train"
          : service === "assessment"
            ? "Initial Assessment + First Lesson"
            : service;

    const { data, error } = await resend.emails.send({
      from: `Top Dawg Pet Care <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.BOOKING_EMAIL!],

      // When José hits Reply, it replies directly to the customer.
      replyTo: email,

      subject: `New ${serviceLabel} request — ${firstName} ${lastName}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #292524;">
          <h1 style="color:#355C4B;">
            New Top Dawg Pet Care Intake
          </h1>

          <p>
            <strong>Service:</strong> ${escapeHtml(serviceLabel)}
          </p>

          ${
            service === "boarding" || service === "board-and-train"
              ? `
                <p>
                  <strong>Requested dates:</strong>
                  ${escapeHtml(requestedDates || "Not provided")}
                </p>
              `
              : ""
          }

          <hr />

          <h2>Owner Information</h2>

          <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
          <p><strong>Address / Neighborhood:</strong> ${escapeHtml(address || "Not provided")}</p>

          <hr />

          <h2>About the Dog</h2>

          <p><strong>Name:</strong> ${escapeHtml(dogName)}</p>
          <p><strong>Breed / Mix:</strong> ${escapeHtml(breed || "Not provided")}</p>
          <p><strong>Age:</strong> ${escapeHtml(dogAge || "Not provided")}</p>

          ${
            dogOwnershipLength
              ? `
                <p>
                  <strong>How long they've had the dog:</strong>
                  ${escapeHtml(dogOwnershipLength)}
                </p>
              `
              : ""
          }

          ${emailSection(
            "Personality / Background",
            dogPersonality,
          )}

          ${
            service === "boarding" || service === "board-and-train"
              ? `
                <hr />

                <h2>Boarding Information</h2>

                ${emailSection(
                  "How does the dog do when left home alone?",
                  homeAlone,
                )}

                ${emailSection(
                  "How does the dog do around other dogs?",
                  aroundDogs,
                )}

                ${emailSection(
                  "House trained?",
                  houseTrained,
                )}

                ${emailSection(
                  "Feeding Schedule",
                  feedingSchedule,
                )}

                ${emailSection(
                  "Medications",
                  medications,
                )}

                ${emailSection(
                  "Allergies / Dietary Restrictions",
                  allergies,
                )}

                ${emailSection(
                  "Behavior Concerns",
                  behaviorConcerns,
                )}

                <hr />

                <h2>Emergency Information</h2>

                ${emailSection(
                  "Veterinarian / Hospital",
                  veterinarian,
                )}

                ${emailSection(
                  "Emergency Contact",
                  emergencyContact,
                )}

                ${emailSection(
                  "Emergency Notes",
                  emergencyInformation,
                )}
              `
              : ""
          }

          ${
            service === "assessment" || service === "board-and-train"
              ? `
                <hr />

                <h2>Training & Behavior</h2>

                ${emailSection(
                  "Behaviors / Challenges & Goals",
                  goals,
                )}

                ${emailSection(
                  "Most Challenging Situations",
                  challengingSituations,
                )}

                ${emailSection(
                  "Previous Training",
                  trainingHistory,
                )}

                ${emailSection(
                  "What Motivates the Dog?",
                  dogMotivation,
                )}

                ${emailSection(
                  "Desired Changes",
                  desiredChanges,
                )}

                ${emailSection(
                  "Questions for José",
                  ownerQuestions,
                )}
              `
              : ""
          }

          ${
            service === "board-and-train"
              ? `
                ${emailSection(
                  "Board & Train Goals",
                  boardAndTrainGoals,
                )}
              `
              : ""
          }

          ${emailSection(
            "Additional Information",
            additionalInformation,
          )}

          <hr />

          <p style="color:#78716c; font-size:14px;">
            Submitted through topdawgpetcare.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          error: "The form was received, but the email could not be sent.",
          details:
            process.env.NODE_ENV === "development"
              ? error.message
              : undefined,
        },
        {
          status: 500,
        },
      );
    }

    console.log("EMAIL SENT:", data?.id);

    return NextResponse.json({
      success: true,
      emailId: data?.id,
    });
  } catch (error) {
    console.error("INQUIRY ERROR:", error);

    return NextResponse.json(
      {
        error: "The intake form could not be submitted.",
      },
      {
        status: 500,
      },
    );
  }
}

function emailSection(
  title: string,
  value?: string | null,
) {
  if (!value) {
    return "";
  }

  return `
    <div style="margin-bottom:18px;">
      <p style="margin-bottom:6px;">
        <strong>${escapeHtml(title)}</strong>
      </p>

      <p style="margin-top:0; line-height:1.6;">
        ${escapeHtml(value).replace(/\n/g, "<br />")}
      </p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}