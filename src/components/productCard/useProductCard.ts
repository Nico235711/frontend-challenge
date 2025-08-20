import { Product } from '@/types/Product'
import { formatCurrency } from '@/utils'

const useProductCard = () => {

  // Format price for display
  const formatPrice = (price: number) => {
    return formatCurrency(price) // Missing currency and proper formatting
  }

  // Calculate discount percentage
  const getDiscountPrice = (product: Product) => {
    if (product.priceBreaks && product.priceBreaks.length > 1) {
      const bestDiscount = product.priceBreaks[product.priceBreaks.length - 1]
      return bestDiscount.price
    }
    return null
  }

  return {
    formatPrice,
    getDiscountPrice
  }
}

export default useProductCard