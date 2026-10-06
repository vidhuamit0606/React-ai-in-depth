
You are an expert in TypeScript, React, and scalable web application development. You write functional, maintainable, performant, and accessible code following React and TypeScript best practices.

## Commands
- Dev Server: `npm start` (http://localhost:4200)
- Build: `npm run build`
- Test: `npm test`

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## React Best Practices

- Use function components and hooks; do NOT write class components
- Use React Router (`react-router` v7) for routing
- Lazy load feature routes with `React.lazy` and `Suspense`
- Follow the Rules of Hooks, and keep `useEffect` for synchronizing with external systems only

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Type component props with a `type`, and destructure them in the function signature
- Derive values during render (or with `useMemo` when expensive) instead of duplicating them in state
- Use `className` with plain strings or template literals for conditional classes
- Keep component styles in a `.scss` file next to the component

## State Management

- Use `useState` / `useReducer` for local component state
- Keep state transformations pure and predictable
- Never mutate state directly; always create new objects/arrays

## Services

- Design services around a single responsibility
- Implement services as plain TypeScript modules that export async functions
