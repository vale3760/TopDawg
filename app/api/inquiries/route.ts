import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validServices = [
  "boarding",
  "board-and-train",
  "assessment",
] as const;

type ServiceType = (typeof validServices)[number];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      // OWNER
      firstName,
      lastName,
      email,
      phone,

      // NUMBER OF DOGS
      numberOfDogs,

      // DOG 1
      dogName,
      breed,
      dogAge,
      dogPersonality,

      // DOG 2
      secondDogName,
      secondDogBreed,
      secondDogAge,
      secondDogPersonality,

      // SERVICE / DATES
      service,
      startDate,
      endDate,
      requestedDates,

      // BOARDING
      houseTrained,
      aroundDogs,

      // TRAINING
      behaviorConcerns,
      goals,
      challengingSituations,
    } = body;

    /* --------------------------------
       BASIC VALIDATION
    -------------------------------- */

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

    if (
      !validServices.includes(
        service as ServiceType,
      )
    ) {
      return NextResponse.json(
        {
          error: "Please select a valid service.",
        },
        {
          status: 400,
        },
      );
    }

    /* --------------------------------
       SERVICE TYPE
    -------------------------------- */

    const needsBoarding =
      service === "boarding" ||
      service === "board-and-train";

    const needsTraining =
      service === "assessment" ||
      service === "board-and-train";

    /* --------------------------------
       DOG VALIDATION
    -------------------------------- */

    const dogCount =
      numberOfDogs === "2" ? "2" : "1";

    if (
      dogCount === "2" &&
      !secondDogName
    ) {
      return NextResponse.json(
        {
          error:
            "Please provide the second dog's name.",
        },
        {
          status: 400,
        },
      );
    }

    /* --------------------------------
       SERVICE-SPECIFIC VALIDATION
    -------------------------------- */

    if (
      needsBoarding &&
      (!startDate || !endDate)
    ) {
      return NextResponse.json(
        {
          error:
            "Please select your boarding dates from the availability calendar.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      needsBoarding &&
      (!houseTrained || !aroundDogs)
    ) {
      return NextResponse.json(
        {
          error:
            "Please complete the boarding questions.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      needsTraining &&
      (
        !behaviorConcerns ||
        !goals ||
        !challengingSituations
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Please complete the training questions.",
        },
        {
          status: 400,
        },
      );
    }

    /* --------------------------------
       SERVICE LABEL
    -------------------------------- */

    const serviceLabels: Record<ServiceType, string> = {
      boarding: "In-Home Boarding",

      "board-and-train":
        "Board & Train",

      assessment:
        "Initial Assessment + First Lesson",
    };

    const serviceLabel =
      serviceLabels[
        service as ServiceType
      ];

    /* --------------------------------
       EMAIL HTML
    -------------------------------- */

    const html = `
      <div
        style="
          font-family: Arial, sans-serif;
          max-width: 700px;
          margin: 0 auto;
          color: #292524;
          line-height: 1.6;
        "
      >

        <h1
          style="
            color:#355C4B;
            margin-bottom:8px;
          "
        >
          New Top Dawg Pet Care Inquiry
        </h1>

        <p style="font-size:18px;">
          <strong>Service:</strong>
          ${escapeHtml(serviceLabel)}
        </p>

        <p style="font-size:18px;">
          <strong>Number of dogs:</strong>
          ${escapeHtml(dogCount)}
        </p>

        ${
          needsBoarding
            ? `
              <div
                style="
                  background:#f8f4ec;
                  padding:16px 20px;
                  border-radius:12px;
                  margin:20px 0;
                "
              >
                <strong>
                  Requested Stay
                </strong>

                <p style="margin:8px 0 0;">
                  ${escapeHtml(
                    requestedDates ||
                      `Drop-off: ${startDate}; Pick-up: ${endDate}`,
                  )}
                </p>
              </div>
            `
            : ""
        }

        <hr
          style="
            border:none;
            border-top:1px solid #e7e5e4;
            margin:30px 0;
          "
        />

        <!-- OWNER -->

        <h2 style="color:#051030;">
          Owner Information
        </h2>

        <p>
          <strong>Name:</strong>
          ${escapeHtml(firstName)}
          ${escapeHtml(lastName)}
        </p>

        <p>
          <strong>Email:</strong>
          ${escapeHtml(email)}
        </p>

        <p>
          <strong>Phone:</strong>
          ${escapeHtml(
            phone || "Not provided",
          )}
        </p>

        <hr
          style="
            border:none;
            border-top:1px solid #e7e5e4;
            margin:30px 0;
          "
        />

        <!-- DOG 1 -->

        <h2 style="color:#051030;">
          ${dogCount === "2" ? "Dog 1" : "About the Dog"}
        </h2>

        <p>
          <strong>Name:</strong>
          ${escapeHtml(dogName)}
        </p>

        <p>
          <strong>Breed / Mix:</strong>
          ${escapeHtml(
            breed || "Not provided",
          )}
        </p>

        <p>
          <strong>Age:</strong>
          ${escapeHtml(
            dogAge || "Not provided",
          )}
        </p>

        ${emailSection(
          "Personality / Background",
          dogPersonality,
        )}

        ${
          dogCount === "2"
            ? `
              <hr
                style="
                  border:none;
                  border-top:1px solid #e7e5e4;
                  margin:25px 0;
                "
              />

              <h2 style="color:#051030;">
                Dog 2
              </h2>

              <p>
                <strong>Name:</strong>
                ${escapeHtml(
                  secondDogName || "Not provided",
                )}
              </p>

              <p>
                <strong>Breed / Mix:</strong>
                ${escapeHtml(
                  secondDogBreed || "Not provided",
                )}
              </p>

              <p>
                <strong>Age:</strong>
                ${escapeHtml(
                  secondDogAge || "Not provided",
                )}
              </p>

              ${emailSection(
                "Personality / Background",
                secondDogPersonality,
              )}
            `
            : ""
        }

        ${
          needsBoarding
            ? `
              <hr
                style="
                  border:none;
                  border-top:1px solid #e7e5e4;
                  margin:30px 0;
                "
              />

              <h2 style="color:#051030;">
                Boarding Information
              </h2>

              ${emailSection(
                dogCount === "2"
                  ? "Are both dogs house trained?"
                  : "House trained?",
                houseTrained,
              )}

              ${emailSection(
                dogCount === "2"
                  ? "How do the dogs do around other dogs?"
                  : "How does the dog do around other dogs?",
                aroundDogs,
              )}
            `
            : ""
        }

        ${
          needsTraining
            ? `
              <hr
                style="
                  border:none;
                  border-top:1px solid #e7e5e4;
                  margin:30px 0;
                "
              />

              <h2 style="color:#051030;">
                Training & Behavior
              </h2>

              ${emailSection(
                "What behaviors or challenges are they currently experiencing?",
                behaviorConcerns,
              )}

              ${emailSection(
                "What would they like to accomplish through training?",
                goals,
              )}

              ${emailSection(
                "What situations are most challenging for the dog?",
                challengingSituations,
              )}
            `
            : ""
        }

        <hr
          style="
            border:none;
            border-top:1px solid #e7e5e4;
            margin:30px 0;
          "
        />

        <p
          style="
            color:#78716c;
            font-size:14px;
          "
        >
          Submitted through topdawgpetcare.com
        </p>

      </div>
    `;

    /* --------------------------------
       ENVIRONMENT CHECK
    -------------------------------- */

    const fromEmail =
      process.env.RESEND_FROM_EMAIL;

    const bookingEmail =
      process.env.BOOKING_EMAIL;

    if (!fromEmail) {
      throw new Error(
        "Missing RESEND_FROM_EMAIL",
      );
    }

    if (!bookingEmail) {
      throw new Error(
        "Missing BOOKING_EMAIL",
      );
    }

    /* --------------------------------
       SEND EMAIL
    -------------------------------- */

    const { data, error } =
      await resend.emails.send({
        from:
          `Top Dawg Pet Care <${fromEmail}>`,

        to: [bookingEmail],

        replyTo: email,

        subject:
          `New ${serviceLabel} request — ${firstName} ${lastName}`,

        html,
      });

    /* --------------------------------
       RESEND ERROR
    -------------------------------- */

    if (error) {
      console.error(
        "RESEND ERROR:",
        error,
      );

      return NextResponse.json(
        {
          error:
            "The form was received, but the email could not be sent.",

          details:
            process.env.NODE_ENV ===
            "development"
              ? error.message
              : undefined,
        },
        {
          status: 500,
        },
      );
    }

    console.log(
      "EMAIL SENT:",
      data?.id,
    );

    return NextResponse.json({
      success: true,
      emailId: data?.id,
    });
  } catch (error) {
    console.error(
      "INQUIRY ERROR:",
      error,
    );

    return NextResponse.json(
      {
        error:
          "The inquiry could not be submitted.",

        details:
          process.env.NODE_ENV ===
            "development" &&
          error instanceof Error
            ? error.message
            : undefined,
      },
      {
        status: 500,
      },
    );
  }
}

/* --------------------------------
   EMAIL SECTION
-------------------------------- */

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
        <strong>
          ${escapeHtml(title)}
        </strong>
      </p>

      <p
        style="
          margin-top:0;
          line-height:1.6;
        "
      >
        ${escapeHtml(value).replace(
          /\n/g,
          "<br />",
        )}
      </p>
    </div>
  `;
}

/* --------------------------------
   ESCAPE USER INPUT
-------------------------------- */

function escapeHtml(
  value: string,
) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}