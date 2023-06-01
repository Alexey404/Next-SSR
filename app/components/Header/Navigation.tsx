'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Header.scss'

type NavLinks = {
  lable: string
  href: string
}

type Props = {
  navLinks: NavLinks[]
}

export const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname()
  return (
    <>
      {navLinks.map((item: NavLinks) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.lable}
            href={item.href}
            className={isActive ? 'active-link' : ''}
          >
            {item.lable}
          </Link>
        )
      })}
    </>
  )
}
