# Migration `20200524091311-remove-feed-table`

This migration has been generated by Emma Goto at 5/24/2020, 9:13:11 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

PRAGMA foreign_keys=off;
DROP TABLE "quaint"."Feed";;
PRAGMA foreign_keys=on

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200522185004-add-name-to-feed-model..20200524091311-remove-feed-table
--- datamodel.dml
+++ datamodel.dml
@@ -1,27 +1,9 @@
-// This is your Prisma schema file,
-// learn more about it in the docs: https://pris.ly/d/prisma-schema
+generator client {
+  provider = "prisma-client-js"
+}
 datasource sqlite {
   provider = "sqlite"
-  url = "***"
+  url      = "file:./db.sqlite"
 }
-// SQLite is easy to start with, but if you use Postgres in production
-// you should also use it in development with the following:
-//datasource postgresql {
-//  provider = "postgresql"
-//  url = "***"
-//}
-
-generator client {
-  provider = "prisma-client-js"
-}
-
-
-model Feed {
- id          Int      @default(autoincrement()) @id
- name       String
- privateUrl  String
- publicUrl   String
- pointer     String
-}
```
