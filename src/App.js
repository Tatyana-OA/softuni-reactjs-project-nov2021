import { Route, Switch, Redirect } from 'react-router-dom';
import Header from "./components/HeaderNav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AllClasses from './components/Classes/AllClasses';
import TeamAll from './components/Team/TeamAll';
import Register from './components/User/Register'
import Login from './components/User/Login';
import Profile from './components/User/Profile';
import ErrorPage from './components/ErrorPage';
import CreateClass from './components/Classes/CreateClass';
import ClassDetails from './components/Classes/ClassDetails';


const App = () => {
	return (
		<>
		<Header />
		<Switch>
				<Route path="/" exact component={Hero}/>
				<Route path="/classes" component={AllClasses}/>
				<Route path="/teachers" component={TeamAll}/>
				<Route path="/contact" component={Contact}/>
				<Route path="/details" component={ClassDetails}/>

				<Route path="/register" component={Register}/>
				<Route path="/login" component={Login}/>

				<Route path="/profile" component={Profile}/>
				<Route path="/create" component={CreateClass}/>
				<Route path="/logout" render={
					() => (<Redirect to="/"/>)
				}/>

				{/* Example for props (children) in between the route */}
				<Route path="/custom">
					<h1>This is a custom page</h1>
					<p>Hello world</p>
				</Route>

				<Route path="*" component={ErrorPage}></Route>
				</Switch>
			<Footer />
		</>
	)
}


export default App;