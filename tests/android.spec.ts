import { test, expect } from '@mobilewright/test';

test.use({ video: 'on' });

test('Settings opens Network & internet', async ({ device, screen, bundleId }) => {
  await device.terminateApp(bundleId).catch(() => {});
  await device.launchApp(bundleId);

  const network = screen.getByText('Network & internet', { exact: true }).first();
  await expect(network).toBeVisible({ timeout: 30_000 });
  await network.tap();

  await expect(screen.getByText('Airplane mode', { exact: true }).first()).toBeVisible();
});
