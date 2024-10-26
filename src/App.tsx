import React from 'react';
import { Cpu, Brain, BookOpen, Twitter, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

function NewsletterSection({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-6 h-6 text-pink-400" />
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      <p className="text-gray-200">{description}</p>
      <button className="mt-4 text-sm text-white/80 hover:text-white flex items-center gap-1">
        Read more <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  );
}

function SocialLink({ icon: Icon, href }: { icon: React.ElementType, href: string }) {
  return (
    <a href={href} className="text-white/70 hover:text-white transition-colors">
      <Icon className="w-5 h-5" />
    </a>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Brain className="w-16 h-16 text-pink-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Daily Dev Newsletter
          </h1>
          <p className="text-gray-300 text-lg">
            Your daily dose of tech insights and AI innovations
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
            alt="AI Technology"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Content Sections */}
        <div className="grid gap-6 mb-12">
          <NewsletterSection 
            icon={Cpu}
            title="Latest Tech News"
            description="Breaking updates from the world of technology, curated just for you."
          />
          <NewsletterSection 
            icon={Brain}
            title="AI Insights"
            description="Deep dives into artificial intelligence trends and breakthroughs."
          />
          <NewsletterSection 
            icon={BookOpen}
            title="Exclusive Tips & Tutorials"
            description="Expert guidance to level up your development skills."
          />
        </div>

        {/* CTA */}
        <div className="text-center mb-12">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105">
            Subscribe Now
          </button>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              <SocialLink icon={Twitter} href="#" />
              <SocialLink icon={Linkedin} href="#" />
              <SocialLink icon={Github} href="#" />
              <SocialLink icon={Mail} href="#" />
            </div>
            <div className="text-white/70 text-sm">
              <a href="#" className="hover:text-white">Unsubscribe</a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
          <div className="text-center mt-8 text-white/50 text-sm">
            © 2024 Daily Dev Newsletter. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;