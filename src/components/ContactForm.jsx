import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  User,
  Building2,
  Phone,
  Mail,
  Sparkles,
  ChevronDown,
  Send,
  CheckCircle,
} from 'lucide-react';

/* ─── Constants ──────────────────────────────────────────── */
const BUDGETS = [
  '₹5,000 – ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000+',
  'Not Sure Yet',
];

const HIGH_VALUE_BUDGETS = ['₹50,000 – ₹1,00,000', '₹1,00,000+'];

const SERVICES = [
  'Social Media Marketing',
  'Instagram Reels & Content',
  'Meta Ads (Facebook / Instagram)',
  'Google Ads',
  'Website Development',
  'Logo & Branding Design',
  'AI Video Production',
  'Business Promotion Package',
  'Complete Digital Marketing',
  'Other / Custom Requirement',
];

const INITIAL = {
  name: '', business: '', mobile: '',
  email: '', service: '', budget: '', message: '',
};

const inputCls =
  'w-full bg-brandBg border border-white/8 rounded-xl px-4 py-3 font-outfit text-sm text-brandText placeholder:text-brandMuted/40 focus:outline-none focus:border-brandPrimary/50 focus:ring-1 focus:ring-brandPrimary/20 transition-all duration-300';

/* ─── WhatsApp message builder ────────────────────────────── */
const buildWhatsAppMessage = ({ name, business, mobile, email, service, budget, message }) => {
  const isHighValue = HIGH_VALUE_BUDGETS.includes(budget);
  const text =
`--------------------------------
🚀 NEW BUSINESS ENQUIRY${isHighValue ? '\n⭐ HIGH POTENTIAL LEAD' : ''}
--------------------------------

👤 Name:
${name}

🏢 Business:
${business}

📱 Mobile:
${mobile}

📧 Email:
${email || 'Not provided'}

🛠 Service Required:
${service}

💰 Expected Monthly Budget:
${budget || 'Not specified'}

📝 Message:
${message || 'No additional message.'}

--------------------------------
Please contact me regarding this enquiry.
--------------------------------`;
  return `https://wa.me/919577773167?text=${encodeURIComponent(text)}`;
};

