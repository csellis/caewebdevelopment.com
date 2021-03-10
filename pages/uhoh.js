import { NextSeo } from 'next-seo'
import Layout from '../components/layout'

function UhOh() {
  return (
    <Layout>
      <NextSeo title="CAE Web | Uh Oh" description="Something went wrong." />
      <div className="container mx-auto px-8 lg:flex lg:flex-col items-center mb-20">
        <img src="/uhoh.png" className="h-64 w-full md:h-96 object-contain mt-16" alt="Uh Oh"></img>
        <h2 className="text-xl text-center mt-16 md:mt-32 md:text-3xl">Something went wrong.</h2>
        <p className="text-lg text-center mt-12 md:text-base">Reach out to me a different way.</p>
      </div>
    </Layout>
  )
}

export default UhOh
