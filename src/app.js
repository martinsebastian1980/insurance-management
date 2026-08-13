import "dotenv/config";
import { engine } from "express-handlebars";
import accountsRouter from "./routes/accounts.router.js";
import policiesRouter from "./routes/policies.router.js";

import express from "express";
import connectDB from "./config/database.js";


const app = express();

//handlebars config
app.engine("handlebars", engine() );
app.set("view engine", "handlebars");
app.set("views", "./src/views");

// Middleware para leer formularios HTML
app.use(express.urlencoded({ extended: true }));  
app.use(express.json());
//endpoints
app.use("/accounts", accountsRouter);
app.use("/policies", policiesRouter);

connectDB();

app.listen(8080, ()=> {
  console.log("Servidor iniciado correctamente!");
});