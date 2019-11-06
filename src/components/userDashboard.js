import React from 'react';
import CreatePoll from './createPoll';
import PollList from './pollList';
import { Container } from '@material-ui/core';
function UserDashBoard(props){
    console.log(props);
    var userid=props.location.state.user;
    return(
    <Container maxWidth='md'>
    <div>
        Welcome {userid}
    <CreatePoll/>
    <PollList/>
    </div>
    </Container>
    );
}
export default UserDashBoard;