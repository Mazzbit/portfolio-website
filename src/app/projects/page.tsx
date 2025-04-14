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
          <Link href="/" className="hover:underline decoration-purple-300 underline-offset-4">home</Link>
          <Link href="/about" className="hover:underline decoration-purple-300 underline-offset-4">about</Link>
          <Link href="/projects" className="hover:underline decoration-purple-300 underline-offset-4">projects</Link>
          <Link href="/contact" className="hover:underline decoration-purple-300 underline-offset-4">contact</Link>
        </nav>

        {/* Projects Heading */}
        <h2 className="text-4xl font-bold text-purple-300 mb-8">Projects</h2>

        {/* Projects Overview */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-8">
          <div className="relative group overflow-hidden transform transition-all duration-300 hover:rotate-6 hover:scale-105">
            <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold">Project 1</h2>
              <p className="text-lg">Description of project 1.</p>
            </div>
          </div>
          <div className="relative group overflow-hidden transform transition-all duration-300 hover:rotate-6 hover:scale-105">
            <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold">Project 2</h2>
              <p className="text-lg">Description of project 2.</p>
            </div>
          </div>
          <div className="relative group overflow-hidden transform transition-all duration-300 hover:rotate-6 hover:scale-105">
            <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold">Project 3</h2>
              <p className="text-lg">Description of project 3.</p>
            </div>
          </div>
          <div className="relative group overflow-hidden transform transition-all duration-300 hover:rotate-6 hover:scale-105">
            <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold">Project 4</h2>
              <p className="text-lg">Description of project 4.</p>
            </div>
          </div>
          <div className="relative group overflow-hidden transform transition-all duration-300 hover:rotate-6 hover:scale-105">
            <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold">Project 5</h2>
              <p className="text-lg">Description of project 5.</p>
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
