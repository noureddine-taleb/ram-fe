import './App.css';
import { NavBar } from './NavBar/NavBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

function App() {
  return (
    <div className="app">
      <NavBar/>
    </div>
  );
}

export default App;
