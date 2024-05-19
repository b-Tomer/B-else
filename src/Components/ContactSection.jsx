import React from 'react'

export default function ContactSection() {
  return (
    <section id='contact' dir='ltr' className='bg-main-orange'>
         <div className=" p-8 w-full max-w-xl mx-auto ">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact us</h2>
      <p className="mb-8 text-gray-600">Subheading for description or instructions</p>
      <form className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            placeholder="Smitherton"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            placeholder="email@janesfakedomain.net"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            placeholder="Enter your question or message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          Submit
        </button>
      </form>
    </div>
    </section>
  )
}
