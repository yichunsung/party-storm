import express from 'express';

const api: any = express();

const apiTitle: string = "API Route";

api.get('/', (req, res) => {
	res.send(apiTitle);
});

export default api;
