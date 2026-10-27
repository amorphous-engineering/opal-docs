---
title: Claude Code (MCP)
description: Connect Claude Code or claude.ai to OPAL through its MCP endpoint.
---

OPAL serves an MCP endpoint at `/mcp`. Each operation that is marked for MCP is a tool there. A tool call goes through the same access checks as the web client.

## Connect with sign-in

1. Add the server to Claude Code:

   ```bash
   claude mcp add --transport http opal https://<host>/mcp
   ```

2. Run `/mcp` in Claude Code and select `opal`. A browser opens.
3. Sign in to OPAL, then click **Approve**.

For claude.ai, add a custom connector with the URL `https://<host>/mcp`.

The client gets a token that acts as your user. It shows in your API tokens as `<client> (MCP)`. Revoke it there to disconnect the client. The token lasts one day, and the client refreshes it for up to 30 days without use.

## Connect with a token

Use this for scripts and for clients that cannot sign in.

1. In OPAL, create an API token for your user.
2. Add the server with the token:

   ```bash
   claude mcp add --transport http opal https://<host>/mcp --header "Authorization: Bearer opal_<token>"
   ```

## Behind a reverse proxy

Sign-in needs OPAL to know its public URL. Set `OPAL_TRUST_PROXY=1` when a proxy such as Caddy or nginx terminates TLS. OPAL then reads `X-Forwarded-Proto` and `X-Forwarded-Host`.

## Limits

A token cannot do the actions that need a signed-in person, such as step sign-offs.
