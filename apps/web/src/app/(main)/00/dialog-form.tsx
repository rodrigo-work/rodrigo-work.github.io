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
  TextFieldInput
} from '@radix-ui/themes'
import { Pencil1Icon } from '@radix-ui/react-icons'
import { useFormState, useFormStatus } from 'react-dom'
import { users } from './users'
import styles from './page.module.css'
import { DELETE_TODO } from './actions'

const initialState = {
  message: ''
}

function SubmitButton({ label }: { label: string }): JSX.Element {
  const { pending } = useFormStatus()

  return (
    <Button>{label}</Button>
    // <button aria-disabled={pending} type="submit">
    //   Add
    // </button>
  )
}

export function DialogForm(): JSX.Element {
  return (
    <DialogRoot>
      <DialogTrigger>
        <Button>Edit profile</Button>
      </DialogTrigger>

      <DialogContent style={{ maxWidth: 450 }}>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription mb="4" size="2">
          Make changes to your profile.
        </DialogDescription>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" mb="1" size="2" weight="bold">
              Name
            </Text>
            <TextFieldInput defaultValue="Freja Johnsen" placeholder="Enter your full name" />
          </label>
          <label>
            <Text as="div" mb="1" size="2" weight="bold">
              Email
            </Text>
            <TextFieldInput defaultValue="freja@example.com" placeholder="Enter your email" />
          </label>
        </Flex>

        <Flex gap="3" justify="end" mt="4">
          <DialogClose>
            <Button color="gray" variant="soft">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose>
            <Button>Save</Button>
          </DialogClose>
        </Flex>
      </DialogContent>
    </DialogRoot>
  )
}
