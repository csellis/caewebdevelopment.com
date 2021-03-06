import { NextSeo } from 'next-seo'
import Layout from '../components/layout'

function SuccessPage() {
  return (
    <Layout>
      <NextSeo title="CAE Web | Success" description="We're working for you." />
      <div className="container mx-auto px-8 lg:flex lg:flex-col items-center mb-20">
        <img
          src="/contact-image.svg"
          className="h-64 w-full md:h-96 object-contain mt-16"
          alt="Contact Success Image"
        ></img>
        <h2 className="text-xl text-center mt-16 md:mt-32 md:text-3xl">You're on your way!</h2>
        <p className="text-lg text-center mt-12 md:text-base">I'll get back with you shortly.</p>
      </div>
    </Layout>
  )
}

export default SuccessPage
