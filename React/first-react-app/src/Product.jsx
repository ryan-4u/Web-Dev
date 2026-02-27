import "./Product.css" ;

function Product( {title,price=10000}) {
    // const list = features.map( (feature) => <li>{feature}</li>) ;
    let isDiscount = price>30000 ;
    let styles = { backgroundColor : isDiscount ? "pink" : ""}
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price is {price}</h5>
            {/* <p>
                { features.map( (feature) => (
                    <li>{feature}</li>
                ))}
            </p> */}
            {isDiscount ? <p>"Discount of 5%"</p> : null}
        </div>
    );
}

export default Product ;