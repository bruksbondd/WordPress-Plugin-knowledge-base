const LOAD_DATA = 'LOAD_DATA'

const initialState = {
  loading: true
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default appReducer