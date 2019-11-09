import React from 'react';
export default function PollVote(props){
    console.log(props);
    var pollid=props.location.state.poll;
    return(
        <div>poll vote component {pollid} </div>
    )
}