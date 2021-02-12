import './index1.scss';
import React from 'react';
function App() {
  
  const day = ['sun','mon','tue','wen','thu','fri','sat'];
  function ListItem(props) {    ///display days row
    const value = props.value;
    const i=props.index
    const colPos=i+1
      return (
        <div className={`ms-grid-col${colPos} ms-grid-row2`}>
          {value}
        </div>
      );
  }
  const day2= (new Array(42)).fill(null).map((v,i)=>(v,i+1))

  function ListItem2(props) {     ////display date rows
    const value2 = props.value2;
    const rowPos=2+Math.ceil(value2/7) //1,2,3,4,...7
    const colPos=value2-((rowPos-3)*7) //1,2,3,4...7,1,2,3..7,1,2....7
    return (
      <div className={`ms-grid-col${colPos} ms-grid-row${rowPos}`}>
        {value2}
      </div>
    );
  }
  return (
    <div class="Calendar">
      <button className="ms-grid-col1 ms-grid-row1">Prev</button>
      <h2 class="ms-grid-col2 ms-grid-row1 title">February</h2>  
      <button className="ms-grid-col7 ms-grid-row1">Next</button>

              {day.map((day,i) =>
        <ListItem value={day} index={i}/> 
      )}
              {day2.map((day2) =>
        <ListItem2 value2={day2} />
      )}
    </div>
  );
}

export default App;
