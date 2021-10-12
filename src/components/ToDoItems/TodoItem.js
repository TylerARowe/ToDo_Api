import React, { useState, useEffect } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import sampleTodoItem from "../../Utilities/sampleTodoItem";
import "./TodoItem.css";
import Logout from "../Auth/Logout";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";

import SingleTodoItem from "./SingleTodoItem";
import TodoItemCreate from "./TodoItemCreate";

export default function TodoItems() {
  const { currentUser } = useAuth();
  const [TodoItems, setTodoItems] = useState(sampleTodoItem);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [categories, setCategories] = useState([]);
  const [effectTrigger, setEffectTrigger] = useState(false);

  //--------------- READ -----------------//
  //Below, we use the Axios functionality to make a request to the TodoItemsAPI and get all items from the TodoItems table in the db.
  //To do this we need to:
  //1.) Open a terminal, and type 'npm install axios'.
  //2.) import Axios to this file.
  //3.) ensure the API is running in the browser and note its port number.
  //4.) write the request (see below)
  //5.) map the items to the UI
  const getTodoItems = () => {
    axios.get("http://localhost:64398/api/TodoItems").then((response) => {
      setTodoItems(response.data);
    });
  };

  //-------------- CREATE ---------------//
  const addTodoItems = (TodoItems) => {
    console.log(TodoItems);

    axios
      .post("http://localhost:64398/api/TodoItems", TodoItems)
      .then((response) => {
        //1. Create a temp TodoItems collection
        let updatedTodoItems = TodoItems;

        //2. Update the temp object - adds the created TodoItems to a temp list of TodoItems.
        updatedTodoItems.push(response.data);

        //3. Update our state variable for TodoItems
        setTodoItems(updatedTodoItems);

        //4. Get TodoItems from the API
        setEffectTrigger(!effectTrigger);

        //5. Toggle the form closed.
        setShowCreateForm(false);
      });
  };

  const getCategories = () => {
    axios.get("http://localhost:64398/api/TodoItems").then((response) => {
      setCategories(response.data);
    });
  };

  useEffect(() => {
    getCategories();
    getTodoItems();
  }, [effectTrigger]);

  return (
    <section className="TodoItems">
      <Jumbotron className="bg-info m-0">
        <h1 className="text-center">TodoItems Dashboard</h1>
      </Jumbotron>

      {currentUser.email === "tyl3rr0we95@gmail.com" && (
        <div className="TodoItemsOptions text-center bg-dark p-3">
          <button
            className="btn btn-info"
            onClick={() => setShowCreateForm(!showCreateForm)}
          >
            {!showCreateForm ? "Create New TodoItems" : "Cancel"}
          </button>
          <div className="createContainer">
            <TodoItemCreate
              categories={categories}
              TodoItems={TodoItems}
              addTodoItems={addTodoItems}
            />
          </div>
        </div>
      )}
      <Container>
        <article className="TodoItemsGallery row justify-content-center">
          {TodoItems.map((x) => (
            <SingleTodoItem key={x.TodoItemsId} TodoItems={x} />
          ))}
        </article>
      </Container>

      {currentUser && <Logout />}
    </section>
  );
}
