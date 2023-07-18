const express = require('express');
const router = express.Router();

const jobDetailsController = require('../controllers/jobDetails.controllers');

router.get('/get-job-details', jobDetailsController.getJobsDetailsList);
module.exports = router;
