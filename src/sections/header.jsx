import Logo from '../components/logo'
import Menu from '../components/menu'

export default function Header () {

  return (
    <header className="bg-blue pt-6 pb-0 sm:pb-5 md:py-5" id='header'>
      <div className="container flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        
        <Logo 
          image='page-logo-trans.webp'
          alt='cancun concierge logo'
          width='200px'
        />
        <Menu/>
      </div>
    </header>
  )
}