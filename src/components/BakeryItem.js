// TODO: create a component that displays a single bakery item
function BakerItem(props) {
    return (
        <div className="BakeryItem">
            <img src={props.i.image}/>
            <h2>{props.i.name}</h2>
            <p>{props.i.description}</p>
            <p><i>${props.i.price}</i></p>
            <button onClick={() => {props.addToCart(props.i.name, props.i.price)}}>Add to Cart</button>
        </div>
    )
}

export default BakerItem;