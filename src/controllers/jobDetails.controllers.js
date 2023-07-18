const {  getJobsDetails } = require('../models/jobDetails.models');
// const { renderJobsData } = require('../views/jobsView');
const getJobsDetailsList = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = req.query.limit  || 10;
        const ID = req.query.ID || '';

        const jobs = await getJobsDetails(page, limit,ID);
        const totalPages = Math.ceil(jobs.length / limit);
    
        return res.status(200).json({
          data: jobs,
          currentPage: page,
        });
    }
    
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    };

   
}
module.exports = {
    getJobsDetailsList
}