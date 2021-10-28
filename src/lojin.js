import React, { useState } from 'react';

import Myprops from './myprops'
import data from './data'
import { Redirect } from 'react-router-dom';
console.log(data);


var uzers=[
    {"value":"avi" ,"password":"123"},
    {"value":"dani" ,"password":"456"},
    {"value":"moshe" ,"password":"789"},
    {"value":"gad" ,"password":"741"},
   {"value" : "ben" ,"password":"852"}];
//    const myJSON = JSON.stringify(uzers);

function Lojin(props) {
    const [value, setValue] = useState(false);
    const [password, setPassword] = useState(false);
    const [show, setShow] = useState(false);


  
    const checkPassword = () => {
        console.log("eeeeeee");
        uzers.forEach(function(uzer,index){

            if (value === uzer.value && password === uzer.password
                ) {
                    console.log("kkkkkk");
                    
                    setShow(true)
                    console.log("sssss");
                    // console.log(uzers.value);
                    
                }
                console.log(uzer.value );
                });
        // alert('')
    }
      return (

        <div className="container d-flex justify-content-center">
            <div className="card text-center width: 18rem;" >
                <br />
                <div className="card-body ">
                    <br />
                    <h5 className="card-title">ברוכים הבאים</h5>
                    <p className="card-text">כדי להיכנס עליך להכניס שם וסיממא </p>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">הכנס שם מלא</label>
                        <input type="texs" className="form-control" onChange={(e) => setValue(e.target.value)}
                            id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)}
                            id="exampleInputPassword1" />
                    </div>
                    {/* <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">בדוק אותי</label>
                        </div> */}
                    <button onClick={checkPassword} className="btn btn-primary">שלח</button>

                    {show ? <Redirect to="/home" /> : null}<br/>
                    כרגע השם הוא avi <br/>והסיסמא הוא 5555
                </div>
            </div>
        </div>
    );
};
export default Lojin;
