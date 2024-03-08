'use client'

import * as React from 'react'
import {
  Flex,
  Separator,
  Text,
  Button,
  IconButton,
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  TextFieldInput,
  Switch
} from '@radix-ui/themes'
import { Pencil1Icon } from '@radix-ui/react-icons'
import { useFormState, useFormStatus } from 'react-dom'
import { CREATE_TODO, UPDATE_TODO } from '../actions'

const initialState = {
  message: ''
}

function SubmitButton(): JSX.Element {
  const { pending } = useFormStatus()

  return (
    <Button disabled={pending} type="submit">
      {pending ? 'Updating...' : 'Update'}
    </Button>
  )
}

export function DialogFormCreate(): JSX.Element {
  const [state, formAction] = useFormState(CREATE_TODO, initialState)

  return (
    <DialogRoot>
      <DialogTrigger>
        <Button>Edit profile</Button>
      </DialogTrigger>

      <DialogContent style={{ maxWidth: 450 }}>
        <form action={formAction}>
          <DialogTitle>Update</DialogTitle>
          <DialogDescription mb="4" size="2">
            Make changes to your todo. <br />
            <Text color="red" size="1">
              {JSON.stringify(state)}
            </Text>
          </DialogDescription>

          <Flex direction="column" gap="3">
            <label htmlFor="title">
              <Text as="div" mb="1" size="2" weight="bold">
                Name
              </Text>
              <TextFieldInput id="title" name="title" placeholder="Enter your full name" />
            </label>
          </Flex>

          <Flex asChild gap="3" justify="between" mt="2">
            <label>
              <Text as="div" mb="1" size="2" weight="bold">
                Completed
              </Text>
              <Switch defaultChecked={false} name="completed" size="1" />
            </label>
          </Flex>

          <Separator my="3" size="4" />

          <Flex gap="3" justify="end" mt="4">
            <DialogClose>
              <Button color="gray" variant="soft">
                Cancel
              </Button>
            </DialogClose>
            <SubmitButton />
          </Flex>
        </form>
      </DialogContent>
    </DialogRoot>
  )
}
