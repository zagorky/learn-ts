function formatPrice(num?: number | null): string {
  return num ? `$${num.toFixed(2)}` : '$0.00'
}

export {formatPrice}
