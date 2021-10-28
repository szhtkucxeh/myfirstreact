import './Myprops.css';
import React, { useState } from 'react';
import Boxs from './boxs'
// import 'bootstrap/dist/css/bootstrap.min.css';


// const list = [];
function Myprops(props) {

    const [value, setValue] = useState("");
    const [list, setList] = useState([]);
    // const [list, splisName] = useState([]);

    //  listItems(list);
    const listItems = list.map((item, index) => {
        console.log(item);

        return (
            
            <Boxs item={item} doneOnClick={() => doneOnClick(index)} delitOnClick={()=>delitOnClick(index)} />
        )
    }
    );
   var keyEnter = (e)=>{
if (e.key === 'Enter') {
    {saveName()}
    console.log('do validate');
  }
    };
    const handleChange = (event) => {
        setValue(event.target.value);

    }


    const saveName = () => {
        let mission = {
            missionDesc: value,
            done: true,
        }
        setList(state => [...state, mission])
        setValue("");
       
    }

    
    const doneOnClick = (index) => {

    

        const updatedAreas = [...list];

        updatedAreas[index].done = !updatedAreas[index].done;

        setList(updatedAreas)


    }
    
    const delitOnClick = (index) => {



        const updatedAreasd = [...list];
        updatedAreasd.splice(index,1)

        setList(updatedAreasd)


    }
      
    return (
        <div class="container">
            {props.text}<br /><br />

            <div className="input-group mb-3 " >
                <input type="text" className="form-control" value={value} placeholder="First name" onKeyDown={keyEnter} onChange={handleChange} aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" onClick={saveName} type="button" id="button-addon2"  >הוסף</button>
            </div><br /><br />

            {/* <ol class="list-group list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        
                    </div>
                    <span class="badge bg-primary rounded-pill">14</span>
                </li>
            </ol> */}
            <div class="fw-bold">{listItems}</div>
            {/* htmlFor */}

            {/* <Boxs text="קשר אב לבן"/><br /><br /> */}
            {/* <div id="c"> */}

            {/* <li>{value}</li><br /><br /> */}
            {/* <ul>{value}</ul> */}
            {/* <ul id="d">{listItems}</ul> */}
            {/* <li>{ggg.forEach(function(x,index,sss))}</li><br /><br /></div> */}
        </div>

        // </div>

    );
}

export default Myprops;
