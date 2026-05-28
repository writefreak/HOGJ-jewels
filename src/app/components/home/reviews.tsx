"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Review = {
  id: string;
  name: string;
  role: string;
  review: string;
};

const reviews: Review[] = [
  {
    id: "1",
    name: "Amara Okafor",
    role: "Verified Buyer",
    review:
      "Absolutely stunning necklace. The quality exceeded my expectations and the packaging was so elegant. I'll definitely be ordering again.",
  },
  {
    id: "2",
    name: "Tunde Fasanya",
    role: "Verified Buyer",
    review:
      "The custom ring I ordered was perfect. They captured exactly what I wanted and delivered ahead of schedule. Incredibly impressed.",
  },
  {
    id: "3",
    name: "Chisom Eze",
    role: "Verified Buyer",
    review:
      "Beautiful wristwatch, looks even better in person. Fast delivery and great communication throughout.",
  },
  {
    id: "4",
    name: "Funke Balogun",
    role: "Verified Buyer",
    review:
      "I bought the pearl earrings as a gift and my sister was over the moon. Gorgeous craftsmanship.",
  },
  {
    id: "5",
    name: "Zara Abioye",
    role: "Verified Buyer",
    review:
      "Every piece I've ordered has been worth every penny. The attention to detail is unmatched.",
  },
  {
    id: "6",
    name: "Seun Adeyemi",
    role: "Verified Buyer",
    review:
      "Heart of Gold is the real deal. My bracelet arrived beautifully packaged and looks exactly as pictured.",
  },
];

const PAGE_SIZE = 3;
const emptyForm = { name: "", role: "", review: "" };

const inputClass =
  "w-full bg-[#76492E]/[0.03] border border-[#76492E]/10 rounded-xl px-4 py-3 text-[#1a1a1a] text-sm font-nunito placeholder:text-[#1a1a1a]/30 focus:outline-none focus:border-[#76492E]/40 transition-colors";

const glossyCard =
  "inset 0 1px 1px rgba(255,255,255,0.25), inset 0 -1px 1px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.2)";

export default function Reviews() {
  const [page, setPage] = useState(0);
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedReview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedReview]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.review) return;
    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 800));
    setSubmitting(false);
    setSubmitted(true);
    setForm(emptyForm);
  }

  const totalPages = Math.ceil(reviews.length / PAGE_SIZE);
  const paginated = reviews.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE
  );
  const showPagination = reviews.length > PAGE_SIZE;

  function handlePageChange(next: number) {
    setPage(next);
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  return (
    <section id="reviews" className="py-8 md:py-17 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="pb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-tanpearl text-xl md:text-2xl font-semibold text-[#76492E] leading-tight">
              Client Testimonials
            </h2>
          </div>
        </motion.div>

        {/* Reviews */}
        <div ref={scrollRef}>
          <div className="md:hidden flex gap-4 overflow-x-auto overflow-y-hidden -mx-2 px-6 scrollbar-none [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
            {paginated.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-30px" }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setSelectedReview(r)}
                style={{ boxShadow: glossyCard }}
                className="flex-none w-[80vw] max-w-[320px] snap-start cursor-pointer bg-[#76492E] rounded-2xl p-6 flex flex-col gap-4 border border-white/10 transition-all duration-300"
              >
                <ReviewCardInner r={r} />
              </motion.div>
            ))}
          </div>

          {/* Desktop: grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            {paginated.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-30px" }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setSelectedReview(r)}
                style={{ boxShadow: glossyCard }}
                className="cursor-pointer bg-[#76492E] rounded-2xl p-6 flex flex-col gap-4 border border-white/10 hover:border-white/20 hover:-translate-y-0.5 hover:brightness-110 transition-all duration-300"
              >
                <ReviewCardInner r={r} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {showPagination && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 0}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[#76492E]/10 text-[#76492E]/40 hover:border-[#76492E]/30 hover:text-[#76492E] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-6 h-2 bg-[#76492E]"
                    : "w-2 h-2 bg-[#76492E]/20 hover:bg-[#76492E]/40"
                }`}
              />
            ))}

            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages - 1}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[#76492E]/10 text-[#76492E]/40 hover:border-[#76492E]/30 hover:text-[#76492E] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Review Dialog */}
      <AnimatePresence>
        {selectedReview && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedReview(null)}
              className="fixed inset-0 bg-[#1a1a1a]/40 backdrop-blur-sm z-50"
            />

            <motion.div
              key="dialog"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center px-6 pointer-events-none"
            >
              <div className="bg-white rounded-2xl p-8 w-full max-w-md flex flex-col gap-5 pointer-events-auto shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="#76492E"
                        stroke="none"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedReview(null)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-[#76492E]/10 text-[#1a1a1a]/40 hover:border-[#76492E]/25 hover:text-[#1a1a1a] transition-all duration-200"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                <p className="font-nunito text-sm text-[#1a1a1a]/70 leading-relaxed">
                  {selectedReview.review}
                </p>

                <div className="h-px bg-[#76492E]/[0.06]" />

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#76492E] flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-semibold font-nunito">
                      {selectedReview.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-tanpearl text-sm font-semibold text-[#1a1a1a]">
                      {selectedReview.name}
                    </p>
                    <p className="font-nunito text-xs text-[#1a1a1a]/40 mt-0.5">
                      {selectedReview.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

function ReviewCardInner({ r }: { r: Review }) {
  return (
    <>
      <div className="flex gap-1">
        {[...Array(5)].map((_, j) => (
          <svg
            key={j}
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="rgba(255,255,255,0.7)"
            stroke="none"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      <p className="font-nunito text-sm text-white/70 leading-relaxed flex-1 line-clamp-4">
        {r.review}
      </p>

      <div className="h-px bg-white/10" />

      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <span className="text-white text-xs font-semibold font-nunito">
            {r.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-tanpearl text-xs font-semibold text-white">
            {r.name}
          </p>
          <p className="font-nunito text-[11px] text-white/50 mt-0.5">
            {r.role}
          </p>
        </div>
      </div>
    </>
  );
}
