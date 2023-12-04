
import Image from 'next/image';
import Logo from '../../../../public/Jersey-Pizza.png';
import Link from 'next/link';


import onSubmit from '../../../../pages/api/onSubmit'



export default function Header() {
 

  return (
    <>
      <header className="flex items-center justify-between px-14 bg-primary">
        <nav className="flex gap-8 items-center text-white-500 font-semibold pb-6 bg-ff4500 h-21">
          <Image src={Logo} width="130" height="140" />
          <Link href={'/'}> Home</Link>
          <Link href={''}> Menu</Link>
          <Link href={''}> About</Link>
          <Link href={''}> Contact</Link>
        </nav>

        <nav className="flex items-center gap-6">
          <Link href={'/login'}>Login</Link>
          <button href={'/register'} className="bg-white rounded-full text-primary px-8 py-2" onClick={onSubmit}>
            Register
          </button>
        </nav>
      </header>

   


    </>
  );
}


