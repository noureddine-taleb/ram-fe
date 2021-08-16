import './App.css';
import { NavBar } from './NavBar/NavBar';
import { Header } from './Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

function App() {
  return (
    <div className="app flex">
      <NavBar/>
      <Header></Header>
    </div>
  );
}

export default App;
