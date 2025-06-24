'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [openFaq, setOpenFaq] = useState(null)

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email',
            details: ['support@axto.ai','info@axto.ai'],
            description: "We're here to help",
            action: (detail) => `mailto:${detail}`
        },
        // {
        //     icon: <Phone className="w-6 h-6" />,
        //     title: 'Phone',
        //     details: ['+1 (555) 123-4567'],
        //     description: 'Mon-Fri from 8am to 6pm',
        //     action: (detail) => `tel:${detail}`
        // },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Office',
            details: ['INDIA ',"USA", "EUROPE"],
            description: 'Global presence, Local support',
            action: (detail) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(detail)}`
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'Response Time',
            details: ['< 24 hours'],
            description: 'Quick and reliable'
        }
    ]

    const faqs = [
        {
            question: "What does Axto.ai actually do?",
            answer: "Axto.ai offers a 360° accessibility solution. It scans your website using AI, detects issues based on EAA, WCAG 2.2, and EN 301 549 standards, and generates a clear, actionable audit report. With an included support widget and access to our developer team, Axto.ai helps you identify, understand, and resolve accessibility barriers — all in one platform."
        },
     
        {
            question: "What's included in the audit report?",
            answer: "It is structured to help you and your development team clearly understand what needs to be addressed, based on internationally recognized accessibility standards such as WCAG 2.2, EAA, and EN 301 549."
        },
        {
            question: "What is the accessibility widget?",
            answer: "The accessibility widget is a built-in tool designed to enhance the browsing experience for users with diverse needs. Included in all subscription plans, it not only improves usability but also offers AI-powered monitoring to track accessibility performance over time — helping you maintain an inclusive digital experience."
        },
        {
            question: "Do I need technical knowledge to use Axto.ai?",
            answer: "Not at all. Axto.ai is designed to be simple and intuitive. You'll get a clear report of what needs to be fixed, and our team is here to support you through the process if needed."
        },
        {
            question: "Is this tool only for large companies?",
            answer: "No. Axto.ai is built for businesses of all sizes — from startups to enterprises — and scales according to your needs."
        },
        {
            question: "Is the audit report downloadable for free?",
            answer: "The downloadable audit report is only available with a subscription plan. Similarly, access to the accessibility widget is also included in subscription plans."
        },
    ]

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 2000))
            setIsSubmitted(true)
            setFormData({
                name: '',
                email: '',
                company: '',
                subject: '',
                message: ''
            })
        } catch (error) {
            console.error('Form submission error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <Header />
                <div className="pt-20 mt-28 md:mt-16 lg:mt-20  pb-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                                <CheckCircle className="w-16 h-16 text-green-500 dark:text-green-400 mx-auto mb-6" />
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    Thank You!
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                                    We've received your message and will get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="btn-primary"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />

            <div className="pt-20 mt-28 md:mt-16 lg:mt-20  pb-16">
                {/* Hero Section */}
                <section className="bg-white dark:bg-gray-900 py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                Get in Touch
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300">
                                Have questions about website auditing? Want to discuss a custom solution?
                                We'd love to hear from you
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Info */}
                <section className="py-16 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="text-center group">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-6 group-hover:bg-primary-600 dark:group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                                        {info.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {info.title}
                                    </h3>
                                    <div className="space-y-1">
                                        {info.details.map((detail, idx) => (
                                            info.action ? (
                                                <Link
                                                    key={idx}
                                                    href={info.action(detail)}
                                                    target={info.title === 'Office' ? '_blank' : undefined}
                                                    rel={info.title === 'Office' ? 'noopener noreferrer' : undefined}
                                                    className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 block"
                                                >
                                                    {detail}
                                                </Link>
                                            ) : (
                                                <p key={idx} className="text-primary-600 dark:text-primary-400 font-medium">
                                                    {detail}
                                                </p>
                                            )
                                        ))}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                                        {info.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="py-16 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                   Let's Connect
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300">
                                   Together, we'll make your website fully accessible and EAA compliant
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                                                placeholder="Your company"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Subject *
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="support">Technical Support</option>
                                                <option value="billing">Billing Question</option>
                                                <option value="partnership">Partnership</option>
                                                <option value="feature">Feature Request</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200 resize-none"
                                            placeholder="Tell us more about your inquiry..."
                                        />
                                    </div>

                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px]"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                                >
                                    Frequently Asked Questions
                                </motion.h2>
                               
                            </div>

                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                                    >
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className="w-full px-8 py-5 flex items-center justify-between text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                                        >
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                                                {faq.question}
                                            </h3>
                                            <motion.div 
                                                className="flex-shrink-0"
                                                animate={{ rotate: openFaq === index ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {openFaq === index ? (
                                                    <Minus className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                                ) : (
                                                    <Plus className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                                )}
                                            </motion.div>
                                        </button>
                                        <AnimatePresence mode="wait">
                                            {openFaq === index && (
                                                <motion.div 
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ 
                                                        duration: 0.4,
                                                        ease: [0.4, 0, 0.2, 1],
                                                        opacity: { duration: 0.3 }
                                                    }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-8 pb-6">
                                                        <motion.p 
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            transition={{ 
                                                                duration: 0.3,
                                                                delay: 0.1,
                                                                ease: "easeOut"
                                                            }}
                                                            className="text-gray-600 dark:text-gray-300 leading-relaxed"
                                                        >
                                                            {faq.answer}
                                                        </motion.p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )
} 