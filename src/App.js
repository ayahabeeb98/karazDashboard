import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter , Switch ,Redirect} from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";

import {RouteWrapper} from "./Routes/RouteWrapper";

const UsersData = React.lazy(() => import("./pages/UsersData"));
const MainDashboard = React.lazy(()=> import("./pages/MainDashboard"));

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Suspense fallback={<div>Loading...</div>}>
                  <RouteWrapper path="/" exact layout={DashboardLayout} component={MainDashboard}/>
                  <RouteWrapper path="/users-data" exact layout={DashboardLayout} component={UsersData}/>
              </Suspense>

              <Redirect to='/'/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;