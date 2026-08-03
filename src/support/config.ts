import { LaunchOptions } from '@playwright/test';

const browserOptions: LaunchOptions = {
  headless: process.env.HEADLESS === 'true',
  slowMo: Number(process.env.SLOWMO ?? 0),
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true
  }
};

export const config = {
  browser: process.env.BROWSER ?? 'chromium',
  browserOptions,
  BASE_URL: process.env.BASE_URL ?? '',
  BASE_API_URL: process.env.BASE_API_URL ?? '',
  IMG_THRESHOLD: { threshold: 0.4 }
};
