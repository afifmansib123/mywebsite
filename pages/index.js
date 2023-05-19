import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style = {{
      width:"100%",
      display : "flex",
      justifyContent : "center",
      height : "80vh",
      backgroundImage : "url('/image1.jpeg')",
    }}>
      index page
    </div>
  )
}
