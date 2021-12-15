import { Route, Switch, useHistory } from 'react-router-dom';
import Header from "./components/HeaderNav/HeaderNav";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import AllClasses from './components/Classes/AllClasses/AllClasses'
import TeamAll from './components/Team/TeamAll/TeamAll';
import Register from './components/User/Register/Register'
import Login from './components/User/Login/Login';
import Profile from './components/User/Profile/Profile';
import ErrorPage from './components/ErrorPage/ErrorPage';
import CreateClass from './components/Classes/CreateClass/CreateClass';
import ClassDetails from './components/Classes/ClassDetails/ClassDetails';
import { useState, useEffect, useContext } from 'react';
import AuthContext from './contexts/AuthContext';
import EditClass from './components/Classes/EditClass/EditClass';
import DeleteClass from './components/Classes/Delete/DeleteClass';
import BookContext from './contexts/BookContext';





const App = () => {
	const [userInfo, setUserInfo] = useState({isAuth:false, user: ''})
	const [bookingInfo, setBookingInfo] = useState([])
	const localStorageUser = JSON.parse(localStorage.getItem('user'))
	let history = useHistory();

	console.log('App: ', userInfo)

	console.log('App says: ', localStorageUser)
	const userLogout = (e) => {
		e.preventDefault()
		localStorage.clear()
		exposeUserInfo({})
		changeBookingInfo([])
		history.push('/')
	}
	const exposeUserInfo = (user) => {
		setUserInfo({isAuth:Boolean(user.first_name || user.token), user:{...user}})
	}
	const changeBookingInfo = (info) => {
		setBookingInfo(info)
	}
	return (
		<>
		<AuthContext.Provider value={{userInfo, exposeUserInfo }}>
			<BookContext.Provider value={{bookingInfo, changeBookingInfo}}>
		<Header {...userInfo} userLogout={userLogout} />
		<Switch>
				<Route path="/" exact component={Hero}/>
				<Route path="/classes" component={AllClasses}/>
				<Route path="/teachers" component={TeamAll}/>
				<Route path="/contact" component={Contact}/>
				<Route path="/details/:cardId" component={ClassDetails}/>
				<Route path="/edit/:classId" component={EditClass}/>
				<Route path="/delete/:classId" component={DeleteClass}/>

				<Route path="/register" component={Register}/>()
				<Route path="/login">
					<Login/>
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
			</BookContext.Provider>
			</AuthContext.Provider>
		</>
	)
}


export default App;