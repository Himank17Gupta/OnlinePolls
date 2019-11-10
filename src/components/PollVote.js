import React from 'react';
import { Container } from '@material-ui/core';
import UserHeader from './userHeader';
export default function PollVote(props){
    console.log(props);
    var pollid=props.location.state.poll;
    var userid=props.location.state.user.user;
var demopoll={Question:'dummyq',Description:'desc',Options:[ {option1:"x",votes:0},{option2:"y",votes:0},{option2:"z",votes:2}],Date:''}
console.log(demopoll);


    return(
        <Container maxWidth='md'>
        <div><UserHeader user={userid}/>
        <br/>
        <h3>poll vote component {pollid} </h3>

        </div>
        </Container>
    )
}