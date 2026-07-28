"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { SectionLayout } from "@/sections/SectionLayout"
import { BaseCard } from "@/components/cards/BaseCard"
import { ContactData } from "@/types"
import { animations } from "@/components/animations/presets"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react"

interface ContactSectionProps {
  contact: ContactData
}

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'github': return <Github className="w-5 h-5" />;
    case 'linkedin': return <Linkedin className="w-5 h-5" />;
    case 'twitter': return <Twitter className="w-5 h-5" />;
    default: return <Mail className="w-5 h-5" />;
  }
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <SectionLayout 
      title={contact.title} 
      description={contact.description}
      id="contact"
    >
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8"
        variants={animations.staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={animations.fadeUp} className="flex flex-col gap-8 h-full">
          <BaseCard className="p-8 flex flex-col h-full" hoverable={false}>
            <div>
              <h3 className="text-xl font-bold text-primary mb-8">Contact Information</h3>
              <div className="flex flex-col gap-6">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-4 text-muted hover:text-accent-orange transition-colors group">
                  <div className="p-4 rounded-xl bg-surface/50 group-hover:bg-accent-orange/10 group-hover:text-accent-orange transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary mb-1 uppercase tracking-wider">Email</p>
                    <p className="text-lg">{contact.email}</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 text-muted">
                  <div className="p-4 rounded-xl bg-surface/50 text-accent-blue">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary mb-1 uppercase tracking-wider">Location</p>
                    <p className="text-lg">{contact.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-8 border-t border-surface">
              <h3 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">Social Profiles</h3>
              <div className="flex flex-wrap gap-4">
                {contact.socials.map((social) => (
                  <a 
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface/30 text-muted hover:bg-surface hover:text-primary transition-all border border-surface/50 hover:border-surface hover:scale-105"
                  >
                    {getSocialIcon(social.platform)}
                    <span className="font-medium">{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </BaseCard>
        </motion.div>

        <motion.div variants={animations.fadeUp}>
          <BaseCard className="p-8 h-full" hoverable={false}>
            <h3 className="text-xl font-bold text-primary mb-8">Send a Message</h3>
            <form className="flex flex-col gap-5" action={`mailto:${contact.email}`} method="POST" encType="text/plain">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-muted">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface/30 border border-surface/50 focus:outline-none focus:ring-2 focus:ring-accent-orange text-primary transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-muted">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface/30 border border-surface/50 focus:outline-none focus:ring-2 focus:ring-accent-orange text-primary transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-muted">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-surface/30 border border-surface/50 focus:outline-none focus:ring-2 focus:ring-accent-orange text-primary transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full mt-4 gap-2 text-base font-semibold">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </BaseCard>
        </motion.div>
      </motion.div>
    </SectionLayout>
  )
}
