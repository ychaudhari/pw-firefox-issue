import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  reporter: 'list',
  use: {
    browserName: 'firefox',
    headless: false,
    trace: 'retain-on-failure',
  },
};
export default config;
