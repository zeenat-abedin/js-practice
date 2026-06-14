import { useState } from 'react';

export default function StarRating({ maxStars = 5, onRate }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
    if (onRate) onRate(value);
  };

  return (
    <div style={{ display: 'flex', gap: 4, cursor: 'pointer' }}>
      {Array.from({ length: maxStars }, (_, i) => i + 1).map(star => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          style={{ fontSize: 32, color: star <= (hoverRating || rating) ? '#FFD700' : '#DDD' }}
        >
          ★
        </span>
      ))}
      <span style={{ marginLeft: 8 }}>{rating} / {maxStars}</span>
    </div>
  );
}
