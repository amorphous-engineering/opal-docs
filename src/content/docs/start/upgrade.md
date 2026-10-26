---
title: Upgrade from 1.x
description: Move a database from an OPAL 1.x release to 2.0.
---

1. Install the last 1.x release and start it once. This upgrades the database to the last 1.x schema.
2. Stop it.
3. Install 2.0 and start it.

On the first start, OPAL imports the old database into a new file. It keeps the old file as `opal.legacy.db` and writes `import-report.txt` next to it. Read the report before you use the new database.

:::caution
Back up the data folder before step 3. The import does not change the old file, but a backup costs nothing.
:::
