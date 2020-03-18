import React from 'react';

const Event = (
    { payload }
) => {
    return(
        <div className ="event">
            <h1>{payload.date}</h1>
            <h1>{payload.tipo}</h1>
            <h1>{payload.notes}</h1>
        </div>
    )
}

export default Event