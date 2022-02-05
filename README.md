# Crud on posts list from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

Crud operation on Posts list with react.js, react hooks, redux, redux-saga, TypeScript and Ant Design library, you can visit this repo on github pages [via this link](https://ahmed3bdelnour.github.io/posts-crud-react-redux-saga)

## Included features

[1] - Show list of posts in a data table with sort, search, pagination<br />
[2] - User can sort data ascending or descending or remove sorting<br />
[3] - USer can search for a specific post by its title or description, USer should write search term then press enter key or click search icon to start search, search is case-insensitive<br />
[4] - USer can navigate between pages and change number of posts per page using pagination<br />
[5] - Each post row in the data table has three actions (view, edit and delete)<br />
[6] - View action opens a modal with post details<br />
[7] - Edit action navigates to Edit post form with validation for empty values, loading spinner for submitting the form, disabled submit button for invalid data or if the data does not change and toasters for submitting success or submitting errors<br />
[8] - Delete action opens a confirmation modal to delete a post with loading spinner for submitting and toasters for submitting success or submitting errors<br />
[9] - 404 Not found page for unknown Routes, [See example](https://ahmed3bdelnour.github.io/posts-crud-react-redux-saga/any-unknown-url)<br />
[10] - Error handling for requests Errors and un found data, for example [Requesting single post which does not exist in data base](https://ahmed3bdelnour.github.io/posts-crud-react-redux-saga/posts/150/edit)<br />
[11] - Implementation of Performance optimization using useMemo, useCallback, React.memo and reduxjs/reselect lib<br />
[12] - Implementation for redux.js for state management and redux saga for handling side effects
