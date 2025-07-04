export function generateRandomUsername(): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const segment1 = Array.from({ length: 4 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length)),
  ).join("");

  const segment2 = Array.from({ length: 4 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length)),
  ).join("");

  const segment3 = Array.from({ length: 4 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length)),
  ).join("");

  return `${segment1}-${segment2}-${segment3}`;
}
