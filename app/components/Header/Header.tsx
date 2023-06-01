import Link from 'next/link'
import './Header.scss'

export const Header = () => {
  return (
    <header className='container'>
      <div className='navbar'>
        <Link className='nav-item' href={'/'}>Home</Link>
        <Link className='nav-item' href={'/blog'}>Blog</Link>
        <Link className='nav-item' href={'/about'}>About</Link>
      </div>
    </header>
  )
}
