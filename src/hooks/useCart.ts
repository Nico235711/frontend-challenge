import { CartItem } from "@/types/Product";
import { useEffect, useMemo, useState } from "react"

const MIN_ITEMS = 1

const INITIAL_CART = () => {
  const cartLS = localStorage.getItem("FC-cart")
  return cartLS ? JSON.parse(cartLS) : []
}

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>(INITIAL_CART)

  useEffect(() => {
    localStorage.setItem("FC-cart", JSON.stringify(cart))
  }, [cart]);

  const addToCart = (item: CartItem) => {
    const itemExistsIndex = cart.findIndex(product => product.id === item.id)
    if (itemExistsIndex >= 0) {
      const updatedCart = [...cart] // para no mutar el state
      updatedCart[itemExistsIndex].quantity++
      setCart(updatedCart)
    } else {
      setCart([...cart, item])
    }
  }

  const removeFromCart = (id: CartItem["id"]) => {
    const updatedCart = cart.filter(guitar => guitar.id !== id)
    setCart(updatedCart)
  }

  const increaseQuantity = (id: CartItem["id"]) => {
    const updatedCart = cart.map(product => (
      product.id === id 
        ? { ...product, quantity: product.quantity + 1 }
        : product
    ))
    setCart(updatedCart)
  }

  const decreaseQuantity = (id: CartItem["id"]) => {
    const updatedCart = cart.map(product => (
      product.id === id && product.quantity > MIN_ITEMS
        ? { ...product, quantity: product.quantity - 1 }
        : product
    ))
    setCart(updatedCart)
  }

  const isEmpty = useMemo(() => cart.length === 0, [cart])

  return {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    isEmpty,
  }
}