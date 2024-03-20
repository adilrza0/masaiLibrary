const express =require("express");
const swaggerUi=require("swagger-ui-express")
const cors=require("cors")

const connection = require("./connection");
const { userRouter } = require("./Routes/user.router");
const bookRouter = require("./Routes/book.router");
const orderRouter = require("./Routes/order.router");
const { swaggerSpec } = require("./swagger");
require("dotenv").config()
const app=express();

app.use(cors())
app.use(express.json())
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec))



app.post("/i",(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})
app.use("/",userRouter)

app.use("/books",bookRouter)


app.use("/",orderRouter)
app.listen(process.env.port,async()=>{
    // console.log("server running at")
    try {
        await connection
        console.log("connected to DB");
        console.log(`port running at ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
    
})