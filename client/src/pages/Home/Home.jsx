import React from 'react'
import './Home.scss'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import LoaderContext from '../../context/LoaderContext'


const Home = () => {

  // use loader context 
  const {loaderDispatch} = useContext(LoaderContext)

  // use context
  const {authdispatch, user} = useContext(AuthContext);
  // console.log(authstate.user);
  // console.log(user);

  //use navigate
  const navigate = useNavigate();


  //handle user logout
  const handleUserLogout = (e)  => {
    e.preventDefault();

    Cookies.remove('token');
    Cookies.remove('user');

    authdispatch({type : 'USER_LOGOUT'})

    navigate('/login')
    loaderDispatch({type : "LOADER_START"})

  }


  return (
    <>
      <div>Home</div>
    </>
  )
}

export default Home