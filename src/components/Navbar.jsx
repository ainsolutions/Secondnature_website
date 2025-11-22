import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import OnlineShop from './OnlineShop';


const Logo = ({ small }) => {
  const logo = '/assets/logos/logo.png';
  // const logo_ = '/assets/logos/logo_.png';
  return (
    <a href='#home' className='flex items-center gap-3'>
      <img src={logo} alt='logo' width={small ? "80" : "150"} className='transition-all duration-500' />
      {/* <img src={logo} alt='logo' width={small ? "80" : "150"} className='absolute left-[40px] top-[16px]' /> */}
      {/* <span className='font-semibold opacity-0'>Second Nature Oils</span> */}
    </a>

  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'story', label: 'Our Story' },
    { id: 'shop', label: 'Online Shop' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'products', label: 'Organic Products' },
    { id: 'contact', label: 'Contact' }
  ]



  useEffect(() => {
    const handleScroll = () => {
      // Compare scroll position with window height
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    // <nav className='fixed w-full z-50 text-[var(--color-text)] bg-gradient-to-r from-[--color-primary] to-[--color-accent] shadow-md'>

    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 text-[--color-bg] ${scrolled
        ? "bg-[var(--color-primary)] backdrop-blur-md shadow-md"
        : "bg-transparent"
        }`}
    >


      {/* <nav className='fixed w-full z-50 text-[var(--color-bg)]'> */}
      <div className='flex items-center justify-between py-4 px-10 relative'>
        <Logo small={scrolled} />
        <button className='md:hidden' onClick={() => setOpen(!open)} aria-label='menu'>{open ? <X /> : <Menu />}</button>
        <ul className='hidden md:flex gap-6 items-center'>
          {links.map(l => l.id != "shop" ? <li key={l.id}><a href={`#${l.id}`} className='hover:opacity-75'>{l.label}</a></li> :

            <li key={l.id}>
              <OnlineShop label={l.label} />
            </li>)}
        </ul>
      </div>
      {open && <div className='md:hidden p-4 border-t'><ul className='flex flex-col gap-2'>

        {links.map(l => l.id != "shop" ? <li key={l.id}><a href={`#${l.id}`} className='hover:opacity-75'>{l.label}</a></li> :

          <li key={l.id}>
            <OnlineShop label={l.label} />
          </li>)}


      </ul></div>}
    </nav>
  )
}
