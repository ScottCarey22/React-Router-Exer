import React from 'react';
import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import DogList from './DogList';
import FilterDogs from './FilterDogs';

function DogRoutes({ dogs }) {
    return (
        <Routes>
            <Route exact path="/dogs">
                <DogList dogs={dogs} />
            </Route>
            <Route path="/dogs/:name">
                <FilterDogs dogs={dogs} />
            </Route>
            <Navigate to="/dogs" />
        </Routes>
    );
}

export default DogRoutes;
