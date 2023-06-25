import React from 'react';

const Break = ({time}) => {
    console.log(time);
    return (
        <div className="stat place-items-center">
           <button className="btn bg-white btn-circle hover:btn-primary">{time}s</button>
        </div>
    );
};

export default Break;