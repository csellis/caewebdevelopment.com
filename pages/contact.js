import ContactForm from '../components/ContactForm'
import Layout from '../components/layout'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

function ContactPage() {
  return (
    <Layout>
      <NextSeo title="CAE Web | Contact" description="Let's work together." />
      <div className="">
        <ContactForm />
      </div>
    </Layout>
  )
}

export default ContactPage
