import { defineConfig } from 'mobilewright';

const platform = process.env.MW_PLATFORM === 'android' ? 'android' : 'ios';

export default defineConfig({
  platform,
  bundleId: platform === 'ios' ? 'com.apple.Preferences' : 'com.android.settings',
  deviceId: process.env.MW_DEVICE_ID,
  testDir: 'tests',
  testMatch: `${platform}.spec.ts`,
  timeout: 120_000,
  retries: 0,
  reporter: [
    ['list'],
    ['json', { outputFile: 'results/report.json' }],
    ['junit', { outputFile: 'results/junit.xml' }],
    ['html', { open: 'never' }],
  ],
});
