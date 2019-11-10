import React from 'react';
import { Container } from '@material-ui/core';
import UserHeader from './userHeader';
export default function PollVote(props){
    console.log(props);
    var pollid=props.location.state.poll;
    var userid=props.location.state.user.user;
var demopoll={Question:'dummyq',Description:'desc',Date:'',}



    return(
        <Container maxWidth='md'>
        <div><UserHeader user={userid}/>
        <br/>
        poll vote component {pollid} 
        </div>
        </Container>
    )
}