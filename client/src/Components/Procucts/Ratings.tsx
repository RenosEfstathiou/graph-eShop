import { useState } from "react";
import { Rating } from "react-daisyui";

type Props = {};

const Ratings = (props: Props) => {
  const [rating, setRating] = useState<number>(0);
  return (
    <Rating value={rating} onChange={setRating}>
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
    </Rating>
  );
};

export default Ratings;
