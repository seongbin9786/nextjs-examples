# 2. App Router Rules

## Goals

- Understand **App Router**'s Routing Rules.
- Source code comes first, documents second.

## Explanation

### 1. Single-path Static Route = `folderName + page.tsx`

Main element = page.tsx

WORKS:

(1) root folder or sub-directory

```
/           <===> /app/page.tsx
/someRoute1 <===> /app/someRoute1/page.tsx
```

NOT WORKS:

(1) some file name - without folder + page.tsx

```
/someRoute2 <=/=> /app/someRoute2.tsx
```

### 2. Single-path Dynamic Route = `[folderName]`

path param = string = `props.params[folderName]`

If there's overlapping static path exist, that static router wins.

When used as SSG, you should define `generateStaticParams` (previosly `getStaticPaths`)

### 3. Multi-path Dynamic Route = `[...folderName] or [[...folderName]]`

- No route works below this folder !!
- path params = string[] = `props.params[folderName]`

(1) Catch-all route

If there's overlapping static path exist, that static router wins.

(2) Optional catch-all route

Even if there's overlapping static path exist, this dynamic router wins.

If there's no dynamic value for it (so url matches its parent folder), this dynamic router wins.

### 4. Non-route Folders = `(folderForGrouping)`

Nested group also works !!
