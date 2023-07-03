import { useState } from 'react';
import data from './data'
const App = () => {
  const [newData , setNewdata] = useState(data);
  const [count, setCount] = useState(newData.length);
  const clearEvent = ()=>{
    setNewdata([]);
    setCount(0);
  }


  return <div className='container'>
    <h3>{count} Birthdays Today</h3>
    {newData.map((value)=>{
      return (
        <div className='person' key={value.id}>
          <img src={value.image} alt={value.name} />
          <h4>{value.name}</h4>
          <p>{`${value.age} Years`}</p>

        </div>
      );
    })}
    <button className='btn' type='button' onClick={clearEvent}>clear all</button>
  </div>;
};
export default App;
