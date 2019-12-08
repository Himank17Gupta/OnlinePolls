import React from 'react';
export default function Profile(props){
console.log(props);
return(<div>
    <h1>welcome to your profile {props.location.state.userId} san.</h1>

    <p>under construction...!</p>
    </div>)

}