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
  DialogClose
} from '@radix-ui/themes'
import { TrashIcon } from '@radix-ui/react-icons'
import { useFormState, useFormStatus } from 'react-dom'
import { DELETE_TODO } from '../actions'

const initialState = {
  message: ''
}

function SubmitButton(): JSX.Element {
  const { pending } = useFormStatus()

  return (
    <Button color="red" disabled={pending} type="submit">
      {pending ? 'Deleting...' : 'Delete'}
    </Button>
  )
}

export function DialogFormDelete({ id }: { id: string }): JSX.Element {
  const [state, formAction] = useFormState(DELETE_TODO, initialState)

  return (
    <DialogRoot>
      <DialogTrigger>
        <IconButton color="red" variant="soft">
          <TrashIcon />
        </IconButton>
      </DialogTrigger>

      <DialogContent style={{ maxWidth: 450 }}>
        <form action={formAction}>
          <input name="id" type="hidden" value={id} />
          <DialogTitle>Delete</DialogTitle>
          <DialogDescription mb="4" size="2">
            Make changes to your todo. <br />
            <Text color="red" size="1">
              {id} - {JSON.stringify(state)}
            </Text>
          </DialogDescription>

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
