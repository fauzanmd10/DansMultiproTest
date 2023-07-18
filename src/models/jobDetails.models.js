const axios = require('axios');

const getJobsDetails = async (page =1) => {
  const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions/{ID}`;

    try {
        const limit = 10
        const response = await axios.get(url, {
            params: {
              page: page,
                per_page: limit
            },
          });
      
          const { data } = response;
          return data;
     } catch (error) {
    throw new Error('Error fetching data.');
  }
}

module.exports = {
    getJobsDetails,
};