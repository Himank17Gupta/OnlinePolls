import React, {useState} from 'react';
import { Container, Button } from '@material-ui/core';
import UserHeader from './userHeader';
import Box from '@material-ui/core/Box';
import ProgressBar from './dummyformdb';
import { makeStyles } from '@material-ui/styles';
//import { MDBProgress } from 'mdbreact';


const classes = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));
export default function PollVote(props){
    console.log(props);
    var pollid=props.location.state.poll._id;
    var userid=props.location.state.user.user;
var demopoll= props.location.state.poll;
//{Question:'dummy question for testing',Description:'dummy description for testing purposes elongated',
  //            Options:[ {option:"Option1",votes:5},{option:"Option2",votes:0},{option:"Option3",votes:3}],Date:''}

var [selectedOption,selectOption]=useState(null);

//handleOptionSelect doesn't change the poll component objects and vote digits but do it only static way.
function handleOptionSelect(opid){
  console.log(opid);
  selectOption(selectedOption=opid);
}
//handleOptionSelect doesn't change the poll component objects and vote digits but do it only static way.

function handleVoteSubmit(){
  console.log(selectedOption + pollid +userid+"Rest Api Call with Axios");

  
}


console.log(selectedOption);
console.log(demopoll);
var totalvotes=0;
demopoll.Options.forEach(obj=>{totalvotes+=obj.votes});
console.log(totalvotes);
if(selectedOption){totalvotes+=1;console.log(totalvotes);}

    return(
        <Container maxWidth='md'>
        <div><UserHeader user={userid}/>
        <br/>
        <h3>poll vote component {pollid} </h3>
        <Box component="div" display="block" p={1} m={1} color="text.secondary" bgcolor="background.paper">
        {demopoll.Question} ?
      </Box>
      <Box component="div" display="block" p={1} m={1} color="text.secondary" bgcolor="background.paper"  >
        {demopoll.Description} .
      </Box>
      </div>

      {demopoll.Options.map(oObj=>{return(<>
          <Box component="div" display="block" p={0.5} m={0.5} color="text.secondary" bgcolor="background.paper">
          {oObj.option} 
        </Box>
<ProgressBar option ={oObj.option} votes={oObj.votes} o_id={oObj._id} totalvotes={totalvotes} selected={selectedOption} handleOptionSelect={handleOptionSelect.bind(this)} />
</>
      )})}

      <br/>
      <br/>
{selectedOption&&<Button variant="contained" color="secondary" style={{backgroundColor:'#b5315d'}} 
className={classes.button} onClick={handleVoteSubmit}    >
        Vote
      </Button>} 

        </Container>
    )
}
