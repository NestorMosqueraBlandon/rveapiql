import app from "./app.js"
import "../database/database.js"
import config from "../helpers/config.js"

app.listen((config.PORT), () => {
    console.log("Server ready")
})