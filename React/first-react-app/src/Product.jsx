import "./Product.css" ;
import Price from "./Price";

function Product( {title , description="Default description" ,idx}) {
    let oldPrices = [ "12,495" ,"11,999" , "4,999" , "2,599"];
    let newPrices = [ "9,495" ,"10,999" , "3,999" , "599"];
    let descriptions = [
        ["8,000 DPI"," 5 Programmable Buttons"] ,
        ["designed for ipad pro" ,"Collections"] ,
        ["wireless" ,  "optical orientation"],
        ["inituative surface", "designed with grace"] ,
    ];
    return (
        <div className="Product">
            <h2>{title}</h2>
            <p>{descriptions[idx][0]}</p>
            <p>{descriptions[idx][1]}</p>
            <Price oldPrice = { oldPrices[idx] } newPrice = { newPrices[idx] }/>
        </div>
    );
}

export default Product ;