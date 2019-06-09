import React from 'react';
import SmartLogin from './view/SmartLogin';
import SmartLoginGuide from './view/SmartLoginGuide';
import SmartListAllTours from './view/SmartListAllTours';
import SmartFilterTours from './view/SmartFilterTours';
import SmartFilteredTours from './view/SmartFilteredTours';
import SmartCreateTour from './view/SmartCreateTour';
import SmartChooseOpTours from './view/SmartChooseOpTours';
import SmartChooseOpToursTourist from './view/SmartChooseOpToursTourist';

import './App.css';

import { HashRouter, Switch, Route} from "react-router-dom";


const App = () =>(
<div className="App">
        <HashRouter>
          <Switch>
            <Route exact={true} component={SmartLogin} path="/" />
            <Route exact={true} component={SmartLoginGuide} path="/" />
            <Route exact={true} component={SmartChooseOpTours} path="/tours-ops-guide" />
            <Route exact={true} component={SmartChooseOpToursTourist} path="/tours-ops-tourist" />
            <Route exact={true} component={SmartCreateTour} path="/create-tour" />
            <Route exact={true} component={SmartListAllTours} path="/list-tours"/>
            <Route exact={true} component={SmartListAllTours} path="/list-tours/:index" />
            <Route exact={true} component={SmartFilterTours} path="/filter-tours" />
            <Route exact={true} component={SmartFilteredTours} path="/filter-tours-yes" />
          </Switch>
        </HashRouter>     
</div>
);


export default App;
