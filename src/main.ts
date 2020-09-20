import app from './config/express.config';

const PORT: number = 8080;

const projectName: string = "Party Storm";


app.listen(PORT, (req, res) => {
	console.log(`Start in ${PORT} for ${projectName}`);
});
