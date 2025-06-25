export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
    maximumFractionDigits: 0,
    useGrouping: true,
  })
    .format(value)
    .replace(",", " ")
    .replace("$", "$ ");
