import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  BASE_URL: process.env.BASE_URL ?? '',
  USERNAME: process.env.APP_USERNAME ?? '',
  PASSWORD: process.env.APP_PASSWORD ?? '',
  BROWSER: process.env.BROWSER ?? 'chromium',
  HEADLESS: process.env.HEADLESS === 'true',
  SLOWMO: Number(process.env.SLOWMO ?? 0),
  BASE_API_URL: process.env.BASE_API_URL ?? '',
};
