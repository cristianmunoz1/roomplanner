"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Blog from '../pages/landing-page/Blog'

import {ThemeProvider as NextThemesProvider} from "next-themes";
      
    
export default function Home() {
  return (
    <NextThemesProvider enableSystem={true} forcedTheme='light' >
        {<Blog/>}
      </NextThemesProvider>
  )
}
