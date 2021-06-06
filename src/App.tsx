import React, { lazy } from 'react'
import {
  Route
} from "react-router-dom";


const Portfolio = lazy(() => import('./views/portfolio/layout/portfolio-layout'))
const Admin = lazy(() => import('./views/admin/layout/admin-layout'))
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Portfolio} />
      <Route exact path="/admin" component={Admin} />
    </div>
  );
}

export default App;
