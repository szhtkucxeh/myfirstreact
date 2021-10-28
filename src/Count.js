import React, { useState, useEffect} from 'react';


function MyCount(props) {
 
 const [count, setCount] = useState(0);   
 const [count2, setCount2] = useState(0);   
 const [count3, setCount3] = useState(0); 
 const [str, setStr] = useState(''); 
 const [str2, setStr2] = useState('');
 const [str3, setStr3] = useState('');

 useEffect(() => {
    console.log('useEffect first time');
   
}, []);

 useEffect(() => {
     console.log('useEffect');
    //  setStr(`לחצת ${count} פעמים על count`)
 }, [count]);
    
 useEffect(() => {
    console.log('useEffect 2');
    // setStr2(`לחצת ${count2} פעמים על count2`)
},
//   [count, count2, count3]
  );

// useEffect(() => {
//     console.log('useEffect 3');
//     setStr3(`לחצת ${count3} פעמים על count3`)
// },  [count3]);
console.log('useEffect 3');
return(
<div className="container d-flex justify-content-center">
    <div >
      <p>{str}</p>
      <p>{str2}</p>
      <p>{str3}</p>
      </div>
      <button className="btn btn-primary" onClick={() => {
          setCount(count + 1)

          }}>
        לחץ עליי
      </button>
      <button className="btn btn-primary" onClick={() => {
          setCount2(count2 + 1)
          
          }}>
       2 לחץ עליי
      </button>
      <button className="btn btn-primary" onClick={() => {
          setCount3(count3 + 1)
          
          }}>
       3 לחץ עליי
      </button>
    </div>   
     );
};

export default MyCount;
