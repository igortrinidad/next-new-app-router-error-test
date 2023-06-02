import Link from 'next/link'

export default function Home() {

  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center">
      <div className="p-8 lg:p-4 pb-32 w-full grid grid-cols-2 gap-4">
        <Link href="/app/login" className="rounded p-4 flex items-center justify-center border-2">Go to /app/login</Link>
      </div>
    </div>
  )
}
