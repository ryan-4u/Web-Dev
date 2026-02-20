const mongoose = require('mongoose');
const {Schema} = mongoose ;

main()
  .then( () => { console.log("connection successful")}) 
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema( {
    item : String ,
    price : Number 
}) ;

const customerSchema = new Schema({
    name : String ,
    orders : [
        {
            type : Schema.Types.ObjectId ,
            ref : "Order"
        }
    ]
})

// customerSchema.pre("findOneAndDelete", async() =>{
//     console.log(" PRE") ;
// })

customerSchema.post("findOneAndDelete", async(customer) =>{
    if(customer.orders.length){
        let res = await Order.deleteMany( { _id : { $in : customer.orders} });
        console.log(res) ;
    }
})

const Order = mongoose.model("Order", orderSchema) ;
const Customer = mongoose.model("Customer", customerSchema) ;

const findCustomers = async () => {
    let result = await Customer.find({}).populate("orders") ;
    // console.log(result) ;
    console.log(result[0]) ;
}

// findCustomers() ;

// const addOrders = async () => {
//     let res = await Order.insertMany([
//         { item :"samosa" ,price:15} ,
//         { item :"chips" ,price:10} ,
//         { item :"chocolate" ,price:150} ,
//     ]);
//     console.log(res) ;
// }

// addOrders() ;



const addCust = async () => {
    let newCust = new Customer({
        name : "Karan Arjun"
    }) ;

    let newOrder = new Order({
        item : "Burger" ,
        price : 200
    });

    newCust.orders.push(newOrder);

    await newOrder.save() ;
    await newCust.save() ;

    console.log("added new customer") ;
}

// addCust();

const delCust = async() =>{
    let data = await Customer.findByIdAndDelete('699808da058dcd82c4e9613e') ;
    console.log(data) ;
}

delCust() ;