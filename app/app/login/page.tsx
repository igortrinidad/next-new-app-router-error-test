import Link from 'next/link'
import React from 'react'

export default function Home() {

  return (
    <>
      <div className="w-full grid grid-cols-2 gap-4">
        <Link href="/" className="rounded p-4 flex items-center justify-center border">Go to /</Link>
      </div>
    </>
  )
}
