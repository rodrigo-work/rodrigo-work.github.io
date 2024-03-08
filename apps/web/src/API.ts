/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLinksInput = {
  id?: string | null,
  url: string,
  settings?: Array< string > | null,
};

export type ModelLinksConditionInput = {
  url?: ModelStringInput | null,
  settings?: ModelStringInput | null,
  and?: Array< ModelLinksConditionInput | null > | null,
  or?: Array< ModelLinksConditionInput | null > | null,
  not?: ModelLinksConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Links = {
  __typename: "Links",
  id: string,
  url: string,
  settings?: Array< string > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLinksInput = {
  id: string,
  url?: string | null,
  settings?: Array< string > | null,
};

export type DeleteLinksInput = {
  id: string,
};

export type CreateTodoInput = {
  id?: string | null,
  title: string,
  completed: boolean,
};

export type ModelTodoConditionInput = {
  title?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  title: string,
  completed: boolean,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  title?: string | null,
  completed?: boolean | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type ModelLinksFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  settings?: ModelStringInput | null,
  and?: Array< ModelLinksFilterInput | null > | null,
  or?: Array< ModelLinksFilterInput | null > | null,
  not?: ModelLinksFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelLinksConnection = {
  __typename: "ModelLinksConnection",
  items:  Array<Links | null >,
  nextToken?: string | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionLinksFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  url?: ModelSubscriptionStringInput | null,
  settings?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLinksFilterInput | null > | null,
  or?: Array< ModelSubscriptionLinksFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  completed?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateLinksMutationVariables = {
  input: CreateLinksInput,
  condition?: ModelLinksConditionInput | null,
};

export type CreateLinksMutation = {
  createLinks?:  {
    __typename: "Links",
    id: string,
    url: string,
    settings?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLinksMutationVariables = {
  input: UpdateLinksInput,
  condition?: ModelLinksConditionInput | null,
};

export type UpdateLinksMutation = {
  updateLinks?:  {
    __typename: "Links",
    id: string,
    url: string,
    settings?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLinksMutationVariables = {
  input: DeleteLinksInput,
  condition?: ModelLinksConditionInput | null,
};

export type DeleteLinksMutation = {
  deleteLinks?:  {
    __typename: "Links",
    id: string,
    url: string,
    settings?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetLinksQueryVariables = {
  id: string,
};

export type GetLinksQuery = {
  getLinks?:  {
    __typename: "Links",
    id: string,
    url: string,
    settings?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLinksQueryVariables = {
  filter?: ModelLinksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLinksQuery = {
  listLinks?:  {
    __typename: "ModelLinksConnection",
    items:  Array< {
      __typename: "Links",
      id: string,
      url: string,
      settings?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      title: string,
      completed: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLinksSubscriptionVariables = {
  filter?: ModelSubscriptionLinksFilterInput | null,
};

export type OnCreateLinksSubscription = {
  onCreateLinks?:  {
    __typename: "Links",
    id: string,
    url: string,
    settings?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLinksSubscriptionVariables = {
  filter?: ModelSubscriptionLinksFilterInput | null,
};

export type OnUpdateLinksSubscription = {
  onUpdateLinks?:  {
    __typename: "Links",
    id: string,
    url: string,
    settings?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLinksSubscriptionVariables = {
  filter?: ModelSubscriptionLinksFilterInput | null,
};

export type OnDeleteLinksSubscription = {
  onDeleteLinks?:  {
    __typename: "Links",
    id: string,
    url: string,
    settings?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};
