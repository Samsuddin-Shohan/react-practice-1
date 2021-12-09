import logo from './logo.svg';
import './App.css';

function App() {
  const articleStyle={
    color: 'white',
    fontSize:'2rem',
    textAlign: 'left'


  }
  return (
    <div className='container'>
      <article className='blog' style={articleStyle} >
        <h2>This is the article</h2>
        <p style={{color: 'orangeRed', fontWeight: 'bolder'}}>Hello I am the article</p>
      </article>
    </div>
  );
}

export default App;
