import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const BreadCrumb = () => {
  return (
    <div className="px-4 md:px-10 4xl:px-14 flex items-center justify-start gap-2">
      <p className="font-light">
        <Link href="/">Home</Link>
      </p>

      <ChevronRight className="text-accent-primary w-4 md:w-8" />

      <p className="text-accent-primary font-bold">
        <Link href="/fablab">Fablab</Link>
      </p>
    </div>
  )
}

export default BreadCrumb
