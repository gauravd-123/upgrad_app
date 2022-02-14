import React from 'react';

const StrengthCriteria = function(){
    return(
        <div style={{textAlign:'left', background:'#FF2226', color:'#4AF1F2', font:'caption' }}>
            <br/>
            <p>Minimum 8 characters long</p>
            <p>Atleast 1 special character</p>
            <p>Atleast 1 number</p>
            <p>Atleast 1 capital letter</p>
        
        </div>
        )
}

export default StrengthCriteria;