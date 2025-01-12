'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blogs' },
    { href: '/latest', label: 'Latest' },
    { href: '/highlight', label: 'Highlight' },
    { href: '/tech', label: 'Tech' },
  ]

  return (
    <header className='w-full bg-gray-300 text-white p-4 border-b-2 border-gray-500'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex justify-between items-center w-full md:w-auto'>
            <h1 className='text-black font-bold text-lg'>Blogs</h1>
            
            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className='md:hidden text-black'>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop Menu */}
          <nav className='hidden md:block flex-grow'>
            <ul className='flex justify-center space-x-6'>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className='text-black hover:underline'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className='md:hidden mt-4'>
            <ul className='flex flex-col items-center space-y-2'>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className='block text-black hover:underline py-2'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

