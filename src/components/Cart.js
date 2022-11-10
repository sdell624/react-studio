function Cart(props) {
    return (
        <div className="Cart">

            <h2>Cart</h2>
            {/* TODO: render a list of items in the cart */}
            {console.log("Keys: " + Object.keys(props.c))}
            {Object.keys(props.c).map((key) => {  
                <p>{key}x {props.c[key]}</p>
            })}
            <p>Total Price: ${c.p}</p>
        </div>
    )
}

export default Cart;