const express= require('express')
const app=express()
const request=require('request')
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render("Home")
})


//27/3/2021/12:36

app.get('/result', (req, res)=>{
    // const query = req.query.search
    console.log(req.query.search)
    const url = `http://www.omdbapi.com/?apikey=24af43ee&s=${req.query.search}`

    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body)
            // res.send(data)
            res.render('result',{moviesDump:data})
        }else{
            res.send('Error')
        }
    })
})

// app.get('/result',(req,res)=>{
//     console.log(req.query)
//     res.send(`You searched for ${req.query.search}`)
// })

// app.get('/About',(req,res)=>{
//     res.send("About page")
// })

app.listen(3000, ()=>{
    console.log("Server Has Started")
})