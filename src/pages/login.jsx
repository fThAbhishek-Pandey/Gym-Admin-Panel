import React, { useState , useContext} from "react";
import { adminContext }  from '../context/adminContext'
import { coachContext } from "../context/coachContext";
const Login = () => {
  const [mode, setMode] = useState('Admin')
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {handleLoginAdmin } = useContext(adminContext);
  const {handleLoginCoach} = useContext( coachContext);
  const handleLogin = (e) => {
    e.preventDefault();
    handleLoginAdmin(username,password);
  };
  const onhandleLoginCoach = (e)=>{
    e.preventDefault();
    handleLoginCoach(username,password)
  }
  const changeMode = ()=>{
    if(mode=== 'Admin') setMode('coach')
      else setMode('Admin')
  }
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="border p-8 bg-white rounded-md shadow-lg">
        {(
          <form onSubmit={mode ==='Admin' ?handleLogin:onhandleLoginCoach} className="space-y-4">
            <h2 className="text-2xl font-bold text-center"><span>{mode=== 'Admin'?"Admin ":"Coach " }</span> Panel</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              Login
            </button>
          </form>
        )}
        <button onClick={changeMode} >Login as <span>{mode === "Admin"?"coach": "admin"}</span></button>
      </div>
      
    </div>
  );
};

export default Login;

 