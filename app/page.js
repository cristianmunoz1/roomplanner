"use client"
import Blog from '../pages/landing-page'
import { SessionProvider } from '../components/create-context/SessionContext'
import {ThemeProvider as NextThemesProvider} from "next-themes";
      
export default function Home() {
  return (
    <SessionProvider>
      <NextThemesProvider enableSystem={true} forcedTheme='light' >
        {<Blog/>}
      </NextThemesProvider>
    </SessionProvider>
  )
}
