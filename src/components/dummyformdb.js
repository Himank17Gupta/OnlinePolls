import React from 'react';

function ProgressBar(props){
  console.log(props);
  var votes=props.votes;
  var tvotes=props.totalvotes;
  var color='#6cadeb';
  if(props.selected==props.option){votes+=1;color='#b5315d'}
    //'#c971a5'}
  var votepercentage=(votes/tvotes);
  votepercentage*=100;
 votepercentage= votepercentage.toFixed(2);

    return(

      <div id="myProgress"  style={{ width: '100%',backgroundColor:'#ddd', borderRadius:'22px', cursor:'pointer'}}  
      onClick={()=>{console.log(props.option);
      props.handleOptionSelect(props.option);
      }} >
   <div id="myBar" 
   style={{
    width: `${votepercentage}%`,
    height: '30px',
    backgroundColor: color,
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