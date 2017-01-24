var  combineReducers  = require('redux').combineReducers;
var  ADD_TODO = require( './actions' ).ADD_TODO;
var  COMPLETE_TODO = require( './actions' ).COMPLETE_TODO;
var  DELETE_TODO = require( './actions' ).DELETE_TODO;


function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: action.id
        }
      ]
    case COMPLETE_TODO:
     for( let i = 0 ; i < state.length ; i ++  ){
        if( state[i].id == action.index ){
            return [
              ...state.slice(0, i),
              Object.assign({}, state[i], {

                completed: (state[i].completed === false ? true:false )
              }),
              ...state.slice(i + 1)
            ]
        }
      }
      return state
     
    case DELETE_TODO:
      for( let i = 0 ; i < state.length ; i ++  ){
        if( state[i].id == action.index ){
            return [
              ...state.slice(0, i),
              ...state.slice(i + 1)
            ]
        }
      }
      return state
      
    default:
      return state
  }
}
/*
const todoApp = combineReducers({
  todos
})
*/
module.exports =  todos