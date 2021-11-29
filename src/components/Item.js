import React from "react";
import { MdModeEdit, MdDeleteForever } from "react-icons/md";

function Item({ expense, handleDelete, handleEdit }) {
  const { id, charge, amount } = expense;
  return (
    <li className="item">
      <div className="info">
        <span className="expense"> {charge}</span>
        <span className="amount"> {amount}$</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="Edit button"
          onClick={() => handleEdit(id)}
        >
          <MdModeEdit />
        </button>
        <button
          className="clear-btn"
          aria-label="Delete button"
          onClick={() => handleDelete(id)}
        >
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
}

export default Item;
