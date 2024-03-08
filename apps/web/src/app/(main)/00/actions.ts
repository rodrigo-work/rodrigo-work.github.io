'use server'

import { revalidatePath } from 'next/cache'
import { generateClient } from 'aws-amplify/api'
import { Amplify } from 'aws-amplify'
import { listTodos } from '@/graphql/queries'
import { createTodo, deleteTodo, updateTodo } from '@/graphql/mutations'

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://yrblzbybmzearaat6umh7rs7cu.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-n2pnxyamqzdannstid4hqj2pmy'
    }
  }
})

export async function GET_TODOS(): Promise<any> {
  const client = generateClient()

  try {
    const { data, errors } = await client.graphql({
      query: listTodos
    })
    return data.listTodos.items
  } catch (error) {
    return error
  }
}

export async function DELETE_TODO(prevState: any, formData: FormData): Promise<any> {
  new Promise((resolve) => setTimeout(resolve, 3000))
  const client = generateClient()

  try {
    const { data, errors } = await client.graphql({
      query: deleteTodo,
      variables: {
        input: {
          id: formData.get('id') as string
        }
      }
    })

    revalidatePath('/')
    return { message: 'Todo deleted', data, errors }
  } catch (e) {
    console.error(e)
  }
}

export async function UPDATE_TODO(prevState: any, formData: FormData): Promise<any> {
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  const client = generateClient()

  try {
    const { data, errors } = await client.graphql({
      query: updateTodo,
      variables: {
        input: {
          id: formData.get('id') as string,
          title: formData.get('title') as string,
          completed: Boolean(formData.get('completed'))
        }
      }
    })

    revalidatePath('/', 'page')
    return { message: 'Todo updated', data, errors }
  } catch (error) {
    console.error(error)
  }
}

export async function CREATE_TODO(prevState: any, formData: FormData): Promise<any> {
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  const client = generateClient()

  try {
    const { data, errors } = await client.graphql({
      query: createTodo,
      variables: {
        input: {
          title: formData.get('title') as string,
          completed: Boolean(formData.get('completed'))
        }
      }
    })

    revalidatePath('/', 'page')
    return { message: 'Todo created', data, errors }
  } catch (error) {
    console.error(error)
  }
}
