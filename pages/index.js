import Layout from '../components/layout'
import ButtonLink from '../components/ButtonLink'
import Card from '../components/Card'
import SplitSection from '../components/SplitSection'

import HeroImage from '../svg/HeroImage'
import SvgCharts from '../svg/SvgCharts'
import Build from '../svg/Build'
import { NextSeo } from 'next-seo'
import Container from '../components/Container'

function IndexPage() {
  return (
    <Layout>
      <NextSeo title="CAE Web" description="Building interactive business tools for the UK" />
      {/* Hero */}
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Building Custom
              <br /> Business Tools
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              You can have business tools built,
              <br className="hidden sm:block" /> the way you want them.
            </p>
            <p className="mt-8 md:mt-12">
              <ButtonLink href="/contact" size="lg">
                Let's do it
              </ButtonLink>
            </p>
            {/* <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p> */}
          </div>
          <div className="lg:w-1/2">
            <HeroImage />
          </div>
        </div>
      </section>
      {/* Features */}
      <section id="features" className="py-20 lg:pb-40 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Why custom tooling matters.</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Trust.</p>
                <p className="mt-4">
                  When it's built to your specification, it does exactly what you want and you
                  control your data.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Ease.</p>
                <p className="mt-4">
                  Your business processes can be frictionless. That saves your time for working in
                  your business instead of on your business.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Tailored.</p>
                <p className="mt-4">
                  You've built a company that has unique needs. A one size fits all tool doesn't
                  really fit all.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Features Depth */}
      <SplitSection
        id="services"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">Analysis</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              We can integrate custom analytics dashboards for your business.
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">Design And Plan</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              As experts in web applications, we can build the perfect integrations for your
              business.
            </p>
          </div>
        }
        secondarySlot={<Build />}
      />

      {/* <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Search For Performance Optimization
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              With all the information in place you will be presented with an action plan that your
              company needs to follow
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      /> */}
      {/* Testimonials */}

      {/* <section id="testimonials" className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <svg
            className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            role="img"
            aria-labelledby="svg-workcation"
          >
            <title id="svg-workcation">Workcation</title>
            <defs>
              <pattern
                id="ad119f34-7694-4c31-947f-5c9d249b21f3"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
          </svg>

          <div className="relative">
            <svg className="mx-auto h-10" fill="none" viewBox="0 0 180 40">
              <path
                fill="#2D3748"
                d="M59.267 32.642h3.718L66.087 21.7l3.126 10.94h3.718l4.642-16.576h-3.434l-3.173 12.29-3.481-12.29H64.69l-3.457 12.29-3.174-12.29h-3.433l4.641 16.576zM83.551 32.973c3.481 0 6.276-2.723 6.276-6.252 0-3.528-2.794-6.252-6.276-6.252-3.48 0-6.252 2.724-6.252 6.252 0 3.529 2.771 6.252 6.252 6.252zm0-2.984c-1.8 0-3.197-1.35-3.197-3.268 0-1.918 1.398-3.268 3.197-3.268 1.824 0 3.221 1.35 3.221 3.268 0 1.918-1.397 3.268-3.22 3.268zM95.031 22.837v-2.036h-3.055v11.84h3.055v-5.66c0-2.486 2.013-3.196 3.6-3.007v-3.41c-1.492 0-2.984.663-3.6 2.273zM111.334 32.642l-4.902-5.992 4.76-5.85h-3.647l-4.073 5.21v-9.946h-3.055v16.578h3.055v-5.376l4.31 5.376h3.552z"
              />
              <path
                fill="#5850EC"
                fillRule="evenodd"
                d="M42.342 17.45l-7.596-4.385v20.371h8.88v1.974H.21v-1.974h3.947v-12.55l-3.678.92L0 19.89l20.81-5.202h3.08a9.421 9.421 0 00-.67 2.525l-.477 3.922 5.096-2.942v15.243h4.933v-20.37l-7.594 4.385a7.402 7.402 0 012.531-4.736h-4.064a7.39 7.39 0 016.557-2.933l-5.517-3.186a7.388 7.388 0 016.607.397 7.366 7.366 0 012.468 2.316 7.363 7.363 0 012.467-2.316 7.39 7.39 0 016.608-.397l-5.518 3.186a7.389 7.389 0 016.558 2.933h-4.066a7.399 7.399 0 012.533 4.735zm-18.45 6.119h-5.92v9.867h5.92v-9.867zm-10.854 1.973a1.974 1.974 0 11-3.947 0 1.974 1.974 0 013.947 0z"
                clipRule="evenodd"
              />
              <path
                fill="#5850EC"
                d="M118.495 32.973c2.321 0 4.334-1.232 5.352-3.079l-2.652-1.515c-.474.97-1.492 1.563-2.723 1.563-1.824 0-3.174-1.35-3.174-3.221 0-1.895 1.35-3.244 3.174-3.244 1.207 0 2.226.615 2.699 1.586l2.629-1.54c-.971-1.823-2.984-3.054-5.305-3.054-3.599 0-6.252 2.723-6.252 6.252 0 3.528 2.653 6.252 6.252 6.252zM134.277 20.8v1.398c-.853-1.066-2.131-1.729-3.86-1.729-3.15 0-5.755 2.723-5.755 6.252 0 3.528 2.605 6.252 5.755 6.252 1.729 0 3.007-.663 3.86-1.729v1.397h3.055v-11.84h-3.055zm-3.292 9.26c-1.871 0-3.268-1.35-3.268-3.34 0-1.988 1.397-3.338 3.268-3.338 1.895 0 3.292 1.35 3.292 3.339 0 1.99-1.397 3.339-3.292 3.339zM146.875 23.737v-2.936h-2.676v-3.316l-3.055.924V20.8h-2.06v2.936h2.06v4.926c0 3.197 1.445 4.452 5.731 3.978v-2.77c-1.752.094-2.676.07-2.676-1.208v-4.926h2.676zM150.544 19.38c1.042 0 1.895-.853 1.895-1.871s-.853-1.895-1.895-1.895c-1.018 0-1.87.877-1.87 1.895a1.89 1.89 0 001.87 1.87zm-1.515 13.261h3.055v-11.84h-3.055v11.84zM160.516 32.973c3.481 0 6.276-2.724 6.276-6.252 0-3.529-2.795-6.252-6.276-6.252s-6.252 2.723-6.252 6.252c0 3.528 2.771 6.252 6.252 6.252zm0-2.984c-1.8 0-3.197-1.35-3.197-3.268 0-1.918 1.397-3.268 3.197-3.268 1.824 0 3.221 1.35 3.221 3.268 0 1.918-1.397 3.268-3.221 3.268zM175.524 20.469c-1.586 0-2.818.592-3.528 1.658V20.8h-3.055v11.84h3.055v-6.394c0-2.06 1.113-2.936 2.605-2.936 1.373 0 2.344.829 2.344 2.439v6.891H180v-7.27c0-3.15-1.966-4.902-4.476-4.902z"
              />
            </svg>
            <blockquote className="mt-8">
              <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p>
                  &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita
                  voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et
                  corporis.&rdquo;
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base leading-6 font-medium text-gray-900">
                      Judith Black
                    </div>

                    <svg
                      className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div className="text-base leading-6 font-medium text-gray-500">
                      CEO, Workcation
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section> */}

      {/* CTA */}

      <div className="bg-indigo-50">
        <div className="max-w-screen-md mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 md:text-4xl md:leading-10">
            <span className="block">Ready to dive in?</span>
            <span className="block text-primary">Let's work together.</span>
          </h2>
          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div className="inline-flex rounded-md shadow">
              <ButtonLink href="/contact">Get started</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
