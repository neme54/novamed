/**
 * Format amount as Nigerian Naira (NGN).
 * Example: 1250 → "₦1,250.00"
 */
export function formatCurrency(
  amount: number,
  options?: { currency?: string; showDecimals?: boolean },
): string {
  const { currency = "NGN", showDecimals = true } = options ?? {};
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
  }).format(amount);
}
