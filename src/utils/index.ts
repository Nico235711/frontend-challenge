export const formatCurrency = (amount: number) => {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "CLP",
  }
  return new Intl.NumberFormat("es-CL", options).format(amount)
}