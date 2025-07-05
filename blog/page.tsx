import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-9ia6eDunJrVNBR7E2DifbnS2SRdvu9.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-center pt-6 md:pt-8">
        <div className="flex space-x-8">
          <Link
            href="/"
            className="text-white hover:text-gray-300 transition-colors duration-200 text-base font-normal"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-base font-normal"
          >
            Blog
          </Link>
        </div>
      </nav>

      {/* Blog Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Blog</h1>
        </div>

        <div className="space-y-12">
          <article className="bg-black/20 backdrop-blur-sm border border-gray-400/20 rounded-lg p-8">
            <h2 className="text-xl md:text-2xl font-normal text-white mb-4">Coming Soon</h2>
            <p className="text-gray-400 leading-relaxed">
              Blog posts will be available soon. Stay tuned for updates and insights.
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
