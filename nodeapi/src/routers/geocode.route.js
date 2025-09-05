import express from 'express';
import {
    getStates, getStateByCode, getStateByFips, getStateByName,
    getCounties, getCountiesByStateId, getCountyByFips, getCountyByName
} from '../controller/geocode.controller.js';

const geocodeRouter = express.Router();

geocodeRouter.route('/states')
    .get(getStates);

geocodeRouter.route('/states/code/:code')
    .get(getStateByCode); 

geocodeRouter.route('/states/fips/:fips')
    .get(getStateByFips); 

geocodeRouter.route('/states/name/:name')
    .get(getStateByName); 


geocodeRouter.route('/counties')
    .get(getCounties);

geocodeRouter.route('/counties/parent/:id')
    .get(getCountiesByStateId); 

geocodeRouter.route('/counties/fips/:fips')
    .get(getCountyByFips); 

geocodeRouter.route('/counties/name/:name')
    .get(getCountyByName);


export default geocodeRouter;