import Response from '../domain/response.js';
import HttpStatus from '../domain/httpstatus.js';
import State from '../models/states.model.js';
import County from '../models/counties.model.js';

function httpstatus(states, res) {
 
        if (states == null) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR.code).json(
                new Response(
                    HttpStatus.INTERNAL_SERVER_ERROR.code,
                    HttpStatus.INTERNAL_SERVER_ERROR.status,
                    'Unexpected server error'
                )
            )
    };
     
        if (states.length === 0) {
                return res.status(HttpStatus.NOT_FOUND.code).json(
                    new Response(
                        HttpStatus.NOT_FOUND.code,
                        HttpStatus.NOT_FOUND.status,
                        'No states found'
                    )
                );
        };

        return res.status(HttpStatus.OK.code).json(
                new Response(
                    HttpStatus.OK.code,
                    HttpStatus.OK.status,
                    'States retrieved successfully',
                    states)
        );
    
};

export const getStates = async (req, res) => {
    const state = new State();
    try {
        const states = await state.get();

        return httpstatus(states, res);       
        
    }
    catch (error) {
        console.error('Unexpected error:', error);
        return httpstatus(null, res);
        
    }
};

export const getStateByCode = async (req, res) => {
    const state = new State();
    try {
        const states = await state.get("code", req.params.code);
        
        return httpstatus(states, res);
    }
     catch (error) {
        console.error('Unexpected error:', error);
        return httpstatus(null, res);
        
    }
}

export const getStateByFips = async (req, res) => {
    const state = new State();
    try {
        const states = await state.get("fips", req.params.fips);
        
        return httpstatus(states, res);
    }
     catch (error) {
        console.error('Unexpected error:', error);
        return httpstatus(null, res);
        
    }
}

export const getStateByName = async (req, res) => {
    const state = new State();
    try {
        const states = await state.get("name", req.params.name);
        
        return httpstatus(states, res);
    }
     catch (error) {
        console.error('Unexpected error:', error);
        return httpstatus(null, res);
        
    }
}

export const getCounties = async (req, res) => {
    const county = new County();
    try {
        const counties = await county.get();

        return httpstatus(counties, res);       
        
    }
    catch (error) {
        console.error('Unexpected error:', error);
        return httpstatus(null, res);
        
    }
};

export const getCountiesByStateId = async (req, res) => {
    const county = new County();
    try {
        const counties = await county.get("parent", req.params.id);
        
        return httpstatus(counties, res);
    }
     catch (error) {
        console.error('Unexpected error:', error);
        return httpstatus(null, res);
        
    }
}

export const getCountyByFips = async (req, res) => {
    const county = new County();
    try {
        const counties = await county.get("fips", req.params.fips);
        
        return httpstatus(counties, res);
    }
     catch (error) {
        console.error('Unexpected error:', error);
        return httpstatus(null, res);
        
    }
}

export const getCountyByName = async (req, res) => {
    const county = new County();
    try {
        const counties = await county.get("name", req.params.name);
        
        return httpstatus(counties, res);
    }
     catch (error) {
        console.error('Unexpected error:', error);
        return httpstatus(null, res);
        
    }
}