
import './App.css';
import Hello from './components/Welcom';
import Greet from './components/Greet';
import Counter from './components/Counter'
import ParentComp from './components/ParentComp';
import Counter2 from './components/Counter2';
import Stylecomp from './components/Stylecomp';
import Forms from './components/Forms';
import RefDemo from './components/RefDemo';
import ParentClass from './components/ParentClass';
import Newcounter from './components/Newcounter';
import HowerCounter from './components/HowerCounter';
import Welcom from './components/Welcom';
import ErrorBoundry from './components/ErrorBoundry';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      {/* <ParentComp/> */}
      {/* <Counter2/> */}
      {/* <Stylecomp/> */}
      {/* <Forms/> */}
      {/* <RefDemo/> */}
      {/* <ParentClass/> */}
      {/* <Newcounter/>
      <HowerCounter/> */}
      {/* <ErrorBoundry>
      <Welcom name='ujwal'/>
      </ErrorBoundry>
      <ErrorBoundry>
      <Welcom name='Madhu'/>
      </ErrorBoundry> */}
      <ToDoList/>
     

    </div>
  );
}

export default App;
