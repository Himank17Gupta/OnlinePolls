import React from 'react';
import { Container } from '@material-ui/core';
import UserHeader from './userHeader';
import Box from '@material-ui/core/Box';
//import { MDBProgress } from 'mdbreact';
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
        <Box component="div" display="block" p={1} m={1} color="text.secondary" bgcolor="background.paper">
        {demopoll.Question} ?
      </Box>
      <Box component="div" display="block" p={1} m={1} color="text.secondary" bgcolor="background.paper">
        {demopoll.Description} .
      </Box>
      {/* <MDBProgress value={34} className="my-2" />
      <MDBProgress material value={25} height="20px">
        25%
      </MDBProgress> */}



        </div>
        </Container>
    )
}
