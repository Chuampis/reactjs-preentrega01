import './CartWidget.css'

const CartWidget = () => {
  
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
    return (
    <div>
        <img className = 'imgCarrito' src={ imgCarrito } alt="Carrito" />
        <strong>10</strong>
    </div>
  )
}

export default CartWidget