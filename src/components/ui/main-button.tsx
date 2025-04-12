import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface MainButtonProps {
  href: string
}

const MainButton = ({ href }: MainButtonProps) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-between bg-white text-black py-2"
      style={{
        paddingInline: 'clamp(0.5625rem, -0.1002rem + 2.7189vw, 4.25rem)',
        paddingBlock: 'clamp(0.5625rem, 0.3041rem + 1.0599vw, 2rem)',
      }}
    >
      <p className="cta-text">Contact Us</p>
      <ArrowRight />
    </Link>
  )
}

export default MainButton
