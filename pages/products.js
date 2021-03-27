import Layout from '../components/layout'
import ButtonLink from '../components/ButtonLink'
import Card from '../components/Card'
import SplitSection from '../components/SplitSection'

import HeroImage from '../svg/HeroImage'
import SvgCharts from '../svg/SvgCharts'
import Build from '../svg/Build'
import { NextSeo } from 'next-seo'

function Products() {
  const faqs = [
    {
      q: 'Does it really take 3 days to implement?',
      a:
        "Yes, it really does. There are certain types of projects that are suited for 3-2-1 Launch. Let's talk to see if your project is a good fit. ",
    },
    {
      q: 'Do I have to do the planning phase?',
      a: `We get it, you know what you want. The planning phase is one of the most important phases of building any project. It's where we narrow the most benefit down for you.`,
    },
    {
      q: `How can I help the project succeed?`,
      a: `Concentrate on what value you're trying to provide. Remember, in organizations there are cost centers and profit centers. What are you solving for?`,
    },
    {
      q: `When do we get started?`,
      a: `Your first step is to schedule a prospective client interview. We need to make sure your project is within the scope of 3-2-1 Launch.`,
    },
    {
      q: `Where are you located?`,
      a: `Our team is split between London and LA. We've worked with Fortune 500 companies, Venture Capital, boutique events companies and healthcare.`,
    },
  ]

  return (
    <Layout>
      <NextSeo
        title="CAE Web | Products"
        description="Building interactive business tools for the UK"
      />

      <div className="relative bg-white">
        <div className="bg-gray-50">
          {/* <!-- Header section --> */}
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-semibold text-cyan-600 uppercase tracking-wide">
                3-2-1 Launch
              </h1>
              <p className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Your idea, implemented in 3 days.
                <br /> No joke.
              </p>
              <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
                Aimed at clients who want a well-built, 1.0 version of their website in a brief
                amount of time.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Split brand panel --> */}
        <div className="relative bg-white">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-cyan-600 to-green-400"></div>
          </div>
          <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:px-8">
            <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
              <div className="max-w-lg mx-auto lg:mx-0">
                <h2 className="text-base font-semibold tracking-wide text-cyan-600 uppercase">
                  The Process
                </h2>
                <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  How we build it quickly
                </p>
                <dl className="mt-12 space-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute h-12 w-12 bg-gradient-to-r from-cyan-600 to-green-400 rounded-md flex items-center justify-center">
                        {/* <!-- Heroicon name: map --> */}
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="white"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                          ></path>
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Planning</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      During a week of planning we'll help you boil down your requirements to a
                      "minimum viable product".
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute h-12 w-12 bg-gradient-to-r from-cyan-600 to-green-400 rounded-md flex items-center justify-center">
                        {/* <!-- Heroicon name: filter --> */}
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="white"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          ></path>
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Building</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      We build an initial release of your software in just three days.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute h-12 w-12 bg-gradient-to-r from-cyan-600 to-green-400 rounded-md flex items-center justify-center">
                        {/* <!-- Heroicon name: filter --> */}
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="white"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                          ></path>
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Refining</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      We schedule two additional weeks of refinement and bug fixing.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute h-12 w-12 bg-gradient-to-r from-cyan-600 to-green-400 rounded-md flex items-center justify-center">
                        {/* <!-- Heroicon name: bell --> */}
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="white"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          ></path>
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Note</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      The suitability of your project for execution as a 3-2-1 Launch is subject to
                      important conditions.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-600 to-green-400 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-8">
              <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
                <div>
                  <h2 className="sr-only">Build time</h2>
                  <p className="relative grid grid-cols-2">
                    <span className="flex flex-col text-center">
                      <span className="text-5xl font-extrabold text-white tracking-tight">3</span>
                      <span className="mt-2 text-base font-medium text-cyan-100">day build</span>
                      <span className="sr-only">plus</span>
                    </span>
                    <span
                      className="pointer-events-none absolute h-12 w-full flex items-center justify-center"
                      aria-hidden="true"
                    >
                      {/* <!-- Heroicon name: outline/plus --> */}
                      <svg
                        className="h-6 w-6 text-cyan-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </span>
                    <span>
                      <span className="flex flex-col text-center">
                        <span className="text-5xl font-extrabold text-white tracking-tight">2</span>
                        <span className="mt-2 text-base font-medium text-cyan-100">revisions</span>
                      </span>
                    </span>
                  </p>
                </div>
                <ul className="rounded overflow-hidden grid gap-px sm:grid-cols-2">
                  {[
                    'Story Carding',
                    'Rapid Ideation',
                    'Iterative Development',
                    'User Strategy',
                    'UX Prototyping',
                    'Collaborative Design',
                  ].map((feature, index) => {
                    return (
                      <li
                        className="bg-cyan-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white"
                        key={index}
                      >
                        {/* <!-- Heroicon name: outline/check --> */}
                        <svg
                          className="h-6 w-6 text-cyan-200"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3">{feature}</span>
                      </li>
                    )
                  })}
                </ul>
                <a
                  target="_blank"
                  href="https://calendly.com/cs-ellis/30min"
                  className="w-full bg-white border border-transparent rounded-md py-4 px-8 flex items-center justify-center text-lg leading-6 font-medium text-cyan-700 hover:bg-cyan-50 md:px-10"
                >
                  Get started today
                </a>
                <div className="block text-center text-base font-medium text-cyan-100 hover:text-white">
                  Build your project quickly
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Logo cloud --> */}
        <div className="bg-white relative">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <h2 className="max-w-md mx-auto text-3xl font-extrabold text-cyan-900 text-center lg:max-w-xl lg:text-left">
                The world's most innovative companies use Workflow
              </h2>
              <div className="mt-8 flow-root lg:mt-0 self-center">
                <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                  <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                    <img
                      className="h-12"
                      src="https://tailwindui.com/img/logos/workcation-logo-cyan-900.svg"
                      alt="Workcation"
                    />
                  </div>
                  <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                    <img
                      className="h-12"
                      src="https://tailwindui.com/img/logos/tuple-logo-cyan-900.svg"
                      alt="Tuple"
                    />
                  </div>
                  <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                    <img
                      className="h-12"
                      src="https://tailwindui.com/img/logos/level-logo-cyan-900.svg"
                      alt="Level"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- FAQs --> */}
        <div className="relative bg-cyan-50 mx-auto ">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              Frequently asked questions
            </h2>
            <div className="mt-12">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <dt className="text-lg leading-6 font-medium text-gray-900">{faq.q}</dt>
                    <dd className="mt-2 text-base text-gray-500">{faq.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* <!-- CTA section --> */}
        <div className="bg-gradient-to-r from-cyan-600 to-green-400">
          <div className="max-w-2xl mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Let's have a call.</span>
              <span className="block text-cyan-900">Start building your solution today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-cyan-100">
              After a prospective client interview, we will work with you to develop a clear,
              realistic vision for your site and build it right the first time.
            </p>
            <a
              target="_blank"
              href="https://calendly.com/cs-ellis/30min"
              className="mt-8 w-full bg-cyan-50 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-cyan-700 hover:bg-cyan-100 sm:w-auto"
            >
              Get started!
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Products
