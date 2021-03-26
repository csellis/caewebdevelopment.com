import React, { useRef } from 'react'
import { useRouter } from 'next/router'

export default function ContactForm() {
  const router = useRouter()
  const form = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(form.current)
    let contactInfo = {}
    for (var piece of data.entries()) {
      contactInfo[piece[0]] = piece[1]
    }
    const sent = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactInfo),
    })

    console.log(sent)
    if (sent.status === 200) {
      router.push('/success')
    } else {
      router.push('/uhoh')
    }
  }

  const budget = ['Less than $2K', '$2K - $5K', '$5K - $10K', '$10k+']

  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
              Let's work together
            </h2>
            <p className="mt-4 text-lg leading-7 text-gray-500 sm:mt-3">
              We’d love to hear from you!
            </p>
            <div className="border-t-2 my-4 border-gray-100"></div>
            <p className="pt-12 text-center text-lg leading-7 text-gray-800 sm:mt-3 underline">
              <a target="_blank" href="https://calendly.com/cs-ellis/30min">
                Let's just talk
              </a>
            </p>

            <p className="pt-12 text-xl font-bold text-center leading-7 text-gray-800 sm:mt-3">
              - OR -
            </p>

            <form
              ref={form}
              name="contact"
              method="POST"
              onSubmit={handleSubmit}
              className="pt-16 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <input type="hidden" name="_redirect" value="https://caewebdevelopment.com/success" />
              <input type="hidden" name="formName" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you're human:
                  <input type="checkbox" name="_honeypot" tabIndex="-1" autoComplete="off" />
                </label>
              </p>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="how_can_we_help"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    How can we help you?
                  </label>
                </div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <textarea
                    name="how_can_we_help"
                    id="how_can_we_help"
                    rows="4"
                    className=""
                  ></textarea>
                </div>
              </div>

              <fieldset className="sm:col-span-2">
                <legend className="block text-sm font-medium leading-5 text-gray-700">
                  Expected budget
                </legend>
                <div className="mt-4 grid grid-cols-1 gap-y-4">
                  {budget.map((budgetItem) => {
                    const id = budgetItem.split(' ').join('_')

                    return (
                      <div className="flex items-center" key={id}>
                        <input
                          id={id}
                          name="budget"
                          value={id}
                          type="radio"
                          className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                        <label htmlFor={id} className="ml-3">
                          <span className="block text-sm leading-5 text-gray-700">
                            {budgetItem}
                          </span>
                        </label>
                      </div>
                    )
                  })}
                </div>
              </fieldset>

              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">
                  Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input name="name" type="text" id="name" className="" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input name="email" id="email" type="email" className="" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Company
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input name="company" type="text" id="company" className="" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Phone
                  </label>
                  <span className="text-sm leading-5 text-gray-500">Optional</span>
                </div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input name="phone" type="tel" id="phone" className="" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="how_did_you_hear_about_us"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  How did you hear about us?
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    name="how_did_you_hear_about_us"
                    id="how_did_you_hear_about_us"
                    type="text"
                    className=""
                  />
                </div>
              </div>
              <div className="text-right sm:col-span-2">
                <span className="inline-flex rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary hover:bg-primary-darker focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
