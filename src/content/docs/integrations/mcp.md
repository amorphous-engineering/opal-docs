---
title: Claude Code (MCP)
description: Connect Claude Code to OPAL through its MCP endpoint.
---

OPAL serves an MCP endpoint at `/mcp`. Each operation that is marked for MCP is a tool there. A tool call goes through the same access checks as the web client.

1. In OPAL, create an API token for your user.
2. Add the server to Claude Code:

```bash
claude mcp add --transport http opal http://<host>:8080/mcp --header "Authorization: Bearer opal_<token>"
```

A token acts with the rights of its user. It cannot do the actions that need a signed-in person, such as step sign-offs.
