
import './App.css';
import {useState} from 'react';

/* const initialState ={
  amount:0,
  description:" ",
  date:""
}; */

function App() {
  const [form, setform] = useState({
    amount:0,
    description:" ",
    date:""
  });

  function handleChange(e){
 
    const data =setform({...form,[e.target.name]:e.target.value});
    //console.log(data);
  }
  async function handleSubmit(e){
    e.preventDefault();
    const res =await fetch("http://localhost:4000/transaction",{
      method:"POST",
      body:JSON.stringify(form),
      headers :{
        'content-type':"application/json",
      }})
       const data =await res.json();
      console.log(data);

  }
  
  
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input type="number" name="amount" onChange={handleChange} value={form.amount} />
        <input type="text" name="description" onChange={handleChange} value={form.description} />
        <input type="Date" name="date" onChange={handleChange} value={form.date} />
        <button type="submit">Submit</button>


      </form>
    </div>
  );
}

export default App;
