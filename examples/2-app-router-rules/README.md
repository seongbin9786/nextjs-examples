# 2. App Router Rules

## Goals

- Understand **App Router**'s Routing Rules.
- Source code comes first, documents second.

## Explanation

### 1. Route = folder + page.tsx

Main element = page.tsx

WORKS:

```
/           <===> /app/page.tsx
/someRoute1 <===> /app/someRoute1/page.tsx
```

NOT WORKING!! :

```
/someRoute2 <=/=> /app/someRoute2.tsx
```

### 2. Extra Elements

Extra elements

```
/app/loading.tsx
/app/error.tsx
/app/layout.tsx
/app/template.tsx
/app/not-found.tsx
```
