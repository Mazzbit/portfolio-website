import Link from "next/link";
import 'animate.css';
import BokehBackground from "@/components/BokehBackground";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col justify-between font-hand px-6 py-10 select-none">
      {/* Background */}
      <div className="fixed inset-0 z-[-10] bg-gradient-to-b from-[#0a0014] to-[#1b004b]" />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BokehBackground />
      </div>

      {/* Content */}
      <div className="relative z-20 text-purple-100 w-full flex-1 flex flex-col items-center">
        {/* Navigation */}
        <nav className="text-center text-xl font-bold space-x-6 mb-12">
          <Link href="/" className="hover:underline hover:scale-125 decoration-purple-300 underline-offset-4">home</Link>
          <Link href="/about" className="hover:underline decoration-purple-300 underline-offset-4">about</Link>
          <Link href="/projects" className="hover:underline decoration-purple-300 underline-offset-4">projects</Link>
          <Link href="/contact" className="hover:underline decoration-purple-300 underline-offset-4">contact</Link>
        </nav>

        {/* Intro */}
        <div className="mt-16 w-full flex">
          <section className="text-left max-w-2xl space-y-4 pl-4 lg:ml-[calc(100vw/6)]">
            <p className="text-2xl animate__animated animate__slideInUp">Hi there! I’m</p>
            <h1 className="text-6xl font-extrabold text-purple-300 font-mono leading-tight">
              <span className="animate-typing-name select-none">Martin</span>
            </h1>
            <p className="text-2xl animate__animated animate__fadeIn [animation-delay:1s]">Full Stack Developer · Game Engineer · Creative Technologist</p>
            <p className="text-lg text-purple-400 animate__animated animate__fadeIn [animation-delay:1.25s] ">Based in Graz, Austria</p>

            {/* Call to Action */}
            <div className="flex flex-row items-center justify-start space-x-6 mt-6 animate__animated animate__fadeIn [animation-delay:1.75s]">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 text-xl bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out"
              >
                Contact me
              </Link>

              <Link
                href="/projects"
                className="inline-block px-8 py-4 text-xl text-white rounded-full shadow-lg border border-white transition duration-300 ease-in-out hover:text-purple-900 hover:bg-purple-200 hover:border-purple-900"
              >
                Explore my work →
              </Link>
            </div>

          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="mb-0 text-center text-sm text-purple-200 animate__animated animate__fadeIn [animation-delay:2s]">
        {/* Social Links */}
        <section className="mb-4 flex justify-center mt-12 space-x-6 text-2xl">
              <a href="mailto:klug.martin.mk@gmail.com" className="hover:text-purple-400 transition" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="https://github.com/mazzbit" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/martin-tobias-klug-0a68a421a/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </section>
        <p>Made with ♥ by Martin Klug</p>
        <p>© 2025</p>
      </footer>
    </main>
  );
}
