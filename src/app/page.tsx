import Link from 'next/link'
export default function Home() {
  return (
  <>
  
  <div className="flex justify-evenly w-full min-h-screen items-center">
        <Link href={'/upload-button'} className='bg-green-400 p-4 rounded-lg ' >Upload Button</Link>
        <Link href={'/upload-dnd'} className='bg-green-400 p-4 rounded-lg'>Upload Drag n Drop</Link>
      </div>
  </>
  )
}
