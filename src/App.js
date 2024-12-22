import logo from './logo.svg';
import './App.css';
import MainApp from './AllComp/MainApp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ViewComp from './AllComp/ViewComp';
import CreateComp from './AllComp/CreateComp';
import UpdateComp from './AllComp/UpdateComp';
import DeleteComp from './AllComp/DeleteComp';

function App() {
  return (
    <div className="App">
    <MainApp></MainApp>
    


    </div>
  );
}

export default App;
