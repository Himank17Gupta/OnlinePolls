import React from 'react';
import CreatePoll from './createPoll';
import PollList from './pollList';
function UserDashBoard(props){
    console.log(props);
    var userid=props.location.state.user;
    return(<div>
        Welcome {userid}
    <CreatePoll/>
    <PollList/>
    </div>);
}
export default UserDashBoard;