import Link from "next/link";
import Image from 'next/image'
import { useRouter } from "next/router";
import { useState } from "react";

import AnchorLink from 'react-anchor-link-smooth-scroll';
import ButtonLink from './ButtonLink';

function Header() {

  const router = useRouter();

  // console.log({ route: router.pathname })
  const isHome = router.pathname === "/"

  const HeaderLink = ({ className, href, children }) => {
    if (isHome) {
      return <AnchorLink className={className} href={href}>{children}</AnchorLink>
    } else {
      return (
        <Link href={'/' + href}>
          <a className={className}>
            {children}
          </a>
        </Link >
      )
    }
  }

  return (
    <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <Link href="/">
          <a className="flex items-center text-2xl">
            <div className="w-32 mr-3">
              {/* <LogoIcon /> */}
              {/* <Image src="/logo.png" alt="Meet on V" width={113.5} height={64} /> */}
              <img src="/logo.png" alt="Meet on V" />
            </div>
          </a>
        </Link>
        <div className="flex mt-4 sm:mt-0">
          <HeaderLink className="px-4" href="#features">
            Features
          </HeaderLink>
          <HeaderLink className="px-4" href="#services">
            Services
        </HeaderLink>
          <HeaderLink className="px-4" href="#testimonials">
            Testimonials
        </HeaderLink>
        </div>
        <div className="hidden md:block">
          <ButtonLink className="text-sm" href="/contact">Get Started</ButtonLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
