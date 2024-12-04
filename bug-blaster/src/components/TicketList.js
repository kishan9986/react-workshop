import React from "react";
import { useContext } from "react";
import TicketItem from "./TicketItem";
import MessageContext from "../context/MessageContext";
import ThemeContext from "../context/ThemeContext";

export default function TicketList({ tickets, dispatch }) {
  const contextMessage = useContext(MessageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="ticket-list">
      <div>
        Current theme {theme}
        <button type="button" onClick={toggleTheme}>
          Toggle theme
        </button>
      </div>
      <h1>{contextMessage}</h1>
      {tickets.map((ticket) => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
          dispatch={dispatch}
        ></TicketItem>
      ))}
    </div>
  );
}
