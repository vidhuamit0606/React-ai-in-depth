## React code rules

- use function components and hooks only. Don't use class components.

- prefer controlled form inputs managed with React state.

- define the API of your service layers with Promises, using the fetch API.

- For handling async code, prefer Promises and the async /await syntax

- where applicable, keep a common CSS theme in shared files that you import/apply to the components,
  to make it easy to adapt the theme in the future.

- all HTTP requests target the backend by having the url start with /api. In development, these are proxied to
  localhost:9000 via the "proxy" field in package.json.

- don't put large inline styles in components. Keep styles in separate .scss files next to the component.
