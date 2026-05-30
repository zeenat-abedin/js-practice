import { useState } from 'react';

export default function StarRating() {
  const [rating, setRating] = useState(2);

  const limit = 5;
  return (
    <div>
      {Array.from({ length: limit }, (_, i) => (
        <span onClick={() => setRating(i + 1)}>{i < rating ? '⭐' : '☆'}</span>
      ))}
    </div>
  );
}
