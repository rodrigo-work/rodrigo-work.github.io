import * as React from 'react'
import {
  Theme,
  //
  Avatar,
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
  TextFieldRoot,
  Grid,
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectItem,
  //
  ThemePanel,
  Container
} from '@radix-ui/themes'
import { Pencil1Icon } from '@radix-ui/react-icons'
import { users } from './users'
import styles from './page.module.css'
import { DialogForm } from './dialog-form'
import { GET_TODOS } from './actions'
import { DialogFormDelete } from './components/delete'
import { DialogFormUpdate } from './components/update'
import { DialogFormCreate } from './components/create'

export default async function Page(): Promise<JSX.Element> {
  const todos = await GET_TODOS()

  return (
    <Container id="root">
      {/* <ThemePanel /> */}
      <Text size="2">
        Tools for building high-quality, accessible UI.
        <Separator my="3" size="4" />
        <Flex align="center" gap="3">
          Themes
          <Separator orientation="vertical" />
          Primitives
          <Separator orientation="vertical" />
          Icons
          <Separator orientation="vertical" />
          Colors
        </Flex>
      </Text>
      <br />

      <Flex direction="row" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button> <DialogFormCreate />
      </Flex>
      <br />
      {todos.map((user: any, index: number) => (
        <React.Fragment key={user.id}>
          <Flex align="center" justify="between">
            <Flex align="center" gap="3">
              <Avatar fallback={index + 1} radius="full" src="#" />
              <Flex direction="column">
                <Text size="2">{user.title}</Text>
                <Text color="gray" size="1">
                  {user.completed ? 'Completed' : 'Pending'}
                </Text>
              </Flex>
            </Flex>

            <Flex gap="2">
              <DialogFormDelete id={user.id} />
              <DialogFormUpdate data={user} />
            </Flex>

            {/* <DialogRoot>
              <DialogTrigger>
                <IconButton aria-label="Edit user" variant="soft">
                  <Pencil1Icon />
                </IconButton>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>{user.name}</DialogTitle>
                <DialogDescription mb="5">Edit and save details below.</DialogDescription>

                <Text color="gray" mb="1" size="1" weight="bold">
                  Name
                </Text>
                <TextFieldRoot defaultValue={user.name} mb="2" />
                <Text color="gray" mb="1" size="1" weight="bold">
                  Role
                </Text>
                <SelectRoot defaultValue={user.role}>
                  <SelectTrigger />
                  <SelectContent color="gray" variant="soft">
                    <SelectItem value="viewer">Viewer</SelectItem>
                    <SelectItem value="maintainer">Maintainer</SelectItem>
                    <SelectItem value="contributor">Contributor</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </SelectRoot>

                <Flex gap="3" justify="end" mt="5">
                  <DialogClose>
                    <Button color="gray" variant="soft">
                      Cancel
                    </Button>
                  </DialogClose>
                  <DialogClose>
                    <Button variant="solid">Save</Button>
                  </DialogClose>
                </Flex>
              </DialogContent>
            </DialogRoot> */}
          </Flex>
          <Separator my="3" size="4" />
        </React.Fragment>
      ))}
    </Container>
  )
}
