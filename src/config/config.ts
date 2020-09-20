import env from 'dotenv';

env.config();

export const projectName: string = process.env.PROJECT_NAME;
export const port: number = Number(process.env.PORT) || 8080;

