import Product  from "./Product.jsx";

function ProductTab() {
    
    // rendering array way-1
    // let options2 = [ <li>"Advance Processing"</li>, <li>"Windows"</li>] ;
    // rendering array way-2

    return (
        <>
        <Product title="Smart Phone" price={19000} features = {[ "High-Tech" , "Durable" , "Fast"]}/>
        <Product title="Laptop" price={52000} features = {[ "High-Processing" , "Windows" , "Fast"]}/>
        <Product title="Tablet" price={27000} features = {[ "Combination Of laptop and smartphone"]}/>
        </>
        
    );
}

export default ProductTab;