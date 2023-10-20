"use client"
import Blog from '../pages/landing-page'

import {ThemeProvider as NextThemesProvider} from "next-themes";
      
    
export default function Home() {
  return (
    <NextThemesProvider enableSystem={true} forcedTheme='light' >
        {<Blog/>}
      </NextThemesProvider>
  )
}
