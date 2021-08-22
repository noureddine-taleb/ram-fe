import './App.css';
import { NavBar } from './NavBar/NavBar';
import { Header } from './Header/Header';
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

function App() {
	return (
		<div className="app flex flex-col flex-wrap">
			<Router>
				{/* static content */}
				<NavBar/>
				<Header/>

				{/* dynamic content */}
				<div className="relative px-7 top-[-30px]">
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
				</div>
			</Router>
		</div>
	);
}

export default App;
