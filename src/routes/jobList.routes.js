const express = require('express');
const router = express.Router();

const jobListController = require('../controllers/jobList.controller');
const authenticate = require('../middleware/authentication');

router.get('/get-job-list', authenticate,jobListController.getJobList);


module.exports = router;
