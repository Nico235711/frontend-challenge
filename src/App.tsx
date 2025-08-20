import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import ProductList from './pages/productList/ProductList'
import ProductDetail from './pages/productDetails/ProductDetail'
import './App.css'
import { useCart } from './hooks/useCart'
import CartList from './pages/cartList/CartList'

function App() {

  const { cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, isEmpty } = useCart()

  return (
    <div className="App">
      <Header cart={cart} />
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route
            path="/product/:id"
            element={<ProductDetail addToCart={addToCart}/>} 
          />
          <Route
            path="/product/cart"
            element={
              <CartList 
                cart={cart} 
                removeFromCart={removeFromCart} 
                increaseQuantity={increaseQuantity} 
                decreaseQuantity={decreaseQuantity} 
                isEmpty={isEmpty} 
              />
            } 
          />
        </Routes>
      </main>
    </div>
  )
}

export default App