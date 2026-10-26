---
title: Run
description: Start the OPAL server and find its data.
---

## Commands

| Command | What it does |
| --- | --- |
| `opal` | Starts the server and opens a control page in the browser: status, log, start, stop, update. |
| `opal serve` | Starts only the server. Use this under systemd or another service manager. |
| `opal update` | Downloads, verifies and installs the latest release. |
| `opal import <file>` | Imports a database from a 1.x release into a new file. |
| `opal version` | Shows the installed version. |

The server listens on port 8080.

## Data

| System | Folder |
| --- | --- |
| macOS | `~/Library/Application Support/OPAL` |
| Linux | `~/.local/share/opal` |
| Windows | `%LOCALAPPDATA%\OPAL` |

Set `OPAL_DATA_DIR` to use another folder.

## Run as a service on Linux

Create `~/.config/systemd/user/opal.service`:

```ini
[Unit]
Description=OPAL server
After=network-online.target
Wants=network-online.target

[Service]
ExecStart=%h/.local/bin/opal serve --host 0.0.0.0 --port 8080
Restart=on-failure
KillSignal=SIGINT

[Install]
WantedBy=default.target
```

Then start it, and let it start at boot without a login:

```bash
systemctl --user daemon-reload
systemctl --user enable --now opal
loginctl enable-linger "$USER"
```
