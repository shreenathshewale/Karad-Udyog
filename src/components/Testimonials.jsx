import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';

const reviews = [
  {
    id: 1,
    quote: "Professional Social Media Marketing मुळे आमच्या व्यवसायाची ओळख वाढली",
    name: "विकास आतकरे",
    business: "Shivnandan 5 Star Snacks"
  },
  {
    id: 2,
    quote: "Premium Designs आणि Branding मुळे ग्राहकांचा विश्वास वाढला",
    name: "संतोष बेलवणकर",
    business: "Jewellery Shop"
  },
  {
    id: 3,
    quote: "Offer Campaigns मुळे नवीन ग्राहक मिळाले",
    name: "अक्षय देवकातकर",
    business: "Electronic Shop"
  },
  {
    id: 4,
    quote: "Creative Marketing आणि उत्कृष्ट Support",
    name: "अक्रम शेख",
    business: "Plastic Bag Business"
  },
  {
    id: 5,
    quote: "Lead Generation आणि Branding मध्ये चांगले परिणाम",
    name: "अख्तर अत्तार",
    business: "Solar Sales & Services"
  },
  {
    id: 6,
    quote: "Professional Marketing Support मुळे चौकशी वाढली",
    name: "संदेश चौधरी",
    business: "Solar Installation"
  },
  {
    id: 7,
    quote: "Creative Reels आणि Social Media Growth उत्कृष्ट",
    name: "सम्राट वाघमारे",
    business: "AC Installation"
  },
  {
    id: 8,
    quote: "Luxury Branding आणि Professional Designs खूप आवडले",
    name: "अभिराज चिंटककर",
    business: "Jewellers Shop"
  },
  {
    id: 9,
    quote: "Digital Marketing मुळे Tour Enquiries आणि Customer Reach वाढली",
    name: "अर्यान फकीर",
    business: "Travel Agency"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-brandBg py-20 md:py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      
      {/* Background Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-brandPrimary/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandSurface border border-white/5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brandPrimary" />
            <span className="font-outfit text-xs font-semibold uppercase tracking-widest text-brandPrimary">
              CLIENT SUCCESS STORIES
            </span>
          </div>

          <h2 className="font-devanagari text-3xl md:text-5xl font-black text-brandText leading-tight text-glow-gold mb-4">
            आमच्या ग्राहकांचे अनुभव
          </h2>
          <p className="font-outfit text-base md:text-lg text-brandMuted max-w-2xl mx-auto leading-relaxed">
            कराड आणि महाराष्ट्रातील विविध व्यवसायांनी Karad Udyog सोबत काम करून मिळवलेले अनुभव.
          </p>
        </motion.div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {reviews.map((review, idx) => {
          // Extract initials
          const nameParts = review.name.trim().split(' ');
          const initial = nameParts.length > 0 ? nameParts[0].charAt(0) : '?';

          return (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col justify-between p-8 rounded-[24px] bg-[#111] border border-white/10 hover:border-brandPrimary/40 transition-all duration-300 group shadow-[0_0_0_rgba(255,212,0,0)] hover:shadow-[0_8px_30px_-4px_rgba(255,212,0,0.15)] hover:-translate-y-1"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brandPrimary text-brandPrimary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-devanagari text-[17px] leading-relaxed text-brandText/90 mb-8 italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-brandPrimary/10 border border-brandPrimary/20 flex items-center justify-center text-brandPrimary font-outfit font-black text-xl shrink-0 group-hover:bg-brandPrimary/20 transition-colors">
                  {initial}
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-devanagari text-base font-bold text-brandText group-hover:text-brandPrimary transition-colors">
                    {review.name}
                  </h4>
                  <p className="font-outfit text-xs text-brandMuted font-medium uppercase tracking-wider mt-0.5">
                    {review.business}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
