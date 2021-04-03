import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import NewLogo from '../svg/NewLogo'

import AnchorLink from 'react-anchor-link-smooth-scroll'
import ButtonLink from './ButtonLink'
import Container from './Container'

function Header() {
  const router = useRouter()

  // console.log({ route: router.pathname })
  const isHome = router.pathname === '/'

  const HeaderLink = ({ className, href, children }) => {
    if (isHome) {
      return (
        <AnchorLink className={className} href={href}>
          {children}
        </AnchorLink>
      )
    } else {
      return (
        <Link href={'/' + href}>
          <a className={className}>{children}</a>
        </Link>
      )
    }
  }

  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="max-w-5xl flex mx-auto items-center justify-between sm:flex-row flex-1">
          <Link href="/">
            <a className="flex items-center text-2xl">
              <div className="w-32 mr-3">
                <Image src="/CAE Web.svg" alt="CAE Webdevelopment Ltd" height="128" width="128" />
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
            <Link href="/products">
              <a className="px-4">3-2-1 Launch</a>
            </Link>
          </div>
          <div className="hidden md:block">
            <ButtonLink className="text-sm" href="/contact">
              Get Started
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
