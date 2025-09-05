const QUERY = {
    GET_STATES: 'CALL sp_States(null, null, null, null);',
    GET_STATE_BY_CODE: 'CALL sp_States(null, null, ?, null);',
    GET_STATE_BY_NAME: 'CALL sp_States(null, null, null, ?);',
    GET_STATE_BY_FIPS: 'CALL sp_States(null, ?, null, null);',
    GET_COUNTIES: 'CALL sp_Counties(null, null, null);',
    GET_COUNTIES_BY_STATE_ID: 'CALL sp_Counties(?, null, null);',
    GET_COUNTY_BY_FIPS: 'CALL sp_Counties(null, ?, null);',
    GET_COUNTY_BY_NAME: 'CALL sp_Counties(null, null, ?);'
};

export default QUERY;