import {createStore} from 'redux';
import PollReducer from './reducers';

export const store  = createStore(PollReducer);
store.subscribe(()=> { 
  console.log( "Subscribed.. ",store.getState() )
 });