import React, { useEffect, useState } from "react";

export default function TicketForm({ dispatch, editTicketForm }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const priorityLevel = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  useEffect(() => {
    if (editTicketForm) {
      setTitle(editTicketForm.title);
      setDescription(editTicketForm.description);
      setPriority(editTicketForm.priority);
    } else {
      clearForm();
    }
  }, [editTicketForm, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const ticketData = {
      id: editTicketForm ? editTicketForm.id : new Date().toISOString(),
      title,
      description,
      priority,
    };

    dispatch({
      type: editTicketForm ? "UPDATE_TICKET" : "ADD_TICKET",
      payload: ticketData,
    });
    clearForm();
  };

  const handleCancelEdit = () => {
    clearForm();
    dispatch({
      type: "CLEAR_EDITING_TICKET",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div className="text-left">
        <label htmlFor=""> Title</label>
        <input
          type="text"
          value={title}
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="text-left">
        <label> Description</label>
        <textarea
          type="text"
          value={description}
          className="form-input"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <fieldset className="priority-fieldset">
        <legend>Priority</legend>
        {Object.entries(priorityLevel).map(([value, label]) => (
          <label key={value} className="priority-label">
            <input
              type="radio"
              value={value}
              checked={priority === value}
              className="priority-input"
              onChange={(e) => setPriority(e.target.value)}
            />
            {label}
          </label>
        ))}
      </fieldset>

      <button type="submit" className="button">
        Submit
      </button>

      {editTicketForm && (
        <button type="button" className="button" onClick={handleCancelEdit}>
          Cancel Edit
        </button>
      )}
    </form>
  );
}
