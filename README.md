# Disney Characters App Components

This repository contains React components and hooks for building an app that displays Disney characters. The components are designed to handle character information, loading states, error messages, and filtering.

## Components

### 1. App Component

The `App` component is the main entry point for the Disney Characters app. It utilizes the `useFetchCharacters` hook to fetch characters based on parameters and page information. The component displays a list of characters, a filter component, and handles loading and error states.

### 2. Character Component

The `Character` component displays detailed information about a Disney character. It includes details about the character's appearances in films, TV shows, short films, and video games. The component uses a dropdown to display these lists in a collapsible format.

### 3. CharacterDropdown Component

The `CharacterDropdown` component is a reusable dropdown component used within the `Character` component. It displays a list of items (films, TV shows, short films, or video games) in a collapsible format.

### 4. LoadingPreview Component

The `LoadingPreview` component is a loading skeleton that represents the preview of a character. It is used to indicate a loading state while character information is being fetched.

### 5. ErrorMessage Component

The `ErrorMessage` component displays an error message when no results are found. It includes an option to clear the search and trigger a new search.

### 6. FilterComponent Component

The `FilterComponent` component provides a user interface for filtering characters based on type (name, film, TV show, short film, video game) and searching by a query. It also includes pagination controls.

## Hooks

### 1. useFetchCharacters Hook

The `useFetchCharacters` hook is responsible for making API requests to retrieve Disney characters based on specified parameters and page information. It returns a state object with characters, loading status, and error information.

## Usage

To use these components and hooks, import them into your React application and incorporate them into your UI. Refer to the individual component and hook files for specific usage instructions.

Feel free to customize and extend these components to suit the needs of your Disney Characters app.

## Author

Makayla Forsyth
