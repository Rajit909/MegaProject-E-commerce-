import React from 'react'
import Link from "next/link"

function Header() {
  return (
    <div className='header'>
        <div>
            <h2>Todo</h2>
        </div>
        <article>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
        </article>
     </div>
  )
}

export default Header