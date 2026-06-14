import { useState } from 'react';

export default function StarRating() {
  const [rating, setRating] = useState(0);

  const limit = 5;
  return (
    <div style={{ display: 'flex', gap: 4, cursor: 'pointer' }}>
      {Array.from({ length: limit }, (_, i) => (
        <span  onClick={() => setRating(i + 1)}>{i < rating ? '⭐' : '☆'}</span>
      ))}
      <span style={{ marginLeft: 8 }}>{rating} / {limit}</span>
    </div>
  );
}
