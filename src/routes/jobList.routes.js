const express = require('express');
const router = express.Router();

const jobListController = require('../controllers/jobList.controller');

router.get('/get-job-list', jobListController.getJobList);


module.exports = router;
