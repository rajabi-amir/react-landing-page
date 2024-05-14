import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    name: 'amir',
    walk() {
      console.log(this);
    }
  }
  const walk = person.walk.bind()
  let addUser = user => user.name;
  const arr = ['read', 'study'];
  const clone = [...arr];
  const ong = { name: 'amir' };
  const ef = { family: 'rajabi' };
  const sum = { ...ong, ...ef }

  class User{
    constructor(name){
      this.name=name;
    }
    addUser(){
      console.log('this is a test');
    }
  }
  class Student extends User{
    constructor(name,std_id){
      super(name)
      this.std_id=std_id;
    }
    pickCourse(){

    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
