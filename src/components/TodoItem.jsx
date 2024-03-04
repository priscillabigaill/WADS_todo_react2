import React, { useState } from "react";

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo, editorMode }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <input
          className="grow"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <button className="btn btn-edt" onClick={() => { editTodo({ id, title: editedTitle }); setIsEditing(false); }} disabled={editedTitle.length === 0}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {title}
        {editorMode && ( 
          <button className="btn btn-edit flex-none" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
      </>
    );
  }

  return (
    <div className="mb-3 flex">
      <li>
        <label className="w-full">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <div className="w-full">
          <span className="ml-2">{todoContent}</span>
          </div>
        </label>
      </li>
      {editorMode && (
        <div>
          <button className="btn btn-danger flex-none" onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
