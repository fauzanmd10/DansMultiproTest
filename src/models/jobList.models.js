const axios = require('axios');

const getJobs = async (page =1,description,location,full_time) => {
  const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json`;

    try {
        const limit = 10
        const response = await axios.get(url, {
            params: {
              page: page,
              per_page: limit,
              description : description || undefined,
              location: location || undefined,
              full_time: full_time|| undefined
            },
          });
      
          const { data } = response;
          return data;
     } catch (error) {
    throw new Error('Error fetching data.');
  }
}

module.exports = {
  getJobs,
};