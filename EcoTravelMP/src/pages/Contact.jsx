import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', trip: 'Amazon' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email) {
      alert("Please fill name and email")
      return
    }
    setSubmitted(true)
    setTimeout(() => {
      alert(`✅ Thank you, ${form.name}! Your inquiry for ${form.trip} has been received. We'll reply within 24 hours.`)
      setForm({ name: '', email: '', message: '', trip: 'Amazon' })
      setSubmitted(false)
    }, 800)
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-6xl font-bold text-center mb-4">Get in Touch</h1>
      <p className="text-center text-green-400 mb-16">We reply in under 24 hours</p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-sm mb-2">Full Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-green-500" />
        </div>

        <div>
          <label className="block text-sm mb-2">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-green-500" />
        </div>

        <div>
          <label className="block text-sm mb-2">Preferred Trip</label>
          <select name="trip" value={form.trip} onChange={handleChange} className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4">
            <option>Amazon Rainforest</option>
            <option>Iceland Glaciers</option>
            <option>Himalayan Trek</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-2">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows="5" className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-green-500"></textarea>
        </div>

        <button
          type="submit"
          disabled={submitted}
          className="w-full py-6 bg-green-600 hover:bg-green-500 rounded-3xl text-xl font-bold transition-all active:scale-95"
        >
          {submitted ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  )
}

export default Contact