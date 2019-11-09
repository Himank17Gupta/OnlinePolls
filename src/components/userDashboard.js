import React from 'react';
import CreatePoll from './createPoll';
import PollList from './pollList';
import { Container } from '@material-ui/core';
import UserHeader from './userHeader';
function UserDashBoard(props){
    console.log(props);
    var userid=props.location.state.user;
    return(
    <Container maxWidth='md'>
    <div>
        <UserHeader user={userid}/>
        <br/>
    <CreatePoll ></CreatePoll>
    <br/>
    <PollList  props={props}  />
    </div>
    </Container>
    );
}
export default UserDashBoard;