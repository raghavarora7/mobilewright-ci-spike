// Prints the UDID of the first available iPhone on the newest installed iOS runtime.
import { execFileSync } from 'node:child_process';

const { devices } = JSON.parse(
  execFileSync('xcrun', ['simctl', 'list', 'devices', 'available', '-j'], { encoding: 'utf8' }),
);

const version = (runtime) => runtime.match(/iOS-(\d+)-(\d+)/)?.slice(1).map(Number) ?? [0, 0];
const runtimes = Object.keys(devices)
  .filter((r) => r.includes('.iOS-') && devices[r].some((d) => d.name.startsWith('iPhone')))
  .sort((a, b) => {
    const [am, an] = version(a);
    const [bm, bn] = version(b);
    return bm - am || bn - an;
  });

if (runtimes.length === 0) {
  console.error('No iOS runtime with an iPhone simulator is installed');
  process.exit(1);
}

const sim = devices[runtimes[0]].find((d) => d.name.startsWith('iPhone'));
console.error(`Picked ${sim.name} on ${runtimes[0]}`);
console.log(sim.udid);
