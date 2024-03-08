/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getLinks = /* GraphQL */ `query GetLinks($id: ID!) {
  getLinks(id: $id) {
    id
    url
    settings
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLinksQueryVariables, APITypes.GetLinksQuery>;
export const listLinks = /* GraphQL */ `query ListLinks(
  $filter: ModelLinksFilterInput
  $limit: Int
  $nextToken: String
) {
  listLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      url
      settings
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLinksQueryVariables, APITypes.ListLinksQuery>;
export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    title
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      completed
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
