export default function StarRating({ rating, limit }) {
  return <div>{Array.from({ length: limit }, (_, i) => (i < rating ? '⭐' : '*'))}</div>;
}
