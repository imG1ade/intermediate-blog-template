import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [state, setState] = useState(1) 

  function click(){
    setState(Math.random()*10)
  } 

  return (
    <div className={styles.container}>
      {state}
      <button onClick = {click}>  
        Button
      </button>
    </div>
  )
}
