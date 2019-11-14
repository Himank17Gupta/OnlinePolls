import axios  from 'axios';
const initstate={loggeduser:null,Polls:[],MyPolls:[],signUp:false,location:'/'}

function PollReducer(state=initstate,action){
console.log('action from component is ',action);

    //lot of iffs
    if(action.type=='login'){
console.log('axios login called');
return({...state,location:'/user'});
    }



return state;
}
export default PollReducer;