import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TodoContainer from './TodoContainer'; 
import Counter from './components/Counter';
import { SplitScreen } from './components/SplitScreen';
import { RegularList } from './RegularList';
import { SmallPersonListItem } from './SmallPersonListItem';
import { LargePersonListItem } from './LargePersonListItem';
import { Modal } from './Modal';
/*
function App() {
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
        test1
      </header>
    </div>
  );
}
*/
/*
function App(){
    return (<div>
      <Header/>
      <h1>Success</h1>
      <TodoContainer/>
      <div>
      <Counter />
    </div>
      <hr/>
      <Footer/>
    </div>)
};
*/

const LeftHandComponent=()=>{
  return <h1 style={{backgroundColor:'green'}}>left hand component</h1>;
}

const RightHandComponent=()=>{
  return <h1 style={{backgroundColor:'red'}}>right hand component</h1>;
}
function App(){
  const people = [{
    name: 'rajan',
    age: 48,
    haircolor: 'brown',
    hobbies: ['dance','sing', 'music']

  },
  {
    name: 'sohan',
    age: 55,
    haircolor: 'black',
    hobbies: ['chess', 'swim', 'golf']
  }

];
/*
  return(<SplitScreen 
    left={LeftHandComponent} 
    right={RightHandComponent}
    leftWeight = {1}
    rightWeight = {3}
    
    />
  
  );
  */
 return(<>
 <Modal>
 <RegularList 
  items={people} 
  resourceName="person" 
  itemComponent={LargePersonListItem} 
/>
 </Modal>
 
 </>
);
}
export default App;
