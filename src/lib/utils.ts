/**
 * Format a runtime in minutes to a human-readable string (e.g., "2h 15m")
 */
export const formatRuntime = (minutes?: number): string => {
  if (!minutes) return "N/A";
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
};

/**
 * Format a currency amount (in USD) to a human-readable string (e.g., "$1.5M")
 */
export const formatCurrency = (amount?: number): string => {
  if (!amount) return "N/A";
  if (amount >= 1000000000) {
    return `$${(amount / 1000000000).toFixed(1)}B`;
  }
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`;
  }
  if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(1)}K`;
  }
  return `$${amount.toLocaleString()}`;
};

/**
 * Format a date string to a localized date format
 */
export const formatDate = (dateString?: string): string => {
  if (!dateString) return "N/A";
  try {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "N/A";
  }
};
