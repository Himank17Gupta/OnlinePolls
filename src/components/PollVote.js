import React from 'react';
import { Container } from '@material-ui/core';
import UserHeader from './userHeader';
import Box from '@material-ui/core/Box';
import ProgressBar from './dummyformdb';
//import { MDBProgress } from 'mdbreact';

  
  



export default function PollVote(props){
    console.log(props);
    var pollid=props.location.state.poll;
    var userid=props.location.state.user.user;
var demopoll={Question:'dummyq',Description:'desc',Options:[ {option:"x",votes:5},{option:"y",votes:0},{option:"z",votes:2}],Date:''}
console.log(demopoll);
var totalvotes=0;
demopoll.Options.forEach(obj=>{totalvotes+=obj.votes});
console.log(totalvotes);

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
      </div>

      {demopoll.Options.map(oObj=>{return(<>
          <Box component="div" display="block" p={0.5} m={0.5} color="text.secondary" bgcolor="background.paper">
          {oObj.option} 
        </Box>
<ProgressBar option ={oObj.option} votes={oObj.votes} totalvotes={totalvotes}  />
</>
      )})}

        </Container>
    )
}
