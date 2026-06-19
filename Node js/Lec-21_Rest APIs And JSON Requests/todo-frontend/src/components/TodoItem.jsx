function TodoItem({ id, todoName, todoDate, onDeleteClick, onCompleteClick, completed = false }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all duration-200 ${
      completed 
        ? 'opacity-75 bg-gray-50' 
        : 'hover:shadow-lg'
    }`}>
      <div className="flex-1 flex items-center gap-4">
        <button
          type="button"
          onClick={() => onCompleteClick(id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            completed
              ? 'bg-green-500 border-green-500 hover:bg-green-600'
              : 'border-gray-300 hover:border-green-500 hover:bg-green-50'
          }`}
        >
          {completed && <span className="text-white text-sm font-bold">✓</span>}
        </button>
        <p className={`font-medium text-lg transition-all duration-200 ${
          completed
            ? 'text-gray-500 line-through'
            : 'text-gray-800'
        }`}>{todoName}</p>
      </div>
      <div className="flex-shrink-0 text-gray-600">
        <p className={`text-sm font-medium transition-all duration-200 ${
          completed ? 'text-gray-400' : ''
        }`}>{todoDate || "No date set"}</p>
      </div>
      <button
        type="button"
        onClick={() => onDeleteClick(id)}
        className="w-full sm:w-auto px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
