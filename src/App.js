import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";

import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Create from "./pages/create/Create";
import Project from "./pages/project/Project";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import OnlineUsers from "./components/OnlineUsers/OnlineUsers";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (<BrowserRouter>
        {user && <Sidebar />}
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to="/login" />}
              {user && <Dashboard />}
            </Route>
            <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <Login />}
            </Route>
            <Route path="/signup">
              {user && <Redirect to="/login" />}
              {!user && <Signup />}
            </Route>
            <Route path="/create">
              {!user && <Redirect to="/login" />}
              {user && <Create />}
            </Route>
            <Route path="/project/:id">
              {!user && <Redirect to="/login" />}
              {user && <Project />}
            </Route>
          </Switch>
        </div>
        {user && <OnlineUsers/>}
      </BrowserRouter>)}
    </div>
  );
}

export default App;
