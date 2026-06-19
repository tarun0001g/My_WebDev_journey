import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState, useEffect } from "react";
import { addItemToServer, deleteItemFromServer, getItemsFromServer, markItemCompletedOnServer } from "./services/itemsServices";


function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemsFromServer().then(initialItems => {
      setTodoItems(initialItems);
    });
  }, []);

  

  const handleNewItem = async (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const item = await addItemToServer(itemName, itemDueDate);
    const newTodoItems = [
      ...todoItems,
      item,
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = async (id) => {
    const deletedId = await deleteItemFromServer(id);
    const newTodoItems = todoItems.filter((item) => item.id !== deletedId);
    setTodoItems(newTodoItems);
  };

  const handleCompleteItem = async (id) => {
    const completedItem = await markItemCompletedOnServer(id);
    const updatedItems = todoItems.map((item) =>
      item.id === id ? completedItem : item
    );
    setTodoItems(updatedItems);
  };

  const incompleteTodos = todoItems.filter((item) => !item.completed);
  const completedTodos = todoItems.filter((item) => item.completed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems
          todoItems={incompleteTodos}
          completedTodos={completedTodos}
          onDeleteClick={handleDeleteItem}
          onCompleteClick={handleCompleteItem}
        ></TodoItems>
      </div>
    </div>
  );
}

export default App;
