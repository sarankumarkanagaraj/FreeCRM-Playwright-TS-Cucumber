import { ICustomWorld } from './custom-world';
import { config } from './config';

import { Before, After, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';

import { chromium, firefox, webkit, request, Browser, ConsoleMessage } from '@playwright/test';

import { ensureDir } from 'fs-extra';

let browser: Browser;

const tracesDir = 'traces';
const isHeadless = config.browserOptions.headless === true;

setDefaultTimeout(process.env.PWDEBUG ? -1 : 60 * 1000);

BeforeAll(async function () {
  switch (config.browser) {
    case 'firefox':
      browser = await firefox.launch({
        ...config.browserOptions,
        args: []
      });
      break;

    case 'webkit':
      browser = await webkit.launch(config.browserOptions);
      break;

    case 'msedge':
      browser = await chromium.launch({
        ...config.browserOptions,
        channel: 'msedge',
        args: []
      });
      break;

    case 'chrome':
      browser = await chromium.launch({
        ...config.browserOptions,
        channel: 'chrome',
        args: []
      });
      break;

    default:
      browser = await chromium.launch({
        ...config.browserOptions,
        args: []
      });
  }

  await ensureDir(tracesDir);
  await ensureDir('screenshots');
  await ensureDir('videos');
});

Before(async function (this: ICustomWorld, { pickle }) {
  this.startTime = new Date();
  this.testName = pickle.name.replace(/\W/g, '-');

  this.context = await browser.newContext({
    acceptDownloads: true,

    viewport: isHeadless
      ? {
          width: 1440,
          height: 900
        }
      : null,

    recordVideo: {
      dir: 'videos'
    }
  });

  this.server = await request.newContext({
    baseURL: config.BASE_API_URL
  });

  await this.context.tracing.start({
    screenshots: true,
    snapshots: true
  });

  this.page = await this.context.newPage();

  this.page.on('console', (msg: ConsoleMessage) => {
    if (msg.type() === 'log') {
      this.attach(msg.text());
    }
  });

  this.feature = pickle;
});

After(async function (this: ICustomWorld, { result }) {
  const timePart = this.startTime?.toISOString().replace(/:/g, '_').split('.')[0];

  if (result) {
    this.attach(`Status: ${result.status}. Duration:${result.duration?.seconds}s`);

    const image = await this.page?.screenshot({
      path: `screenshots/${this.testName}-${timePart}.png`,
      fullPage: true
    });

    if (image) {
      this.attach(image, 'image/png');
    }

    await this.context?.tracing.stop({
      path: `${tracesDir}/${this.testName}-${timePart}.zip`
    });
  }

  await this.server?.dispose();
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await browser.close();
});
