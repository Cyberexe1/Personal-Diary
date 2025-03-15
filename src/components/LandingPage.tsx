import React from 'react';
import { Book, Edit, Palette, Search, Brain, Bell, ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onOpenDiary: () => void;
}

export function LandingPage({ onOpenDiary }: LandingPageProps) {
  const features = [
    {
      icon: <Edit className="h-8 w-8 text-blue-500" />,
      title: 'Rich Text Editing',
      description: 'Format your thoughts your way – bold, italic, colors, and more!'
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-500" />,
      title: 'Customization',
      description: 'Dark mode, custom fonts, themes – make it truly yours!'
    },
    {
      icon: <Book className="h-8 w-8 text-green-500" />,
      title: 'Multimedia Support',
      description: 'Attach images, voice notes & even handwritten sketches!'
    },
    {
      icon: <Search className="h-8 w-8 text-yellow-500" />,
      title: 'Powerful Search & Organization',
      description: 'Easily find past thoughts, tag your entries, and filter them effortlessly.'
    },
    {
      icon: <Brain className="h-8 w-8 text-red-500" />,
      title: 'Mood Tracking & AI Insights',
      description: 'Track how you feel & get insights from your writing!'
    },
    {
      icon: <Bell className="h-8 w-8 text-indigo-500" />,
      title: 'Reminders & Habit Building',
      description: 'Get notified to build a strong journaling habit.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Your Private Digital Diary – Secure, Simple, and Smart!
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Write, reflect, and organize your thoughts with ease. Your journal, your rules.
          </p>
          <button
            onClick={onOpenDiary}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Start Journaling Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        
        {/* Animated background effect */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Makes This Diary Special?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 transform hover:-translate-y-1"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            What Our Users Say
          </h2>
          <blockquote className="relative">
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 italic mb-4">
              "This diary app changed how I organize my thoughts. The mood tracker is a game-changer!"
            </p>
            <footer className="text-gray-500 dark:text-gray-400">
              — A Happy User
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Stay Inspired!</h3>
            <p className="mb-4">Subscribe for journaling tips and updates.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
} 