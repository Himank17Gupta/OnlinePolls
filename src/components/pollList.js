import React from 'react';
import VoteCard from './voteCard';
import { Container, GridList, GridListTile } from '@material-ui/core';

function PollList(props){
    var nums=['a','b','c','d','e'];
    console.log(props);
    return(
    <div>
        
    polllists here..<br/>

    <GridList cols={3} spacing={25} >
      {nums.map(n => {
        return (
          <GridListTile key={n} style={{height:'100%'}} >
            <VoteCard id={n} props={props} />
          </GridListTile>
        );
      })}
    </GridList>

    {/* {num.map(x=><VoteCard/>)}
    <VoteCard/> */}
    </div>);
}
export default PollList;