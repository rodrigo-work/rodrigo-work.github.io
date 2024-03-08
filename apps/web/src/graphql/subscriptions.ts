/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateLinks = /* GraphQL */ `subscription OnCreateLinks($filter: ModelSubscriptionLinksFilterInput) {
  onCreateLinks(filter: $filter) {
    id
    url
    settings
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLinksSubscriptionVariables,
  APITypes.OnCreateLinksSubscription
>;
export const onUpdateLinks = /* GraphQL */ `subscription OnUpdateLinks($filter: ModelSubscriptionLinksFilterInput) {
  onUpdateLinks(filter: $filter) {
    id
    url
    settings
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLinksSubscriptionVariables,
  APITypes.OnUpdateLinksSubscription
>;
export const onDeleteLinks = /* GraphQL */ `subscription OnDeleteLinks($filter: ModelSubscriptionLinksFilterInput) {
  onDeleteLinks(filter: $filter) {
    id
    url
    settings
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLinksSubscriptionVariables,
  APITypes.OnDeleteLinksSubscription
>;
export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    id
    title
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    id
    title
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    id
    title
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
