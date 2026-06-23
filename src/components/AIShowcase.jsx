import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Video, Calendar, Box, Instagram, Cpu, Rocket, CheckCircle2, Play } from 'lucide-react';

const serviceHighlights = [
  { icon: Video, title: 'AI Advertisement Videos' },
  { icon: Calendar, title: 'Festival Promotional Videos' },
  { icon: Box, title: 'Product Showcase Videos' },
  { icon: Instagram, title: 'Instagram Reels' },
  { icon: Cpu, title: 'AI Avatar Videos' },
  { icon: Rocket, title: 'Business Growth Campaigns' },
];

const benefits = [
  'Higher Engagement',
  'Better Brand Recall',
  'More Social Shares',
  'Modern Professional Image',
  'Better Ad Performance',
];

export default function AIShowcase() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="ai-video" className="relative bg-brandBg py-16 md:py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-brandPrimary/3 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandSurface border border-white/5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brandPrimary" />
            <span className="font-outfit text-xs font-semibold uppercase tracking-widest text-brandPrimary">
              AI Creative Studio
            </span>
          </div>

          <h2 className="font-outfit text-3xl md:text-5xl font-black text-brandText leading-tight mb-5 text-glow-gold">
            AI Videos That Make <br className="hidden md:block" />
            Businesses Stand Out
          </h2>

          <p className="font-outfit text-base text-brandMuted leading-relaxed max-w-2xl mx-auto">
            Festival videos, promotional ads, AI-powered content, product showcases and social media creatives designed for modern businesses.
          </p>
        </motion.div>

        {/* Real Demo Video with Premium Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full max-w-4xl mx-auto group mb-8"
        >
          {/* Gold Glow Shadow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-brandPrimary/30 via-brandPrimary/10 to-brandPrimary/30 rounded-[30px] blur-xl opacity-50 group-hover:opacity-100 transition duration-700 pointer-events-none" />
          
          <div className="relative rounded-[24px] overflow-hidden bg-[#111] shadow-2xl z-10 flex items-center justify-center border border-yellow-500/20 min-h-[300px]">
            <video
              ref={videoRef}
              controls={isPlaying}
              preload="metadata"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-auto rounded-[24px] object-cover scale-[1.01]"
              style={{ maxHeight: '70vh' }}
            >
              <source src="/ai-demo-video.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>

            {/* Custom Overlay Thumbnail / Play Button */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer transition-all duration-300 hover:bg-black/30"
                onClick={handlePlayClick}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brandPrimary/20 border-2 border-brandPrimary flex items-center justify-center text-brandPrimary shadow-[0_0_30px_rgba(255,212,0,0.4)] group-hover:scale-110 transition-transform duration-500 mb-4">
                  <Play className="w-8 h-8 fill-current translate-x-1" />
                </div>
                <span className="font-outfit text-sm md:text-base font-bold text-white tracking-widest uppercase bg-black/50 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
                  ▶ Watch AI Demo
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Video Tags */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-4 mb-16"
        >
          {[
            '🎬 Real AI Promotional Video',
            '🚀 Created By Karad Udyog',
            '📱 Social Media Ready',
            '🎯 Business Growth Focused'
          ].map((tag) => (
            <span key={tag} className="font-outfit text-xs md:text-sm font-semibold text-brandText/80 tracking-wide px-4 py-2 rounded-full border border-white/10 bg-white/5">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-16"
        >
          {serviceHighlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-4 p-5 rounded-2xl bg-brandSurface/60 border border-white/5 hover:border-brandPrimary/30 hover:bg-brandPrimary/5 transition-all duration-300 group cursor-default text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brandPrimary/40 transition-colors">
                  <IconComponent className="w-5 h-5 text-brandPrimary" />
                </div>
                <span className="font-outfit text-sm font-bold text-brandText group-hover:text-brandPrimary transition-colors">
                  {item.title}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full flex flex-col items-center"
        >
          <h4 className="font-outfit text-sm font-bold text-brandPrimary uppercase tracking-widest mb-6">
            Why Businesses Love AI Videos
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brandPrimary shrink-0" />
                <span className="font-outfit text-xs md:text-sm text-brandText/80 font-semibold tracking-wide">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
