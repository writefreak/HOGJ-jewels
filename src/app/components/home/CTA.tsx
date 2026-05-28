"use client";
import React, { useState } from "react";
import { Wrapper } from "../ui/wrapper";
import { Star, X } from "lucide-react";

const Category = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!rating || !review.trim()) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setRating(0);
    setHovered(0);
    setReview("");
    setSubmitted(false);
  };

  return (
    <section className=" pb-8">
      <Wrapper>
        <div className="flex flex-col gap-16">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-6 items-center">
              {/* Image with overlay */}
              <div className="relative h-65  w-full">
                <img
                  src="/flourish.png"
                  alt=""
                  className="h-full w-full object-cover md:object-bottom rounded-xl brightness-75"
                />
                <div className="absolute inset-0 flex flex-col justify-center md:px-10 p-8 bg-linear-to-r from-black/90 md:from-black/85 via-black/25 md:via-black/45 to-transparent rounded-xl">
                  <div className="flex flex-col gap-7">
                    <div>
                      <h2 className="font-tanpearl md:text-3xl text-xl text-white mb-3">
                        Loved your experience?
                      </h2>
                      <p className="text-white/75 font-nunito text-xs md:text-sm w-75 md:w-95 leading-relaxed">
                        Tell us what you think. Real feedback from our esteemed
                        customers helps us grow and ensures we keep delivering
                        the best jewelry experience possible.
                      </p>
                    </div>
                    <button
                      onClick={() => setDialogOpen(true)}
                      className="w-fit px-8 py-2 block rounded-3xl bg-[#76492E]/50 hover:bg-[#8a7868] active:scale-95 transition-all duration-150 text-white font-nunito font-medium text-[15px]"
                    >
                      Leave a Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Service Cards */}
        </div>
      </Wrapper>

      {/* Review Dialog */}
      {dialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl relative">
            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-[#aaa] hover:text-[#555] transition-colors"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <span className="text-4xl">🌟</span>
                <h3 className="font-tanpearl text-xl text-[#76492E]">
                  Thank you!
                </h3>
                <p className="font-nunito text-sm text-[#777]">
                  Your review has been received. We appreciate you sharing your
                  experience.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-2 px-8 py-2 rounded-3xl bg-[#76492E] text-white font-nunito text-sm hover:bg-[#5e3820] active:scale-95 transition-all duration-150"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-tanpearl text-xl text-[#76492E] mb-1">
                  Leave a Review
                </h3>
                <p className="font-nunito text-xs text-[#999] mb-5">
                  Share your experience with Heart of Gold Jewelry.
                </p>

                {/* Star Rating */}
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onMouseEnter={() => setHovered(star)}
                      onMouseLeave={() => setHovered(0)}
                      onClick={() => setRating(star)}
                    >
                      <Star
                        size={26}
                        className="transition-colors duration-100"
                        fill={(hovered || rating) >= star ? "#76492E" : "none"}
                        stroke={
                          (hovered || rating) >= star ? "#76492E" : "#ccc"
                        }
                      />
                    </button>
                  ))}
                </div>

                {/* Review Text */}
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Write your review here..."
                  rows={4}
                  className="w-full border border-[#e0d5cc] rounded-xl px-4 py-3 font-nunito text-sm text-[#444] placeholder-[#bbb] focus:outline-none focus:border-[#76492E] resize-none mb-5 transition-colors"
                />

                <button
                  onClick={handleSubmit}
                  disabled={!rating || !review.trim()}
                  className="w-full py-2.5 rounded-3xl bg-[#76492E] text-white font-nunito font-medium text-sm hover:bg-[#5e3820] active:scale-95 transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Submit Review
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Category;
