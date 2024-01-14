import crypto from "crypto";

export const getStars = (rate) => {
  const stars = new Array(Math.floor(rate)).fill(
    crypto.randomBytes(20).toString("hex")
  );
  const starsWithIds = stars.map((star, i) => `${star}-${i}`);
  return starsWithIds;
};
