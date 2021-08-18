import './App.css';
import { NavBar } from './NavBar/NavBar';
import { Header } from './Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Dashboard } from './Dashboard/Dashboard';
import { Interns } from './Intern/Interns';
import { NewIntern } from './Intern/NewIntern';
import { Instructors } from './Instructor/Instructors';
import { NewInstructor } from './Instructor/NewInstructor';
import { Users } from './User/Users';
import { NewUser } from './User/NewUser';
import { Trainings } from './Training/Trainings';
import { NewTraining } from './Training/NewTraining';

library.add(fas);

function App() {
	return (
		<div className="app flex flex-col flex-wrap">
			<Router>
				{/* static content */}
				<NavBar/>
				<Header/>

				{/* dynamic content */}
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/dashboard"/>}/>					
					<Route exact path="/dashboard" component={Dashboard}/>
					<Route exact path="/dashboard/stagiaire" component={Interns}/>
					<Route exact path="/dashboard/stagiaire/ajouter-stagiaire" component={NewIntern}/>
					<Route exact path="/dashboard/instructeur" component={Instructors}/>
					<Route exact path="/dashboard/instructeur/ajouter-instructeur" component={NewInstructor}/>
					<Route exact path="/dashboard/formation" component={Trainings}/>
					<Route exact path="/dashboard/formation/ajouter-formation" component={NewTraining}/>
					<Route exact path="/dashboard/utilisateur" component={Users}/>
					<Route exact path="/dashboard/utilisateur/ajouter-utilisateur" component={NewUser}/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
