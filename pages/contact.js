import ContactForm from '../components/ContactForm'
import Layout from '../components/layout'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

function ContactPage() {
  return (
    <Layout>
      <NextSeo title="Let's work together | CAE Web" description="Let's work together." />
      <div className="mt-12">
        <ContactForm />
      </div>
    </Layout>
  )
}

export default ContactPage
