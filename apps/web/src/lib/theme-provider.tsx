'use client'

import { Theme } from '@radix-ui/themes'

export function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <Theme>
      <div>{children}</div>
    </Theme>
  )
}
