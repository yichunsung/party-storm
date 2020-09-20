import app from './config/express.config';

import { projectName, port } from './config/config';


app.listen(port, (req, res) => {
	console.log(`Start in ${port} for ${projectName}`);
});
