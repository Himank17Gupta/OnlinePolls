import React from 'react';

function ProgressBar(props){
  console.log(props);
  var votepercentage=(props.votes/props.totalvotes);
  votepercentage*=100;
 votepercentage= votepercentage.toFixed(2);
    return(

      <div id="myProgress"  style={{ width: '100%',backgroundColor:'#ddd', borderRadius:'22px', cursor:'pointer'}}  onClick={()=>{console.log(props.option)}} >
   <div id="myBar" 
   style={{
    width: `${votepercentage}%`,
    height: '30px',
    backgroundColor: '#6cadeb',
    //'#eb4034',
    //'#4CAF50',
    textAlign: 'center',
    lineHeight: '30px',
    color: 'white',
    borderRadius:'20px'
    }}>
     {votepercentage}%
    </div>
    </div>
    )}
export default ProgressBar;