// import './styles.css'
import '@radix-ui/themes/styles.css'
import { ThemeProvider } from '@/lib/theme-provider'
import { NextThemeProvider } from '@/lib/next-theme-provider'

export const metadata = {
  title: 'Radix Themes playground',
  description: 'A playground of Radix Themes components'
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body>
        <NextThemeProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </NextThemeProvider>
      </body>
    </html>
  )
}
