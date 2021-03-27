import Link from 'next/link'
import Container from './Container'

function Footer() {
  return (
    <Container>
      <footer className="bg-white">
        <div className="max-w-screen-xl mx-auto py-6 md:py-12 px-4 overflow-hidden space-y-8 sm:px-6 lg:px-8">
          <p className="text-center text-base leading-6 text-gray-400">
            &copy; {new Date().getFullYear()} CAE Webdevelopment Limited.
            <br className="sm:hidden"></br> All rights reserved.
          </p>
        </div>
      </footer>
    </Container>
  )
}

export default Footer
