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
import { useState, useEffect, useContext } from 'react';
import AuthContext from './contexts/AuthContext';




const App = () => {
	const [userInfo, setUserInfo] = useState({isAuth:false, user: ''})
	useEffect(()=>{
		let user = localStorage;
		setUserInfo({isAuth:Boolean(user.first_name), user:{...user}})
	}, [])

	const onLoginCall = (displayName) => {
		let user = localStorage;
		let userId = localStorage.userId
		setUserInfo({isAuth:true, user:{...user}, displayName, userId})
	}
	const userLogout = () => {
		localStorage.clear()
		setUserInfo({isAuth:false, user:{}})
	}
	console.log(userInfo.user)
	return (
		<>
		<AuthContext.Provider value={'Hello'}>
		<Header {...userInfo} userLogout={userLogout} />
		<Switch>
				<Route path="/" exact component={Hero}/>
				<Route path="/classes" component={AllClasses}/>
				<Route path="/teachers" component={TeamAll}/>
				<Route path="/contact" component={Contact}/>
				<Route path="/details" component={ClassDetails}/>

				<Route path="/register" component={Register}/>()
				<Route path="/login">
					<Login onLoginCall={onLoginCall}/>
				</Route>

				<Route path="/profile/:userId" component={Profile} />
				<Route path="/create" component={CreateClass}/>

				<Route path="/custom">
					<h1>This is a custom page</h1>
					<p>Hello world</p>
				</Route>

				<Route path="*" component={ErrorPage}></Route>
				</Switch>
			<Footer />
			</AuthContext.Provider>
		</>
	)
}


export default App;