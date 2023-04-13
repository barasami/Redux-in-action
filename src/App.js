import './App.css';

function App() {
  return (
    <div className="App">
      <form className='form'>
        <div>
          <input type='number' placeholder='Enter numb1'></input>
        </div>
        <div>
          <input type='number' placeholder='Enter numb2'></input>
        </div>
        <div>
          <button>Add</button>
          <button>Subtract</button>
          <button>Multiply</button>
        </div>
      </form>
    </div>
  );
}

export default App;
