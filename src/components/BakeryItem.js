// TODO: create a component that displays a single bakery item
function BakerItem(props) {


    return (
        <div>
            <img src={props.i.image}/>
            <h1>{props.i.name}</h1>
            <p>{props.i.description}</p>
            <p>${props.i.price}</p>
            <button onClick={props.addToCart(props.i.name, props.i.price)}>Add to Cart</button>
        </div>
    )
}

export default BakerItem;