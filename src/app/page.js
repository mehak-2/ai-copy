import dynamic from 'next/dynamic';
import {
    ArrowRight,
    FileText,
    Sparkles,
    Target,
    TrendingUp
} from 'lucide-react'
import Link from 'next/link'

const BlogCardHome = dynamic(() => import('@/components/BlogCardHome'));
const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'));
const Footer = dynamic(() => import('@/components/Footer'));
const Header = dynamic(() => import('@/components/Header'));
const HowItWorks = dynamic(() => import('@/components/HowItWorks'));
const LeadCaptureSection = dynamic(() => import('@/components/LeadCaptureSection'));
const CountdownTimer = dynamic(() => import('@/components/CountdownTimer'));
const LogoMarquee = dynamic(() => import('@/components/LogoMarquee'));
const HeaderCountdown = dynamic(() => import('@/components/HeaderCountdown'));
const Webinar = dynamic(() => import('@/components/Webinar'));
const RealUserTestimonial = dynamic(() => import('@/components/RealUserTestimonial'));
import { fetchBlogs } from '@/lib/api'

// Generate metadata for SEO
export const metadata = {
    title: 'Axto.ai - AI-Powered EAA Scanner | EU Accessibility Compliance',
    description: 'Instantly detect & fix EU Accessibility violations with our AI-powered scanner. Generate detailed PDF reports and boost your rankings while avoiding fines.',
    keywords: ['EU accessibility', 'EAA compliance', 'website audit', 'accessibility scanner', 'WCAG compliance', 'web accessibility'],
    authors: [{ name: 'Axto.ai Team' }],
    openGraph: {
        title: 'Axto.ai - AI-Powered EAA Scanner',
        description: 'Instantly detect & fix EU Accessibility violations with comprehensive website analysis and AI-powered suggestions.',
        type: 'website',
        url: 'https://axto.ai',
        siteName: 'Axto.ai',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Axto.ai - AI-Powered EAA Scanner',
        description: 'Instantly detect & fix EU Accessibility violations with our AI-powered scanner.',
        site: '@axto.ai',
    },
}

