import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Analyze from './components/Analyze';

function App(){
  return(
    <>  
        <Router>
          <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route path="/analyze" element ={<Analyze/>}/>
         </Routes>
       </Router>

    </>
   

  );
}

export default App;