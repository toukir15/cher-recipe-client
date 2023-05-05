import { useEffect, useState } from "react";
import ReviewsSlider from "./ReviewsSlider";
import sliderBackground from "../../../assets/slider/boxed-background-5 (1).jpg";

export default function Reviews() {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/review`)
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${sliderBackground})`,
        backgroundSize: "cover",
      }}
      className="bg-transparent"
    >
      <div className="container mx-auto text-center mb-32">
        <h1 className="text-4xl font-semibold mb-4 underlineStyle">Reviews</h1>
        <h2 className="text-3xl font-semibold mb-4">Premium Experience</h2>

        <div className="carousel w-full">
          {reviewData.map((singleData, i) => (
            <ReviewsSlider
              key={singleData.id}
              singleData={singleData}
              i={i}
              dataLength={reviewData.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
