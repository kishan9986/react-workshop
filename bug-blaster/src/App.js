import { useReducer } from "react";
import "./App.css";
import "./styles.css";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./components/TicketList";
import { sortTickets } from "./utilites/sortingUtilites";
import MessageContext from "./context/MessageContext";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  const initialState = {
    tickets: [],
    editTicketForm: null,
    sortPreference: "High to Low",
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);
  const sortedTickets = sortTickets(state.tickets, state.sortPreference);

  const message =
    sortedTickets.length > 0 ? sortedTickets[0].title : "All tickets";

  return (
    <ThemeProvider>
      <div className="App">
        <div className="container">
          <h1>Bug Blaster</h1>
          <TicketForm
            dispatch={dispatch}
            editTicketForm={state.editTicketForm}
          ></TicketForm>

          <select
            value={state.sortPreference}
            onChange={(e) =>
              dispatch({ type: "SET_SORTING", payload: e.target.value })
            }
          >
            <option value="High to Low">High to Low</option>
            <option value="Low to High">Low to High</option>
          </select>

          {state.tickets.length > 0 && (
            <div className="results">
              <MessageContext.Provider value={message}>
                <TicketList
                  tickets={sortedTickets}
                  dispatch={dispatch}
                ></TicketList>
              </MessageContext.Provider>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
