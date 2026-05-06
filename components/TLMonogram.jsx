'use client';

export default function TLMonogram({ size = 36 }) {
  return (
    <img
      src="/remove-bg.png"
      alt="Tutto Legno"
      width={size}
      height={size}
      style={{ flexShrink: 0, display: 'block' }}
    />
  );
}
