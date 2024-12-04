export default function ticketReducer(state, action) {
  switch (action.type) {
    case "ADD_TICKET":
      return { ...state, tickets: [...state.tickets, action.payload] };

    case "UPDATE_TICKET":
      return {
        ...state,
        tickets: state.tickets.map((ticket) => {
          if (ticket.id === action.payload.id) return action.payload;
          else return ticket;
        }),
        editTicketForm: null,
      };
    case "DELETE_TICKET":
      return {
        ...state,
        tickets: state.tickets.filter(
          (ticket) => ticket.id !== action.payload.id
        ),
        editTicketForm:
          state.editTicketForm?.id === action.payload.id
            ? null
            : state.editTicketForm,
      };
    case "SET_EDITING_TICKET":
      return {
        ...state,
        editTicketForm: action.payload,
      };
    case "CLEAR_EDITING_TICKET":
      return {
        ...state,
        editTicketForm: null,
      };

    case "SET_SORTING":
      return {
        ...state,
        sortPreference: action.payload,
      };
    default:
      return state;
  }
}
