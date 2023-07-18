const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/user.routes');
const jobListRoutes = require('./routes/jobList.routes');
const jobDetailsRoutes = require('./routes/jobDetails.routes');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

app.use('/api/user', userRoutes);
app.use('/api/job-list', jobListRoutes);
app.use('/api/job-list', jobDetailsRoutes);





