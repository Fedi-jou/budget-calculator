import React from "react";
import Item from "./Item";
import { MdDelete } from "react-icons/md";

function List({ expenses, handleDelete, handleEdit, clearItems }) {
  return (
    <>
      <ul className="list">
        {expenses.map((expense, index) => {
          return (
            <Item
              key={expense.key}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length && (
        <button className="btn" onClick={clearItems}>
          Clear your expenses list <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
}

export default List;
