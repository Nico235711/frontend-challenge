import { CartItem } from "@/types/Product"
import "./CartList.css"

interface CartListProps {
  cart: CartItem[]
  removeFromCart: (id: CartItem["id"]) => void
  increaseQuantity: (id: CartItem["id"]) => void
  decreaseQuantity: (id: CartItem["id"]) => void
  isEmpty: boolean
}

const CartList = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity, isEmpty }: CartListProps) => {

  return (
    <>
      {isEmpty ? (
        <p className="is-empty">No hay productos en el carrito</p>
      ) : (
        <>
          <h1 className="cart-list-title">Mis productos</h1>
          <div className="cart-items">
            {cart.map(product => (
              <div key={product.id} className="cart-item">
                <h2 className="cart-item-name">{product.name}</h2>
                <div className="quantity-selector">
                  <label className="quantity-label l1">Cantidad:</label>
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => decreaseQuantity(product.id)}
                    >
                      <span className="material-icons">remove</span>
                    </button>
                    {product.quantity}
                    <button
                      className="quantity-btn"
                      onClick={() => increaseQuantity(product.id)}
                    >
                      <span className="material-icons">add</span>
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="cart-item-remove"
                  onClick={() => removeFromCart(product.id)}
                >X</button>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default CartList