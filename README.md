# mobilewright CI spike

A sample run that checks [mobilewright](https://github.com/mobile-next/mobilewright) works on GitHub-hosted runners:

- **iOS** on `macos-26`: boots an iPhone simulator, opens the built-in Settings app, taps General, checks that About is shown.
- **Android** on `ubuntu-latest` with KVM: boots an emulator (API 34), opens Settings, taps Network & internet, checks that Airplane mode is shown.

No app build is needed; both tests use the Settings app that ships with the OS. Each job uploads the JSON and JUnit reports, the HTML report and the test video as run artifacts.

What a run tells us: whether mobilewright works on these runners, how long device boot takes, the minutes per run, and the report format.

The runner labels come from the repo variables `IOS_RUNNER` and `ANDROID_RUNNER`, so the same workflow can run on self-hosted runners later.
