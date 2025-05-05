"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)

    // Encode the message properly for mailto
    const encodedSubject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const encodedBody = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)

    // Create mailto link with form data
    const mailtoLink = `mailto:bartonhenry15@gmail.com?subject=${encodedSubject}&body=${encodedBody}`

    // Open the email client
    window.open(mailtoLink, "_blank")

    // Show success state
    setTimeout(() => {
      setIsSending(false)
      setIsSent(true)

      // Reset form
      setName("")
      setEmail("")
      setMessage("")

      // Reset success message after 5 seconds
      setTimeout(() => setIsSent(false), 5000)
    }, 1000)
  }

  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
      {isSent ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900/30 text-green-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-400">Your message has been sent to Henry. He'll get back to you soon!</p>
          <Button
            onClick={() => setIsSent(false)}
            className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
              required
            ></textarea>
          </div>
          <Button
            type="submit"
            disabled={isSending}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            {isSending ? "Sending..." : "Send Message"}
          </Button>

          <div className="mt-4 text-center text-gray-400 text-sm">
            <p>This will open your default email client with your message.</p>
            <p className="mt-1">
              Alternatively, email directly to:{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bartonhenry15@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                bartonhenry15@gmail.com
              </a>
            </p>
          </div>
        </form>
      )}
    </div>
  )
}
