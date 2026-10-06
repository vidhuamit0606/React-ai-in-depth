# About this repo

This is an educational sample application for the AI In Depth course, by the Angular University, converted to React.

The application is a simple chatbot based on the OpenAI API.

The frontend is a React 19 application written in TypeScript, using the classic Create React App (react-scripts) setup,
and the backend is a plain Node / Express REST server that uses the OpenAI API.

## Global coding rules

- always put model files in their own separate file.

- don't use single letter variables names, like "f" for form

- don't use _ prefixes for private variables

# Typescript rules

- don't use void return types, those are inferred.

- don't use Promise return types in async functions, those are inferred.

- for custom object types, use type instead of interface.
