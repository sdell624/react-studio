function Cart(props) {
    return (
        <div className="Cart">

            <h2>Cart</h2>
            {/* TODO: render a list of items in the cart */}
            {console.log("Keys: " + Object.keys(cart))}
            {Object.keys(cart).map((key) => {  
                <p>{key}x {cart[key]}</p>
            })}
            <p>Total Price: ${totalPrice}</p>
        </div>
    )
}

export default Cart;