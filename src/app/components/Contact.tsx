import { Mail, Github, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center animate-slideUp">Get in Touch</h2>
        <div className="flex justify-center space-x-8 animate-fadeIn">
          <a href="mailto:contact@pulseprotocol.com" className="flex items-center text-black hover:text-gray-600 transition-colors">
            <Mail className="w-6 h-6 mr-2" />
            Email
          </a>
          <a href="https://github.com/pulse-protocol" target="_blank" rel="noopener noreferrer" className="flex items-center text-black hover:text-gray-600 transition-colors">
            <Github className="w-6 h-6 mr-2" />
            GitHub
          </a>
          <a href="https://twitter.com/pulse_protocol" target="_blank" rel="noopener noreferrer" className="flex items-center text-black hover:text-gray-600 transition-colors">
            <Twitter className="w-6 h-6 mr-2" />
            Twitter
          </a>
        </div>
      </div>
    </section>
  )
}

