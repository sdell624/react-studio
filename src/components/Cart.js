function Cart(props) {
    return (
        <div className="Cart">

            <h2>Cart</h2>
            {/* TODO: render a list of items in the cart */}
            {console.log("Keys: " + Object.keys(props.c))}
            {Object.keys(props.c).map((key) => {
                console.log("There are " + props.c[key] + " of " + key);
                <p>chimp mode</p>
                // <p>{key}x {props.c[key]}</p>
                
            })}
            <p>Total Price: ${props.p}</p>
        </div>
    )
}

export default Cart;