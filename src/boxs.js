import React, { useState } from 'react';

function Boxs(props) {

    // const changeText({props.item.missionDesc}){

    // };

    return (
        <div >
            {/* {props.item}<br /><br /> */}

            <ol className="list-group list-group">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">{
                        props.item.done ?
                            <div className="fw-bold">{props.item.missionDesc}</div> :
                            <div className="text-decoration-line-through">{props.item.missionDesc}</div>
                    }

                        {/* <p className="text-decoration-line-through">This text has a line going through it.</p> */}

                    </div>
                    <button className="badge bg-primary rounded-pill" onClick={props.doneOnClick} >
                        {props.item.done? "בוצע":"רענן"} </button>
                    {/* <button className="badge bg-primary rounded-pill" onClick={props.doneOnClick} >רענן</button> */}
                    <button className="badge bg-primary rounded-pill" onClick={props.delitOnClick} >מחק</button>
                </li><br />
            </ol>
        </div>
    );

};
export default Boxs;