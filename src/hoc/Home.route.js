import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Summary from "../summary/Summary";
import Incidents from "../incidents/Incidents";
import SUMMARY, { INCIDENTS } from "./route.constant";

export default function HomeRoutes() {
  return (
    <Router>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className={"nav-link"} to={SUMMARY}>
              Summary
            </Link>
          </li>
          <li className="nav-item">
            <Link className={"nav-link"} to={INCIDENTS}>
              Incidents
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path={SUMMARY}>
          <Summary />
        </Route>
        <Route path={INCIDENTS}>
          <Incidents />
        </Route>
      </Switch>
    </Router>
  );
}
