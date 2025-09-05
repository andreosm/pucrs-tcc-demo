import database from '../config/dbconfig.js';
import QUERY from '../query/geocode.query.js'; 

class County {
  constructor(name = null, parent = null, fips = null) {
    this.name = name;
    this.parent = parent;
    this.fips = fips;

  }

  async get(propertyName = null, propertyValue = null) {
    let queryName = '';

    switch (propertyName) {
      case 'name':
        queryName = QUERY.GET_COUNTY_BY_NAME;
        break;
      case 'parent':
        queryName = QUERY.GET_COUNTIES_BY_STATE_ID;
        break;
      case 'fips':
        queryName = QUERY.GET_COUNTY_BY_FIPS;
        break;
      default:
        queryName = QUERY.GET_COUNTIES;
    }

    try {
      const [rows] = await database.query(queryName, propertyName ? [propertyValue] : []);
      return rows[0] && rows[0].length > 0 ? rows[0] : [];
    } catch (err) {
      console.error(`Error fetching counties${propertyName ? " by " + propertyName : ""}:`, err.message);
      throw new Error(`Database error while fetching counties${propertyName ? " by " + propertyName : ""}`);
    }
      
  }

  /**
   * Get all states (invokes stored procedure `sp_GetStates`)
   */
  // async get() {
  //   try {
  //     const [rows] = await database.query(QUERY.GET_STATES);
  //     return rows[0] && rows[0].length > 0 ? rows[0] : [];
  //   } catch (err) {
  //     console.error("Error fetching states:", err.message);
  //     throw new Error("Database error while fetching states");
  //   }
  // }

//     async getByName(name) {
//     try {
//       const [rows] = await database.query(QUERY.GET_STATE_BY_NAME, [code]);
//       return rows[0] && rows[0].length > 0 ? rows[0] : [];
//     } catch (err) {
//       console.error("Error fetching state by code:", err.message);
//       throw new Error("Database error while fetching state by name");
//     }
// }
    
  /**
   * Get state by its code (invokes stored procedure `sp_GetStateByCode`)
   */
  // async getByCode(code) {
  //   try {
  //     const [rows] = await database.query(QUERY.GET_STATE_BY_CODE, [code]);
  //     return rows[0] && rows[0].length > 0 ? rows[0] : [];
  //   } catch (err) {
  //     console.error("Error fetching state by code:", err.message);
  //     throw new Error("Database error while fetching state by code");
  //   }
  // }

  /**
   * Get state by its FIPS (invokes stored procedure `sp_GetStateByFips`)
   */
  // async getByFips(fips) {
  //   try {
  //     const [rows] = await database.query(QUERY.GET_STATE_BY_FIPS, [fips]);
  //     return rows[0] && rows[0].length > 0 ? rows[0] : [];
  //   } catch (err) {
  //     console.error("Error fetching state by FIPS:", err.message);
  //     throw new Error("Database error while fetching state by FIPS");
  //   }
  // }
}

export default County;