/* ─── Field wrapper ───────────────────────────────────────── */
function Field({ icon: Icon, label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-outfit text-[11px] font-bold text-brandMuted uppercase tracking-widest flex items-center gap-1.5">
        <Icon className="w-3 h-3 text-brandPrimary" />
        {label}
      </label>
      {children}
      {error && <span className="font-outfit text-[10px] text-red-400">{error}</span>}
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────── */
export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | done

  const validate = () => {
    const e = {};
    if (!form.name.trim())     e.name     = 'Name is required';
    if (!form.business.trim()) e.business = 'Business name is required';
    if (!form.mobile.trim() || !/^[6-9]\d{9}$/.test(form.mobile.trim()))
      e.mobile = 'Enter a valid 10-digit mobile number';
    if (!form.service)         e.service  = 'Please select a service';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');
    const delay = HIGH_VALUE_BUDGETS.includes(form.budget) ? 1200 : 700;
    setTimeout(() => {
      window.open(buildWhatsAppMessage(form), '_blank', 'noopener,noreferrer');
      setStatus('done');
      setForm(INITIAL);
    }, delay);
  };

  return (
    <section
      id="contact-form"
      className="relative bg-brandBg py-12 md:py-16 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] rounded-full bg-brandPrimary/4 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandSurface border border-white/5 mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-brandPrimary" />
            <span className="font-outfit text-[10px] font-bold text-brandPrimary uppercase tracking-[0.18em]">
              Direct WhatsApp Enquiry
            </span>
          </div>
          <h2 className="font-outfit text-2xl md:text-3xl font-extrabold text-brandText mb-1.5">
            Contact Karad Udyog
          </h2>
          <p className="font-outfit text-sm text-brandMuted leading-relaxed">
            Tell us about your business and we'll connect with you on WhatsApp.
          </p>
        </motion.div>

        {/* ── Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="rounded-[24px] border border-white/8 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #111111 0%, #0d0d0d 100%)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* ── Left Info Panel ── */}
            <div className="lg:col-span-2 p-7 md:p-9 flex flex-col justify-between bg-gradient-to-br from-brandBg/80 to-[#0d0d0d] border-b lg:border-b-0 lg:border-r border-white/5">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-brandPrimary/10 border border-brandPrimary/20 flex items-center justify-center mb-5">
                  <MessageSquare className="w-5 h-5 text-brandPrimary" />
                </div>
                <h3 className="font-devanagari text-lg font-black text-brandText mb-2">
                  आम्हाला संपर्क करा
                </h3>
                <p className="font-outfit text-xs text-brandMuted leading-relaxed mb-7">
                  Submit this form and your enquiry opens directly on WhatsApp — no waiting, instant response.
                </p>

                {/* Contact links */}
                <div className="space-y-3">
                  {[
                    { icon: MessageSquare, label: 'WhatsApp', val: '+91 95777 73167', color: '#25D366', href: 'https://wa.me/919577773167' },
                    { icon: Phone,         label: 'Call Us',  val: '+91 95777 73167', color: '#FFD400', href: 'tel:+919577773167' },
                  ].map((c) => {
                    const Icon = c.icon;
                    return (
                      <a key={c.label} href={c.href}
                        target={c.label === 'WhatsApp' ? '_blank' : undefined}
                        rel={c.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                          style={{ background: `${c.color}18`, border: `1px solid ${c.color}30` }}>
                          <Icon className="w-3.5 h-3.5" style={{ color: c.color }} />
                        </div>
                        <div>
                          <p className="font-outfit text-[10px] text-brandMuted uppercase tracking-wider">{c.label}</p>
                          <p className="font-outfit text-sm font-bold text-brandText group-hover:text-brandPrimary transition-colors duration-300">{c.val}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Guarantee list */}
              <div className="mt-7 pt-5 border-t border-white/5">
                <p className="font-outfit text-[10px] text-brandMuted uppercase tracking-widest mb-2 font-bold">Our Promise</p>
                {['Free consultation, no obligation', 'Response within 30 minutes', 'Custom plan for your business'].map((p) => (
                  <div key={p} className="flex items-center gap-2 mb-1.5">
                    <CheckCircle className="w-3 h-3 text-brandPrimary shrink-0" />
                    <span className="font-outfit text-xs text-brandMuted">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right Form Panel ── */}
            <div className="lg:col-span-3 p-7 md:p-9">
              <AnimatePresence mode="wait">
                {status === 'done' ? (

                  /* Success */
                  <motion.div key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12 gap-5"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center">
                      <CheckCircle className="w-7 h-7 text-[#25D366]" />
                    </div>
                    <div>
                      <h4 className="font-devanagari text-xl font-black text-brandText mb-2">WhatsApp उघडले!</h4>
                      <p className="font-outfit text-sm text-brandMuted leading-relaxed max-w-xs mx-auto">
                        Your enquiry is pre-filled on WhatsApp. We'll respond within 30 minutes.
                      </p>
                    </div>
                    <button onClick={() => setStatus('idle')}
                      className="px-5 py-2.5 rounded-xl bg-brandSurface border border-white/10 hover:border-brandPrimary/30 text-brandText font-outfit text-xs font-semibold transition-all duration-300 cursor-pointer">
                      Send Another Enquiry
                    </button>
                  </motion.div>

                ) : (

                  /* Form */
                  <motion.form key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-4"
                  >
                    {/* Row: Name + Business */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field icon={User} label="Full Name *" error={errors.name}>
                        <input name="name" value={form.name} onChange={handleChange}
                          placeholder="Rajesh Patil"
                          className={`${inputCls} ${errors.name ? 'border-red-500/50' : ''}`} />
                      </Field>
                      <Field icon={Building2} label="Business Name *" error={errors.business}>
                        <input name="business" value={form.business} onChange={handleChange}
                          placeholder="ABC Traders"
                          className={`${inputCls} ${errors.business ? 'border-red-500/50' : ''}`} />
                      </Field>
                    </div>

                    {/* Row: Mobile + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field icon={Phone} label="Mobile Number *" error={errors.mobile}>
                        <input name="mobile" value={form.mobile} onChange={handleChange}
                          placeholder="9876543210" maxLength={10} inputMode="numeric"
                          className={`${inputCls} ${errors.mobile ? 'border-red-500/50' : ''}`} />
                      </Field>
                      <Field icon={Mail} label="Email (Optional)">
                        <input name="email" value={form.email} onChange={handleChange}
                          placeholder="email@example.com" type="email"
                          className={inputCls} />
                      </Field>
                    </div>

                    {/* Service */}
                    <Field icon={Sparkles} label="Service Required *" error={errors.service}>
                      <div className="relative">
                        <select name="service" value={form.service} onChange={handleChange}
                          className={`${inputCls} appearance-none pr-10 ${errors.service ? 'border-red-500/50' : ''}`}>
                          <option value="" disabled>Select a service...</option>
                          {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brandMuted pointer-events-none" />
                      </div>
                    </Field>

                    {/* Budget */}
                    <Field icon={ChevronDown} label="Expected Monthly Budget">
                      <div className="relative">
                        <select name="budget" value={form.budget} onChange={handleChange}
                          className={`${inputCls} appearance-none pr-10`}>
                          <option value="">Select budget range...</option>
                          {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brandMuted pointer-events-none" />
                      </div>
                      <p className="font-outfit text-[10px] text-brandPrimary/70 mt-0.5">
                        Your budget helps us recommend the most suitable growth strategy.
                      </p>
                      {/* High value badge */}
                      <AnimatePresence>
                        {HIGH_VALUE_BUDGETS.includes(form.budget) && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brandPrimary/10 border border-brandPrimary/30 w-fit"
                          >
                            <span className="text-sm">⭐</span>
                            <span className="font-outfit text-[11px] font-bold text-brandPrimary uppercase tracking-wider">
                              High Potential Lead — Priority Response
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Field>

                    {/* Message */}
                    <Field icon={MessageSquare} label="Current Requirement (Optional)">
                      <textarea name="message" value={form.message} onChange={handleChange}
                        rows={3} placeholder="Describe your business goals or current marketing challenges..."
                        className={`${inputCls} resize-none`} />
                    </Field>

                    {/* WhatsApp hint */}
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#25D366]/8 border border-[#25D366]/15">
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                      <p className="font-outfit text-[11px] text-[#25D366]/80">
                        Submitting opens <strong>WhatsApp</strong> with your details pre-filled for instant contact.
                      </p>
                    </div>

                    {/* Submit */}
                    <button type="submit" disabled={status === 'loading'}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-brandPrimary text-black font-outfit text-sm font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-brandPrimary/20 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                          Opening WhatsApp...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Enquiry on WhatsApp
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
