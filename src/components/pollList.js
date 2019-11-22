import React from 'react';
import VoteCard from './voteCard';
import { Container, GridList, GridListTile } from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
class PollList extends React.Component{
  constructor(props){
   super(props);
    this.nums=['a','b','c','d','e'];
    this.polls=[];
    this.state={pollArray:[],progress:true};
    this.prp=props;
    console.log(props);
  }

componentDidMount(){
  console.log('compdidmountcalled');
axios.post("https://pollsmernrestapi.herokuapp.com/getListofPolls",{}).then((res)=>{
  console.log(res);
  this.polls=res.data.filter(a=>a);
this.setState({...this.state,pollArray:this.polls,progress:false});
  //  console.log(state.pollArray)
console.log(this.state.pollArray);
}).catch(err=>console.log(err))

}


  render(){
    console.log(this.state.pollArray);

    var columns;
    console.log(window.innerWidth);
if(window.innerWidth<1000&&window.innerWidth>500){columns=2}
if(window.innerWidth<500){columns=1}
else columns=3;
    return(
    <div>
       { this.state.progress?(<div>
        <LinearProgress  color="secondary" />
        </div>):(<></>)}
      
    
    <br/>

    <GridList cols={columns} spacing={25} >
      {/* {this.nums.map(n => {
        return (
          <GridListTile key={n} style={{height:'100%'}} >
            <VoteCard id={n} props={this.prp} />
          </GridListTile>
        );
      })} */}

{this.state.pollArray.map(poll => {
        return (
          <GridListTile key={poll._id} style={{height:'100%'}} >
            <VoteCard id={poll._id} poll={poll} props={this.prp} />
          </GridListTile>
        );
      })}

    </GridList>

    {/* {num.map(x=><VoteCard/>)}
    <VoteCard/> */}
    </div>);
}
}
export default PollList;