export default async function Home() {
    // Fetch latest blog posts for the homepage
    let latestBlogs = []
    try {
        const blogsResult = await fetchBlogs({
            limit: 3, // Only show 3 posts on homepage
            sortBy: 'createdAt',
            sortOrder: 'desc'
        })
        latestBlogs = blogsResult.blogs
    } catch (error) {
        console.error('Error fetching blogs for homepage:', error)
        // Continue without blogs if API fails
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
         
            <Header /> 
          

            <section className="relative min-h-screen flex mt-28 md:mt-16 lg:mt-24 items-center justify-center overflow-hidden pb-10">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
                    {/* Animated gradient orbs */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                    <div className="text-center max-w-5xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800 border border-white/40 dark:border-gray-700 rounded-full px-6 py-2 mb-8 animate-fade-in hover:bg-white/90 dark:hover:bg-gray-700 transition-all duration-300 cursor-default">
                            <Sparkles className="w-4 h-4 text-purple-700 dark:text-purple-300 animate-pulse" />
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                AI-Powered EAA Scanner
                            </span>
                        </div>
 
                        {/* Main Heading with Animated Gradients */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
                           <span className="block text-gray-900 dark:text-white mb-2">
  Avoid Fines Upto{' '}
  <span className="font-bold text-red-700 dark:text-red-400">€100,000</span>
</span>
                            <span className="block text-blue-700 dark:text-blue-300 font-extrabold">
                                Instantly Detect & Fix
                            </span>
                            <span className="block text-gray-900 dark:text-white mt-2">
                                
                                <span className="text-emerald-700 dark:text-emerald-300 font-extrabold">
                                    EU Accessibility Violations
                                </span>{' '}
 
                            </span>
                        </h1>

                        {/* Subtitle */}
                        

                        {/* Compliance Standards Line */}
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300 font-medium">
                            Scan your website for{' '}
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x bg-300% font-semibold">
                                WCAG 2.2
                            </span>
                            ,{' '}
                            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x bg-300% font-semibold">
                                EN 301 549
                            </span>
                            , and{' '}
                            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent animate-gradient-x bg-300% font-semibold">
                                WSG 1.0
                            </span>
                            {' '}compliance!
                        </p>

                        {/* CTA Buttons - Fixed Animation */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400 mb-16">
                            <Link
                                href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`}
                                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-purple-500/30 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                            >
                                <Target className="w-5 h-5 relative z-20" />
                                <span className="relative z-20">Free EAA Audit</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-20" />

                                {/* Shine effect - Fixed */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>

                                {/* Subtle pulse effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </Link>

                            <Link
                                href="/about"
                                className="group relative inline-flex items-center justify-center gap-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/60 hover:border-white/30 dark:hover:border-gray-600/60 transform hover:scale-[1.02] transition-all duration-300"
                            >
                                <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                <span>Get Full Access</span>
                            </Link>
                        </div>

                        {/* Animated Card Section: Scan, Detect, Solution, Solve */}
                       

                        {/* Stats Row - Enhanced */}
                        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
                            <div className="text-center p-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/30 hover:bg-white/15 dark:hover:bg-gray-800/40 hover:border-white/30 dark:hoveriv>:border-gray-600/40 transition-all duration-300 group cursor-default">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:scale-110 transition-transform duration-300">10K+</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">Websites Analyzed</div>
                            </div>
                           
                            <div className="text-center p-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/30 hover:bg-white/15 dark:hover:bg-gray-800/40 hover:border-white/30 dark:hoveriv>:border-gray-600/40 transition-all duration-300 group cursor-default">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:scale-110 transition-transform duration-300">24/7</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">AI Monitoring</div>
                            </div>
                            <div className="text-center p-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/30 hover:bg-white/15 dark:hover:bg-gray-800/40 hover:border-white/30 dark:hoveriv>:border-gray-600/40 transition-all duration-300 group cursor-default">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:scale-110 transition-transform duration-300">100%</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                            </div>
                            <div className="text-center p-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/30 hover:bg-white/15 dark:hover:bg-gray-800/40 hover:border-white/30 dark:hover:border-gray-600/40 transition-all duration-300 group cursor-default">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:scale-110 transition-transform duration-300">200+</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">Expert Developers</div>
                            </div>
                        </div> */}
                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10 animate-fade-in-up">
  {/* Scan Card */}
  <div className="relative bg-gradient-to-br from-blue-100 via-white to-cyan-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 rounded-2xl shadow-lg p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '100ms' }}>
    <Sparkles className="w-8 h-8 text-blue-700 dark:text-blue-300 mb-2 animate-pulse" />
    <h2 className="text-base font-semibold mb-1 text-gray-900 dark:text-white tracking-wide">Scan</h2>
    <div className="text-[11px] text-gray-900 dark:text-gray-100 mb-0.5 font-medium tracking-tight">Websites Analyzed</div>
    <div className="text-xl font-bold text-blue-900 dark:text-blue-200 transition-transform duration-300 group-hover:scale-110">10K+</div>
  </div>

  {/* Detect Card */}
  <div className="relative bg-gradient-to-br from-purple-100 via-white to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900 rounded-2xl shadow-lg p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
    <Target className="w-8 h-8 text-purple-700 dark:text-purple-300 mb-2 animate-bounce" />
    <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-1 tracking-wide">Detect</h2>
    <div className="text-[11px] text-gray-900 dark:text-gray-100 mb-0.5 font-medium tracking-tight">AI Monitoring</div>
    <div className="text-xl font-bold text-purple-900 dark:text-purple-200 transition-transform duration-300 group-hover:scale-110">24/7</div>
  </div>

  {/* Solution Card */}
  <div className="relative bg-gradient-to-br from-green-100 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-emerald-900 rounded-2xl shadow-lg p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '300ms' }}>
    <TrendingUp className="w-8 h-8 text-emerald-700 dark:text-emerald-300 mb-2 animate-pulse" />
    <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-1 tracking-wide">Solution</h2>
    <div className="text-[11px] text-gray-900 dark:text-gray-100 mb-0.5 font-medium tracking-tight">Client Satisfaction</div>
    <div className="text-xl font-bold text-emerald-900 dark:text-emerald-200 transition-transform duration-300 group-hover:scale-110">100%</div>
  </div>

  {/* Solve Card */}
  <div className="relative bg-gradient-to-br from-pink-100 via-white to-red-100 dark:from-gray-800 dark:via-gray-900 dark:to-pink-900 rounded-2xl shadow-lg p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '400ms' }}>
    <ArrowRight className="w-8 h-8 text-pink-700 dark:text-pink-300 mb-2 animate-bounce" />
    <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-1 tracking-wide">Solve</h2>
    <div className="text-[11px] text-gray-900 dark:text-gray-100 mb-0.5 font-medium tracking-tight">Expert Developers</div>
    <div className="text-xl font-bold text-pink-900 dark:text-pink-200 transition-transform duration-300 group-hover:scale-110">200+</div>
  </div>
</div>



                        {/* Floating Elements - Enhanced */}
                        <div className="absolute top-1/4 left-8 hidden lg:block animate-float">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-2xl rotate-12 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"></div>
                        </div>
                        <div className="absolute top-1/3 right-8 hidden lg:block animate-float animation-delay-1000">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"></div>
                        </div>
                        <div className="absolute bottom-1/4 left-16 hidden lg:block animate-float animation-delay-2000">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl -rotate-12 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"></div>
                        </div>
                    </div>
                </div>
            </section>
         

        
           

            {/* How It Works Section - New Framer Motion Component */}
            <HowItWorks />

            {/* Enhanced Features Section with Modal */}
            <FeaturesSection />
                
            <CountdownTimer />
            <Webinar/>
            
            {/* Logo Marquee Section */}
            <LogoMarquee />
            <RealUserTestimonial />

            {/* Blog Section - Enhanced with Real API Data */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20" id="blog">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary-200 dark:bg-primary-900 rounded-full px-4 py-2 mb-6">
                            <FileText className="w-4 h-4 text-primary-800 dark:text-primary-200" />
                            <span className="text-sm font-medium text-primary-900 dark:text-primary-100">Latest Insights</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Expert Web Optimization Tips
                        </h2>
                        <p className="text-xl text-gray-800 dark:text-gray-100 max-w-2xl mx-auto">
                            Stay ahead with the latest accessibility insights, compliance tips, and web optimization strategies
                        </p>
                    </div>

                    {latestBlogs.length > 0 ? (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                                {latestBlogs.map((blog) => (
                                    <BlogCardHome key={blog._id || blog.id} blog={blog} />
                                ))}
                            </div>

                            <div className="text-center mt-16">
                                <Link href="/blog" className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                                    <FileText className="w-5 h-5" />
                                    <span>Explore All Articles</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        </>
                    ) : (
                        // Fallback content when no blogs are available
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-primary-200 dark:bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <FileText className="w-8 h-8 text-primary-900 dark:text-primary-100" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                New Articles Coming Soon
                            </h3>
                            <p className="text-gray-900 dark:text-gray-100 max-w-md mx-auto mb-8">
                                We're preparing expert insights on web accessibility and EU compliance. Check back soon for the latest updates.
                            </p>
                            <Link href="/blog" className="btn-primary group">
                                Visit Blog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Lead Capture Section - New Minimal Component */}
            <LeadCaptureSection />

            <Footer />
        </div>
    )
} 