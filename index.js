const PORT = 3333; 

const express = require("express"); 
const bodyParser = require("body-parser"); 
const initServer = require("./lib/initServer"); 

const {
  getAllTodos,
  createTodo,
  deleteTodo,
  findTodo,
  updateTodo,
} = require("./controllers/todocontrollers");

const app = express(); 

app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.get("/", getAllTodos); 
app.get("/:id", findTodo); 
app.post("/", createTodo); 
app.delete("/:id", deleteTodo);
app.put("/:id", updateTodo);

initServer(app, PORT); 
