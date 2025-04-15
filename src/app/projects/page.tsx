import Link from "next/link";
import BokehBackground from "@/components/BokehBackground";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const TAG = "border border-purple-400/50 text-purple-100 text-sm px-3 py-0.5 rounded-xl bg-purple-400/20 hover:border-purple-400/60 hover:bg-purple-400/30"
const DESCRIPTION = "mt-2 text-base text-purple-100/80"
const PROJECT = "text-xl mt-5 font-semibold text-purple-100 font-mono"
const IMAGE = "max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40 -mx-6 -mt-6"
const PANEL = "bg-black/40 text-white p-6 rounded-3xl shadow-lg overflow-hidden transition-transform duration-250 ease-in-out hover:scale-105 active:scale-95"

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col justify-between font-hand px-6 py-10 select-none">
      {/* Background */}
      <div className="absolute inset-0 z-[-10] bg-gradient-to-b from-[#0a0014] to-[#1b004b]" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BokehBackground />
      </div>

      {/* Content */}
      <div className="relative z-20 text-purple-100 w-full flex-1 flex flex-col ">
        {/* Navigation */}
        <nav className="text-center text-xl font-bold space-x-6 mb-12">
          <Link href="/" className="hover:underline hover:scale-125 decoration-purple-300 underline-offset-4">home</Link>
          <Link href="/about" className="hover:underline decoration-purple-300 underline-offset-4">about</Link>
          <Link href="/projects" className="hover:underline decoration-purple-300 underline-offset-4">projects</Link>
          <Link href="/contact" className="hover:underline decoration-purple-300 underline-offset-4">contact</Link>
        </nav>

        {/* Projects Heading */}
        <div className="text-center mb-10 mt-10 animate__animated animate__fadeIn">
          <h2 className="text-5xl font-bold text-purple-400 mb-5">my projects</h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Here’s a curated selection of my development work — ranging from web apps to creative experiments. Each project highlights a unique challenge and my approach to solving it.
          </p>
        </div>

        {/* Projects Overview */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-6 px-6 lg:px-56 justify-center animate__animated animate__slideInUp">
          <div className="flex flex-col gap-6">
            <div className="relative group transition-all duration-500 ease-in-out break-inside-avoid">
              <div className={PANEL}>
                <div className={IMAGE}>
                  <div className="w-full shadow shadow-purple-200 h-60 bg-cover bg-center" style={{ backgroundImage: "url('/portfolio-website.png')" }} />
                </div>
                <h2 className={PROJECT}>portfolio-website</h2>
                <p className={DESCRIPTION}>A fully responsive portfolio website built with Next.js, Tailwind CSS, and React.</p>
                <div className="mt-3 flex gap-2 mt-2 flex-wrap">
                  <span className={TAG}>typescript</span>
                  <span className={TAG}>Next.js</span>
                  <span className={TAG}>Tailwind</span>
                  <span className={TAG}>React</span>
                </div>
              </div>
            </div>
            <div className="relative group transition-all duration-500 ease-in-out break-inside-avoid">
              <div className={PANEL}>
                <div className={IMAGE}>
                  <div className="w-full shadow shadow-purple-200 h-60 bg-cover bg-center" style={{ backgroundImage: "url('/sample.png')" }} />
                </div>
                <h2 className={PROJECT}>Project 4</h2>
                <p className={DESCRIPTION}>Description of project 4.</p>
                <div className="mt-3 flex gap-2 mt-2 flex-wrap">
                  <span className={TAG}>python</span>
                  <span className={TAG}>swift</span>
                  <span className={TAG}>huggingface</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative group transition-all duration-500 ease-in-out break-inside-avoid">
              <div className={PANEL}>
                <div className={IMAGE}>
                  <div className="w-full shadow shadow-purple-200 h-60 bg-cover bg-center" style={{ backgroundImage: "url('/sample.png')" }} />
                </div>
                <h2 className={PROJECT}>Project 2</h2>
                <p className={DESCRIPTION}>Description of project 2.</p>
                <div className="mt-3 flex gap-2 mt-2 flex-wrap">
                  <span className={TAG}>python</span>
                  <span className={TAG}>swift</span>
                  <span className={TAG}>huggingface</span>
                </div>
              </div>
            </div>
            <div className="relative group transition-all duration-500 ease-in-out break-inside-avoid">
              <div className={PANEL}>
                <div className={IMAGE}>
                  <div className="w-full shadow shadow-purple-200 h-60 bg-cover bg-center" style={{ backgroundImage: "url('/sample.png')" }} />
                </div>
                <h2 className={PROJECT}>Project 5</h2>
                <p className={DESCRIPTION}>Description of project 5.</p>
                <div className="mt-3 flex gap-2 mt-2 flex-wrap">
                  <span className={TAG}>python</span>
                  <span className={TAG}>swift</span>
                  <span className={TAG}>huggingface</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative group transition-all duration-500 ease-in-out break-inside-avoid">
              <div className={PANEL}>
                <div className={IMAGE}>
                  <div className="w-full shadow shadow-purple-200 h-60 bg-cover bg-center" style={{ backgroundImage: "url('/sample.png')" }} />
                </div>
                <h2 className={PROJECT}>Project 3</h2>
                <p className={DESCRIPTION}>Description of project 3.</p>
                <div className="mt-3 flex gap-2 mt-2 flex-wrap">
                  <span className={TAG}>python</span>
                  <span className={TAG}>swift</span>
                  <span className={TAG}>huggingface</span>
                </div>
              </div>
            </div>
            <div className="relative group transition-all duration-500 ease-in-out break-inside-avoid">
              <div className={PANEL}>
                <div className={IMAGE}>
                  <div className="w-full shadow shadow-purple-200 h-60 bg-cover bg-center" style={{ backgroundImage: "url('/sample.png')" }} />
                </div>
                <h2 className={PROJECT}>Project 6</h2>
                <p className={DESCRIPTION}>Description of project 6.</p>
                <div className="mt-3 flex gap-2 mt-2 flex-wrap">
                  <span className={TAG}>python</span>
                  <span className={TAG}>swift</span>
                  <span className={TAG}>huggingface</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 sm:py-32 lg:py-40" />

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
