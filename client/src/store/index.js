import { createStore } from 'redux'

const INITIAL_STATE = {
  name: '',brand: '',value: 0,description: '',rating: 0
}

function courses(state = INITIAL_STATE, action){
  switch (action.type) {
    case 'itemSelected':
      return {...state, data: action.data}
      break;
  
    default:
      return {...state, data: state}
      break;
  }
}

const store = createStore(courses)

export default store