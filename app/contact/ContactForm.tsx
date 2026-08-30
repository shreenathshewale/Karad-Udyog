'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Digital Marketing',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Full Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStatus('success')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
    }
  }

  if (status === 'success') {
    return (
      <div className="py-12 text-center space-y-4 p-8 rounded-xl bg-white border border-[#E2E8F0] shadow-sm">
        <div className="w-12 h-12 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <span className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-[#2563EB] block">
          INQUIRY TRANSMITTED SUCCESSFULLY
        </span>
        <h3 className="font-sans text-2xl font-black text-[#0F172A]">Thank You.</h3>
        <p className="text-xs font-sans text-[#475569] max-w-sm mx-auto leading-relaxed font-medium">
          Your objectives have been received by Uday Belwandkar and our lead strategy team. We will analyze your requirements and contact you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 sm:p-8 rounded-xl border border-[#E2E8F0] shadow-sm">
      {/* Name Input */}
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#0F172A] block">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Ramesh Patil"
          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-md px-4 py-3 text-sm font-sans font-medium focus:outline-none focus:border-[#2563EB] transition-colors text-[#0F172A]"
        />
        {errors.name && <span className="text-red-600 font-bold text-[11px] block">{errors.name}</span>}
      </div>

      {/* Email Input */}
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#0F172A] block">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. name@company.com"
          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-md px-4 py-3 text-sm font-sans font-medium focus:outline-none focus:border-[#2563EB] transition-colors text-[#0F172A]"
        />
        {errors.email && <span className="text-red-600 font-bold text-[11px] block">{errors.email}</span>}
      </div>

      {/* Phone Input */}
      <div className="space-y-1.5">
        <label htmlFor="phone" className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#0F172A] block">
          Phone / WhatsApp Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="e.g. +91 98765 43210"
          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-md px-4 py-3 text-sm font-sans font-medium focus:outline-none focus:border-[#2563EB] transition-colors text-[#0F172A]"
        />
      </div>

      {/* Service Selection */}
      <div className="space-y-1.5">
        <label htmlFor="service" className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#0F172A] block">
          Primary Capability Required
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-md px-4 py-3 text-sm font-sans font-medium focus:outline-none focus:border-[#2563EB] transition-colors text-[#0F172A]"
        >
          <option value="Digital Marketing">Digital Marketing & Growth Strategy</option>
          <option value="Search Engine Optimization">Search Engine Optimization (SEO)</option>
          <option value="Local SEO & Google Maps">Local SEO & Google Maps</option>
          <option value="Google Ads (PPC)">Google Ads (PPC)</option>
          <option value="Meta Ads (FB & Insta)">Meta Ads (Facebook & Instagram)</option>
          <option value="Website Development">Website Development (Next.js/React)</option>
          <option value="Web Design & UI/UX">Web Design & UI/UX</option>
          <option value="Brand Strategy & Identity">Brand Strategy & Identity</option>
          <option value="Social Media Marketing">Social Media Management & Local Reels</option>
          <option value="Promote on Karad Instagram">Promote on Karad Instagram Channel (~1.5k followers)</option>
          <option value="Other">Other Custom Agency Solutions</option>
        </select>
      </div>

      {/* Message Textarea */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#0F172A] block">
          Project Brief & Objectives
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your current commercial goals or local marketing requirements..."
          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-md px-4 py-3 text-sm font-sans font-medium focus:outline-none focus:border-[#2563EB] transition-colors text-[#0F172A] resize-none"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === 'submitting'}
          className="w-full"
        >
          {status === 'submitting' ? 'Submitting Inquiry...' : 'Submit Inquiry'}
        </Button>
      </div>
    </form>
  )
}
