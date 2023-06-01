import './Header.scss'
import { Navigation } from './Navigation'

const navLinks = [
  { lable: 'Home', href: '/' },
  { lable: 'Blog', href: '/blog' },
  { lable: 'About', href: '/about' },
]

export const Header = () => {
  return (
    <header className='container'>
      <div className='navbar'>
        <Navigation navLinks={navLinks} />
      </div>
    </header>
  )
}
