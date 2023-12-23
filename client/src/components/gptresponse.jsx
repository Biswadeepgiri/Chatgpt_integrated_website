import React from 'react'
import './gptresponse.css';
const Gptresponse = (props) => {
    const res = props.response1.data;
  return (
    <div className='response'>
        {res}

    </div>
    
  );
}

export default Gptresponse