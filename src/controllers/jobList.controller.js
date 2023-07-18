const {  getJobs } = require('../models/jobList.models');
// const { renderJobsData } = require('../views/jobsView');
const getJobList = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = req.query.limit  || 10;
        const description = req.query.description || '';
        const location = req.query.location || '';
        const full_time = req.query.full_time || '';

        const jobs = await getJobs(page, limit,description,location,full_time);
        const totalPages = Math.ceil(jobs.length / limit);
    
        return res.status(200).json({
          data: jobs.slice(0, limit),
          currentPage: page,
          totalPages: totalPages,
        });
    }
    
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    };

   
}
module.exports = {
    getJobList
}