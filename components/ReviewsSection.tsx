const reviews = [
  {
    author: "Julia H.",
    review:
      "José was wonderful with our dog. She's very shy, and it was clear she warmed up to him. He has a great positive approach to dog training, and we're looking forward to leaving our dog with him again.",
  },
  {
    author: "Miles M.",
    review:
      "José clearly loves dogs and has a natural gift for listening to them and guiding them. We received daily walks, photos, and updates. We look forward to having our dog stay with him again!",
  },
  {
    author: "John D.",
    review:
      "José took such good care of our anxious pup. He was calm, communicative, and went out of his way to make sure Louie felt comfortable.",
  },
];

export default function ReviewsSection() {
  return (
    <div className="w-full">
      {/* REVIEWS */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
        {reviews.map((review) => (
          <ReviewCard
            key={review.author}
            author={review.author}
            review={review.review}
          />
        ))}
      </div>

      {/* ROVER BUTTON */}
      <div className="mt-8 text-center lg:mt-12">
        <a
          href="https://www.rover.com/members/jose-t-expert-care-for-your-fave-companion/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-[#14A800]
            px-7
            py-3
            text-sm
            font-semibold
            !text-white
            transition-colors
            duration-200
            hover:bg-[#108C00]
            lg:px-8
            lg:text-base
          "
        >
          See All Reviews on Rover
        </a>
      </div>
    </div>
  );
}

type ReviewCardProps = {
  author: string;
  review: string;
};

function ReviewCard({
  author,
  review,
}: ReviewCardProps) {
  return (
    <article
      className="
        flex
        h-full
        flex-col
        rounded-2xl
        border
        border-stone-200
        bg-[#f8f4ec]
        p-6
        shadow-sm
        transition
        duration-300
        lg:rounded-3xl
        lg:p-8
        lg:hover:-translate-y-1
        lg:hover:shadow-lg
      "
    >
      {/* STARS */}
      <div
        className="text-lg tracking-[0.08em] text-amber-500 lg:text-xl"
        aria-label="5 out of 5 stars"
      >
        ★★★★★
      </div>

      {/* REVIEW */}
      <p className="mt-4 flex-1 text-base leading-7 text-stone-700 lg:mt-5 lg:text-lg lg:leading-8">
        &ldquo;{review}&rdquo;
      </p>

      {/* AUTHOR */}
      <p className="mt-5 font-semibold text-stone-900 lg:mt-6">
        — {author}
      </p>
    </article>
  );
}