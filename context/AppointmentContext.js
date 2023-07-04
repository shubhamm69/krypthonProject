import createDataContext from './createDataContext';

const AppointmentReducer = (state, action) => {
  switch (action.type) {
    case 'edit_Appointment':
      return state.map(Appointment => {
        return Appointment.id === action.payload.id ? action.payload : Appointment;
      });
    case 'delete_Appointment':
      return state.filter(Appointment => Appointment.id !== action.payload);
    case 'add_Appointment':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
          problem: action.payload.problem,
        }
      ];
    default:
      return state;
  }
};

const addAppointment = dispatch => {
  return (title, content, problem, callback) => {
    dispatch({ type: 'add_Appointment', payload: { title, content, problem } });
    if (callback){
      callback();
    }
  };
};
const deleteAppointment = dispatch => {
  return id => {
    dispatch({ type: 'delete_Appointment', payload: id });
  };
};
const editAppointment = dispatch => {
  return (id, title, content, problem, callback) => {
    dispatch({
      type: 'edit_Appointment',
      payload: { id, title, content, problem }
    });
    if (callback){
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  AppointmentReducer,
  { addAppointment, deleteAppointment, editAppointment },
  [{ title: 'Test Name', content: 'Test Age', problem: 'Test Problem', id: 123 }]
);