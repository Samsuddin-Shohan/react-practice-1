import { useState } from 'react';
import './App.css';

function App() {
  
  return(
    <div>
      <Moblie></Moblie>;
      <Moblie></Moblie>;

      <Article></Article>;
      <Blog heading = 'Blog-1' author = 'Author-1'></Blog>;
      <Blog heading = 'Blog-2' author = 'Author-2'></Blog>;
      <Blog heading = 'Blog-3' author = 'Author-3'></Blog>;
      
    </div>
  );
  
}
function Moblie(){
  const [charge, setCharge] = useState(100)
  const handleCharging = ()=>{
    if(charge<=0){

    }
    const newCharge = charge-10;
    setCharge(newCharge);
  }
  return(
    <div className='container'>
    <h1>{charge}%</h1>

     <button onClick={handleCharging} className='button-style' disabled={charge<=0}>Discharge</button>
    </div>
  );
}

function Article(){
  const articleStyle={
    color: 'white',
    fontSize:'2rem',
    textAlign: 'left'
  };
  return (
    <div className='container'>
      <article className='blog' style={articleStyle} >
        <h2>This is the article</h2>
        <p style={{color: 'orangeRed', fontWeight: 'bolder'}}>Hello I am the article</p>
      </article>
    </div>
  );

}

function Blog(props){
  return(
    <div className='container'>
      <h1>Heading: {props.heading}</h1>
      <h4>Author: {props.author}</h4>
    </div>
  );
}

export default App;
