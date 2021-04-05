import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { InlineWidget } from 'react-calendly'

export default function ContactForm() {
  const budget = ['Less than $2K', '$2K - $5K', '$5K - $10K', '$10k+']

  useEffect(() => {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
    head.appendChild(script)
  }, [])

  return (
    <div className="relative bg-warm-gray-50">
      <main className="overflow-hidden">
        <div className="bg-warm-gray-50">
          <div className="py-24 lg:py-32">
            <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
                Start building your next project today.
              </h1>
              <p className="mt-6 text-xl text-warm-gray-500 max-w-3xl">
                With 3-2-1 Launch, we'll help you build an initial release of your software in three
                days, and schedule two additional weeks of refinement and bug fixing. <br />{' '}
                Important conditions apply.
              </p>
            </div>
          </div>
        </div>

        <section className="relative bg-white" aria-labelledby="contactHeading">
          <div className="absolute w-full h-1/2 bg-warm-gray-50" aria-hidden="true"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <svg
              className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
                    className="text-warm-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <h2 id="contactHeading" className="sr-only">
                Contact us
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-6">
                <div className="relative overflow-hidden py-10 bg-gradient-to-b from-teal-500 to-teal-600 lg:col-span-3">
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width="343"
                      height="388"
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff"></stop>
                          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width="359"
                      height="339"
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff"></stop>
                          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width="160"
                      height="678"
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff"></stop>
                          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="relative absolute top-0 right-0 mt-6 w-80 h-80 sm:w-96 sm:h-96 mx-auto"
                    // style={{ width: '500px', height: '500px' }}
                  >
                    <Image
                      src="/absurd_light.png"
                      layout="fill"
                      objectFit="cover"
                      alt="Absurdist Light Bulb"
                    />
                  </div>
                </div>

                {/* <!-- Contact form --> */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-3 xl:p-12">
                  {/* <h3 className="text-lg font-medium text-warm-gray-900">Send us a message</h3> */}
                  <InlineWidget
                    url="https://calendly.com/cs-ellis/15-min-discovery-call"
                    styles={{
                      height: '900px',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
