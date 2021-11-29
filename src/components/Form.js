import React from "react";
import { MdSend, MdEditCalendar } from "react-icons/md";

function Form({
  handleAmount,
  handleCharge,
  handleSubmit,
  charge,
  amount,
  edit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Charge:</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            value={charge}
            placeholder="exp : Bills"
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            className="form-control"
            name="amount"
            id="amount"
            value={amount}
            placeholder="exp : 500$"
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "Edit" : "Submit"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
}

export default Form;

{
  /* <MdEditCalendar className="btn-icon" /> */
}
