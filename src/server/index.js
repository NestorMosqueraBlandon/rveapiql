import app from "./app.js"
import "../database/database.js"

app.listen().then(({url}) => {
    console.log("Server ready")
})