import React, {useState,useEffect} from 'react';
import { Container, Button } from '@material-ui/core';
import UserHeader from './userHeader';
import Box from '@material-ui/core/Box';
import ProgressBar from './dummyformdb';
import { makeStyles } from '@material-ui/styles';
//import { MDBProgress } from 'mdbreact';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

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
    var userid=props.location.state.user.user_id;
    var demopoll= props.location.state.poll;
    var totalvotes=0;
    demopoll.Options.forEach(opt=>totalvotes+opt.votes);
    axios.post("https://pollsmernrestapi.herokuapp.com/findPoll",{poll_id:pollid}).then(async (res)=>{
      console.log('inside findpoll');
       let ttlvfromres=0;
       console.log(res);
    ttlvfromres= res.data.Options.reduce((a,opt)=>a+opt.votes,0) ;
     console.log(ttlvfromres);
     console.log(totalvotes);
     if(ttlvfromres!=totalvotes){changepoll(pollc=res.data);}
  }).catch(err=>console.log(err));

//{Question:'dummy question for testing',Description:'dummy description for testing purposes elongated',
  //            Options:[ {option:"Option1",votes:5},{option:"Option2",votes:0},{option:"Option3",votes:3}],Date:''}

var [selectedOption,selectOption]=useState(null);
var [loader,changeLoader]=useState(false);
var [pollc,changepoll]=useState(demopoll);
//handleOptionSelect doesn't change the poll component objects and vote digits but do it only static way.

useEffect(() => {
  console.log('useEffect called');
 
});

function handleOptionSelect(opid){
  console.log(opid);
  selectOption(selectedOption=opid);
}
//handleOptionSelect doesn't change the poll component objects and vote digits but do it only static way.

function handleVoteSubmit(){
  changeLoader(loader=true);
  console.log('1-demopoll',demopoll);
 // changepoll( pollc.Question='hehehe');
 // console.log(selectedOption + 'fff ' + pollid + 'fff ' +userid+ 'fff ' +"Rest Api Call with Axios");
var voteobj={"u_id":userid,"p_id":pollid,"o_id":selectedOption};
axios.post("https://pollsmernrestapi.herokuapp.com/vote",voteobj).then((res)=>{
  console.log(res);
  var head=window.document.getElementById('votedesc');
 if(res.data=="vote added"){head.innerText="Your Vote has been casted for this Poll";changeLoader(loader=false);selectOption(selectedOption=null)}
 else {head.innerText="You have already Voted for this Poll";changeLoader(loader=false);selectOption(selectedOption=null)};
 axios.post("https://pollsmernrestapi.herokuapp.com/findPoll",{poll_id:pollid}).then((res)=>{
 changepoll(pollc=res.data); 
}).catch(err=>console.log(err));
}).catch(err=>console.log(err));

}


console.log(selectedOption);
console.log(demopoll);
console.log(pollc);
var totalvotes=0;
pollc.Options.forEach(obj=>{totalvotes+=obj.votes});
console.log(totalvotes);
if(selectedOption){totalvotes+=1;console.log(totalvotes);}

    return(
        <Container maxWidth='md'>
        <div><UserHeader user={userid}/>
        <br/>
        <h3>poll vote component {pollid} </h3>
        <Box component="div" display="block" p={1} m={1} color="text.secondary" bgcolor="background.paper">
        {pollc.Question} ?
      </Box>
      <Box component="div" display="block" p={1} m={1} color="text.secondary" bgcolor="background.paper"  >
        {pollc.Description} .
      </Box>
      </div>

      {pollc.Options.map(oObj=>{return(<>
          <Box component="div" display="block" p={0.5} m={0.5} color="text.secondary" bgcolor="background.paper">
          {oObj.option} 
        </Box>
<ProgressBar option ={oObj.option} votes={oObj.votes} o_id={oObj._id} totalvotes={totalvotes} selected={selectedOption} handleOptionSelect={handleOptionSelect.bind(this)} />
</>
      )})}

      <br/>
      { loader?(<div>
      <CircularProgress color="secondary" />
        </div>):(<></>)}
      <h2 id='votedesc'></h2>
      <br/>
{selectedOption&&<Button variant="contained" color="secondary" style={{backgroundColor:'#b5315d'}} 
className={classes.button} onClick={handleVoteSubmit}    >
        Vote
      </Button>} 

        </Container>
    )
}
