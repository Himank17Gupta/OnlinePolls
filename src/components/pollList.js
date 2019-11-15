import React from 'react';
import VoteCard from './voteCard';
import { Container, GridList, GridListTile } from '@material-ui/core';
import axios from 'axios';
class PollList extends React.Component{
  constructor(props){
   super(props);
    this.nums=['a','b','c','d','e'];
    this.polls=[];
    this.state={pollArray:[]};
    this.prp=props;
    console.log(props);
  }

componentDidMount(){
  console.log('compdidmountcalled');
axios.post("https://pollsmernrestapi.herokuapp.com/getListofPolls",{}).then((res)=>{
  console.log(res);
  this.polls=res.data.filter(a=>a);
this.setState({...this.state,pollArray:this.polls});
  //  console.log(state.pollArray)
console.log(this.state.pollArray);
}).catch(err=>console.log(err))

}


  render(){
    console.log(this.state.pollArray);
    return(
    <div>
        
    polllists here ->..loader..->}<br/>

    <GridList cols={3} spacing={25} >
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