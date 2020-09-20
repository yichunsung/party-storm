import express from 'express';
import bodyParser from 'body-parser';

import api from '../route/api';

const expressApp: any = express();

expressApp.use(bodyParser.urlencoded({extended:true}));
expressApp.use(bodyParser.json());

interface ApiData {
	id: number,
	msg: string
}

interface ResponseData {
	status: number;
	message: string;
	data?: any
}

const successResponse: ResponseData = {
	status: 200,
	message: 'successful',
	data: {
		id: 1,
		msg: 'data'
	}
}

/**
 * [notFoundResponse description]
 * @type {ResponseData}
 */
const notFoundResponse: ResponseData = {
	status: 400,
	message: 'Page Not Found'
}

expressApp.use('/api', api);

expressApp.get('/', (req, res) => {
	res.status(200).json(successResponse);
});

expressApp.use((req, res, next) => {
	res.status(404).json(notFoundResponse);
})


export default expressApp;
