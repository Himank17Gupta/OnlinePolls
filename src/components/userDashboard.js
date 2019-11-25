import React,{useState} from 'react';
import CreatePoll from './createPoll';
import PollList from './pollList';
import { Container } from '@material-ui/core';
import UserHeader from './userHeader';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
function UserDashBoard(props){
    console.log(props);
    var userid=props.location.state.user;
    var _id=props.location.state.user_id;
    var [reloadlist,shouldReload]=useState(0);
    var refresh=()=>{
        console.log(reloadlist);
        shouldReload(reloadlist=reloadlist+1);
        console.log(reloadlist);
    console.log('refresh called');
     }
    return(
    <Container maxWidth='md'>
    <div>
        <UserHeader user={userid}/>
        <br/>
    <CreatePoll refresh={refresh.bind(this)} userid={userid} _id={_id} ></CreatePoll>
    <br/>
    <PollList  props={props}  />
    </div>
    </Container>
    );
}
export default UserDashBoard;