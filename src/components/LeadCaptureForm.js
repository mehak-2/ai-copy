'use client'

import { useState } from 'react'
import { Mail, Globe, Send, Loader } from 'lucide-react'

export default function LeadCaptureForm({ onSuccess }) {
    const [formData, setFormData] = useState({
        email: '',
        website: ''
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.email.trim() || !formData.website.trim()) {
            // Show error in console instead of notification
            console.log('Please fill in all fields')
            return
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            console.log('Please enter a valid email address')
            return
        }

        let website = formData.website
        if (!website.startsWith('http://') && !website.startsWith('https://')) {
            website = 'https://' + website
        }

        try {
            new URL(website)
        } catch {
            console.log('Please enter a valid website URL')
            return
        }

        // Simulate loading state
        setIsLoading(true)

        // Simulate API call delay
        setTimeout(() => {
            setIsLoading(false)
            console.log('Form submitted:', { email: formData.email.trim(), website: website })
            setFormData({ email: '', website: '' })
            onSuccess && onSuccess()
        }, 1000)
    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* TRUE ROW-WISE Layout - Always horizontal */}
                <div className="flex flex-col gap-3">
                    {/* Email Input */}
                    <div className="flex-1 relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 dark:text-gray-300 w-4 h-4" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 dark:focus:border-blue-400 text-gray-900 dark:text-gray-100 placeholder-gray-700 dark:placeholder-gray-400 transition-all duration-200 text-sm font-medium"
                            disabled={isLoading}
                        />
                    </div>

                    {/* Website Input */}
                    <div className="flex-1 relative">
                        <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 dark:text-gray-300 w-4 h-4" />
                        <input
                            type="text"
                            name="website"
                            placeholder="Enter your website"
                            value={formData.website}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 dark:focus:border-blue-400 text-gray-900 dark:text-gray-100 placeholder-gray-700 dark:placeholder-gray-400 transition-all duration-200 text-sm font-medium"
                            disabled={isLoading}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex-shrink-0 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-medium py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px] shadow-sm"
                    >
                        {isLoading ? (
                            <Loader className="w-4 h-4 animate-spin" />
                        ) : (
                            <>
                                <span className="text-sm">Send</span>
                                <Send className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
} 