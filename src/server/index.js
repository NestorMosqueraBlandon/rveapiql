import app from "./app.js"
import "../database/database.js"

app.listen(5001, () => {
    console.log("Server ready")
})