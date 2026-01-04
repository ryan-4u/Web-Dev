const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
  console.log(`look at tge change`)
})

// app.use((req,res) => {
//     console.log("Request 12345 received " ,req.url) ;
//     myObj = {name: "John", age: 30, city: "New York"} ;
//     code = "<h1>Fruits</h1> <ul> <li>Apple</li> <li>Banana</li> <li>Cherry</li> </ul>";
//     res.send(code) ;
// })

// using app.get()
app.get('/', (req, res) => {
    
    res.send("You contacted the root path") ;
});

app.get('/apple', (req, res) => {
    res.send("You contacted the apple path") ;
});

app.get('/orange', (req, res) => {
    res.send("You contacted the orange path") ;
});

app.post('/', (req, res) => {
    res.send("Post: Page does not exist") ;
});

app.get(/.* /, (req, res) => {
    res.send("Get: Page does not exist") ;
});

// path parameters 
    // app.get("/:username", (req, res) => {
    //     console.log(req.params) ;
    //     res.send(`Hello ${req.params.username}`) ;
    // }) ;

// query strings
app.get("/search", (req, res) => {
    console.log(req.query) ;
    let {q} = req.query ;
     //for query isn't send
    if(!q){
        res.send("No search query provided") ;
        return ;
    }
    res.send(`You searched for ${q} `) ;
} ) ;
