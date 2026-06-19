import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, completedTodos = [], onDeleteClick, onCompleteClick }) => {
  return (
    <div className="space-y-6">
      {/* Active Todos Section */}
      {todoItems.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-blue-500">📋</span>
            Active Tasks ({todoItems.length})
          </h2>
          <div className="space-y-3">
            {todoItems.map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                todoDate={item.dueDate}
                todoName={item.name}
                onDeleteClick={onDeleteClick}
                onCompleteClick={onCompleteClick}
                completed={false}
              />
            ))}
          </div>
        </div>
      )}

      {/* Completed Todos Section */}
      {completedTodos.length > 0 && (
        <div className="border-t-2 border-gray-200 pt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-green-500">✅</span>
            Completed Tasks ({completedTodos.length})
          </h2>
          <div className="space-y-3">
            {completedTodos.map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                todoDate={item.dueDate}
                todoName={item.name}
                onDeleteClick={onDeleteClick}
                onCompleteClick={onCompleteClick}
                completed={true}
              />
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {todoItems.length === 0 && completedTodos.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No tasks yet</p>
        </div>
      )}
    </div>
  );
};

export default TodoItems;
