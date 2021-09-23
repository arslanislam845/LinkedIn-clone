import React,{useEffect}from "react";
import "./App.css";
import Header from "./components/Header";
import Siderbar from "./components/Siderbar";
import Feed from "./components/Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./server/firestore";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        console.log(userAuth)
        dispatch(
          login({
            Email: userAuth.email,
            FullName: userAuth.displayName,
            ProfileURL: userAuth.photoURL,
            
          })
        )
      } else {
        // user is not logged in
        dispatch(logout());
      }
      
    })
  },[]);
  return (
    <>
      {!user ? (
        <Login />
      ) : (

    <div className="app">
      <Header />
      <div className="app_body">
        {/* SideBar */}
        <Siderbar />
        <Feed />
      </div>
    </div>
  )
}
  </>
);
}
export default App;
