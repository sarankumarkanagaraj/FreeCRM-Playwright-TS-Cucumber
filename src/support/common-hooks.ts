import { ICustomWorld } from './custom-world';
import { config } from './config';

import { Before, After, BeforeAll, AfterAll, Status, setDefaultTimeout } from '@cucumber/cucumber';

import { chromium, firefox, webkit, request, Browser, ConsoleMessage } from '@playwright/test';

import { ensureDir } from 'fs-extra';

let browser: Browser;

const tracesDir = 'traces';

setDefaultTimeout(process.env.PWDEBUG ? -1 : 60 * 1000);

BeforeAll(async function () {
  switch (config.browser) {
    case 'firefox':
      browser = await firefox.launch(config.browserOptions);
      break;

    case 'webkit':
      browser = await webkit.launch(config.browserOptions);
      break;

    case 'msedge':
      browser = await chromium.launch({
        ...config.browserOptions,
        channel: 'msedge'
      });
      break;

    case 'chrome':
      browser = await chromium.launch({
        ...config.browserOptions,
        channel: 'chrome'
      });
      break;

    default:
      browser = await chromium.launch(config.browserOptions);
  }

  await ensureDir(tracesDir);
});

Before(async function (this: ICustomWorld, { pickle }) {
  this.startTime = new Date();
  this.testName = pickle.name.replace(/\W/g, '-');

  this.context = await browser.newContext({
    acceptDownloads: true,

    recordVideo: process.env.PWVIDEO === 'true' ? { dir: 'screenshots' } : undefined,

    viewport: {
      width: 1440,
      height: 900
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
  if (result) {
    this.attach(`Status: ${result.status}. Duration:${result.duration?.seconds}s`);

    if (result.status !== Status.PASSED) {
      const image = await this.page?.screenshot();

      if (image) {
        this.attach(image, 'image/png');
      }

      const timePart = this.startTime?.toISOString().replace(/:/g, '_').split('.')[0];

      await this.context?.tracing.stop({
        path: `${tracesDir}/${this.testName}-${timePart}.zip`
      });
    } else {
      await this.context?.tracing.stop();
    }
  }

  await this.server?.dispose();
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await browser.close();
});
