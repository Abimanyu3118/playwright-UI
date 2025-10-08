import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  snapshotDir: './src/tests/__snapshots__',
  testDir: './src/tests',
  timeout: 30 * 1000,
  retries: 0,
  reporter: [
  ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://n8n.io/',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
  ],
});
