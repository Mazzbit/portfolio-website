import Link from "next/link";
import BokehBackground from "@/components/BokehBackground";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col justify-between font-hand px-6 py-10">
      {/* Background */}
      <div className="absolute inset-0 z-[-10] bg-gradient-to-b from-[#0a0014] to-[#1b004b]" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BokehBackground />
      </div>

      {/* Content */}
      <div className="relative z-20 text-purple-100 w-full flex-1 flex flex-col">
        {/* Navigation */}
        <nav className="text-center text-xl font-bold space-x-6 mb-12">
          <Link href="/" className="hover:underline hover:scale-125 decoration-purple-300 underline-offset-4">home</Link>
          <Link href="/about" className="hover:underline decoration-purple-300 underline-offset-4">about</Link>
          <Link href="/projects" className="hover:underline decoration-purple-300 underline-offset-4">projects</Link>
          <Link href="/contact" className="hover:underline decoration-purple-300 underline-offset-4">contact</Link>
        </nav>

        {/* Projects Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-purple-300 mb-4">My Projects</h2>
          <p className="text-lg text-purple-400 max-w-2xl mx-auto">
            Here’s a curated selection of my development work — ranging from web apps to creative experiments. Each project highlights a unique challenge and my approach to solving it.
          </p>
        </div>

        {/* Projects Overview */}
        <div className="mt-16 flex justify-center gap-6 px-6">
          <div className="flex flex-col gap-6 w-[350px]">
            <div className="relative group transition-all duration-500 ease-in-out break-inside-avoid">
              <div className="bg-black/30 border border-purple-500 text-white p-6 rounded-2xl shadow-lg overflow-hidden">
                <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40 border-b border-purple-700 -mx-6 -mt-6">
                  <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: "url('/sample.png')" }} />
                </div>
                <h2 className="text-2xl mt-2 font-semibold text-purple-100 font-mono">Project 1</h2>
                <p className="text-base text-purple-400">Descriptsj skjfs kgsd gsd jsdhvj sdij sdhj jsdh jdsh fjsdh fjsdh fjhsd fjhsd fjhs djfh sdjhf sdjh fjsdh fjhsd jfh sjhf sdjh fjhsd fjh sdjhf sdjh fion of project 1.</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">python</span>
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">swift</span>
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">huggingface</span>
                </div>
              </div>
            </div>
            <div className="relative group transition-all duration-500 ease-in-out break-inside-avoid">
              <div className="bg-black/30 border border-purple-500 text-white p-6 rounded-2xl shadow-lg overflow-hidden">
                <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40 border-b border-purple-700 -mx-6 -mt-6">
                  <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: "url('/sample.png')" }} />
                </div>
                <h2 className="text-2xl mt-2 font-semibold text-purple-100 font-mono">Project 4</h2>
                <p className="text-base text-purple-400">Description of project 4.</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">python</span>
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">swift</span>
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">huggingface</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[350px]">
            <div className="relative group transition-all duration-500 ease-in-out break-inside-avoid">
              <div className="bg-black/30 border border-purple-500 text-white p-6 rounded-2xl shadow-lg overflow-hidden">
                <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40 border-b border-purple-700 -mx-6 -mt-6">
                  <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: "url('/sample.png')" }} />
                </div>
                <h2 className="text-2xl mt-2 font-semibold text-purple-100 font-mono">Project 2</h2>
                <p className="text-base text-purple-400">Descript.</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">python</span>
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">swift</span>
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">huggingface</span>
                </div>
              </div>
            </div>
            <div className="relative group transition-all duration-500 ease-in-out break-inside-avoid">
              <div className="bg-black/30 border border-purple-500 text-white p-6 rounded-2xl shadow-lg overflow-hidden">
                <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40 border-b border-purple-700 -mx-6 -mt-6">
                  <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: "url('/sample.png')" }} />
                </div>
                <h2 className="text-2xl mt-2 font-semibold text-purple-100 font-mono">Project 5</h2>
                <p className="text-base text-purple-400">Description of project 5.</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">python</span>
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">swift</span>
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">huggingface</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[350px]">
            <div className="relative group transition-all duration-500 ease-in-out break-inside-avoid">
              <div className="bg-black/30 border border-purple-500 text-white p-6 rounded-2xl shadow-lg overflow-hidden">
                <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40 border-b border-purple-700 -mx-6 -mt-6">
                  <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: "url('/sample.png')" }} />
                </div>
                <h2 className="text-2xl mt-2 font-semibold text-purple-100 font-mono">Project 3</h2>
                <p className="text-base text-purple-400">Description of project 3.</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">python</span>
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">swift</span>
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">huggingface</span>
                </div>
              </div>
            </div>
            <div className="relative group transition-all duration-500 ease-in-out break-inside-avoid">
              <div className="bg-black/30 border border-purple-500 text-white p-6 rounded-2xl shadow-lg overflow-hidden">
                <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40 border-b border-purple-700 -mx-6 -mt-6">
                  <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: "url('/sample.png')" }} />
                </div>
                <h2 className="text-2xl mt-2 font-semibold text-purple-100 font-mono">Project 6</h2>
                <p className="text-base text-purple-400">Description of project 6.</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">python</span>
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">swift</span>
                  <span className="border border-purple-400 text-white text-sm px-3 py-0.5 rounded-lg">huggingface</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mb-0 text-center text-sm text-purple-200">
        {/* Social Links */}
        <section className="mb-4 flex justify-center mt-12 space-x-6 text-2xl">
              <a href="mailto:martin@example.com" className="hover:text-purple-400 transition" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="https://github.com/martinklug" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/martinklug" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </section>
        <p>Made with ♥ by Martin Klug</p>
        <p>© 2025</p>
      </footer>
    </main>
  );
}
