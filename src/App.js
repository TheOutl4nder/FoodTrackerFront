import "./App.css";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import RestaurantPage from "./pages/RestaurantPage";
import DishPage from "./pages/DishPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <MainPage></MainPage>
        </Route>
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
      </Switch>
    </Layout>
  );
}

export default App;
