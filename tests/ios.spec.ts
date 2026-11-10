import { test, expect } from '@mobilewright/test';

test.use({ video: 'on' });

test('Settings opens General', async ({ device, screen, bundleId }) => {
  await device.terminateApp(bundleId).catch(() => {});
  await device.launchApp(bundleId);

  const general = screen.getByText('General', { exact: true }).first();
  await expect(general).toBeVisible({ timeout: 30_000 });
  await general.tap();

  await expect(screen.getByText('About', { exact: true }).first()).toBeVisible();
});
