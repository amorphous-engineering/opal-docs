---
title: Install
description: Install the OPAL binary on macOS, Linux or Windows.
---

## macOS and Linux

```bash
curl -LsSf https://raw.githubusercontent.com/amorphous-engineering/OPAL/master/install.sh | sh
```

The installer puts `opal` in `~/.local/bin`. If that folder is not in your `PATH`, the installer shows the line to add.

## Windows

```powershell
irm https://raw.githubusercontent.com/amorphous-engineering/OPAL/master/install.ps1 | iex
```

The installer puts `opal.exe` in `%LOCALAPPDATA%\OPAL` and adds that folder to your `PATH`.

## Choose a release

The installers take the release that GitHub marks as Latest. To install a prerelease, or one exact release:

```bash
# newest release, prereleases included
curl -LsSf https://raw.githubusercontent.com/amorphous-engineering/OPAL/master/install.sh | sh -s -- --prerelease

# one exact release
curl -LsSf https://raw.githubusercontent.com/amorphous-engineering/OPAL/master/install.sh | sh -s -- --version v2.0.0-rc.21
```

```powershell
$env:OPAL_PRERELEASE = "1"     # or: $env:OPAL_VERSION = "v2.0.0-rc.21"
irm https://raw.githubusercontent.com/amorphous-engineering/OPAL/master/install.ps1 | iex
```

:::note
Until the 2.0 release, these options are only on the `rewrite` branch. Replace `master` with `rewrite` in the URLs above.
:::

## Download by hand

Download a binary from [GitHub Releases](https://github.com/amorphous-engineering/OPAL/releases) and check it against `SHA256SUMS`.

| Platform | File |
| --- | --- |
| macOS (Apple Silicon) | `opal-macos-arm64` |
| macOS (Intel) | `opal-macos-x86_64` |
| Linux (x86_64) | `opal-linux-x86_64` |
| Linux (arm64) | `opal-linux-arm64` |
| Windows (x86_64) | `opal-windows-x86_64.exe` |
