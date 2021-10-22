import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import RestaurantPage from "./pages/RestaurantPage";
import DishPage from "./pages/DishPage";
import Layout from "./components/Layout/Layout";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        
          <Route path="/" exact>
            {!authCtx.isLoggedIn && <MainPage></MainPage>}
            {authCtx.isLoggedIn && <Redirect to="/home"></Redirect>}
          </Route>
        
        {authCtx.isLoggedIn && (
          <>
            <Route path="/home">
              <HomePage></HomePage>
            </Route>
            <Route path="/profile">
              <ProfilePage></ProfilePage>
            </Route>
            <Route path="/restaurant">
              <RestaurantPage></RestaurantPage>
            </Route>
            <Route path="/dish">
              <DishPage></DishPage>
            </Route>
          </>
        )}
        <Route>
        {!authCtx.isLoggedIn && <Redirect to="/"></Redirect>}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
