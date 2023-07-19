const express = require('express');
const router = express.Router();

const jobDetailsController = require('../controllers/jobDetails.controllers');
const authenticate = require('../middleware/authentication');

router.get('/get-job-details', authenticate,jobDetailsController.getJobsDetailsList);
module.exports = router;
