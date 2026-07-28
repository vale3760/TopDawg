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
    <section className="border-t border-stone-200 bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard
              key={review.author}
              author={review.author}
              review={review.review}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
         <a
            href="https://www.rover.com/members/jose-t-expert-care-for-your-fave-companion/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#14A800] px-8 py-4 font-semibold !text-white transition-colors duration-200 hover:bg-[#108C00]"
            >
            See All Reviews on Rover
            </a>
        </div>
      </div>
    </section>
  );
}

type ReviewCardProps = {
  author: string;
  review: string;
};

function ReviewCard({ author, review }: ReviewCardProps) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-[#f8f4ec] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="text-xl text-amber-500">★★★★★</div>

      <p className="mt-5 leading-7 text-stone-700">
        "{review}"
      </p>

      <p className="mt-6 font-semibold text-stone-900">
        — {author}
      </p>
    </div>
  );
}