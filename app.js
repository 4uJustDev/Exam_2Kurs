import express from 'express'
import path from 'path'
import router from "./routers/router.js"
import 'dotenv/config'

const PORT = process.env.PORT  || 5500

const app = express()
const __dirname = path.resolve(path.dirname(''));


app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.json( { extended: true }));
app.use(express.urlencoded( {extended: false}))

app.use(router);

app.listen(PORT, () => {console.log(`Server started at PORT ${PORT}`)})

