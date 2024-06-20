
"use client"

import React, { useState } from 'react'

export default function ContactFormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Here you would normally send the form data to your server
    // For this example, we'll just log it and display a success message
    console.log(formData)
    
    // Simulate a successful submission
    setSubmitted(true)
  }

  return (
    <div className="flex items-center justify-center py-8">
      <div className="bg-white p-2 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        {submitted ? (
          <div className="text-green-500">Thank you for your message!</div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg rounded-b-lg font-bold py-2 px-4 rounded inline-flex items-center transform transition-transform duration-300 shadow-md hover:bg-purple-800 hover:scale-105">Send</button>
          </form>
        )}
      </div>
    </div>
  )
}

