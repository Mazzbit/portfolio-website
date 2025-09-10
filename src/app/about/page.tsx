import Link from "next/link";
import Image from "next/image";
import "animate.css";
import BokehBackground from "@/components/BokehBackground";
import MyJourneyTimeline from "@/components/MyJourneyTimeline";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function AboutPage() {
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
          {/*<Link href="/contact" className="hover:underline decoration-purple-300 underline-offset-4">contact</Link>*/}
        </nav>

        {/* Text */}
        <div className="mt-12 max-w-2xl text-left px-4 sm:px-10">
          <h1 className="text-5xl font-extrabold text-purple-300 font-mono leading-tight animate-typing-about select-none ">
            about me
          </h1>
        </div>

        {/* About */}
        <section className="w-full flex flex-col lg:flex-row items-center justify-center lg:space-x-18 mt-10">
          {/* Portrait */}
          <div className="flex items-center justify-center w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-4 ring-purple-400/40 shadow-2xl shadow-purple-900/50 animate__animated animate__fadeIn [animation-delay:0.4s]">
            <Image
              src="/portrait.jpg"
              alt="Portrait of Martin Klug"
              width={512}
              height={512}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text + Buttons */}
          <div className="max-w-2xl text-left mt-6 lg:mt-10 px-4 sm:px-10 animate__animated animate__fadeInUp [animation-delay:0.5s]">
            <p className="mt-6 text-lg text-purple-200/90">
            I’m Martin — a Master’s student in Computer Science at TU Graz, focusing on Games Engineering and Interactive & Visual Information Systems. 
            I enjoy building playful, polished digital experiences that blend creativity with technology.
            </p>
            <p className="mt-6 text-purple-300/80">
            My favorite tools include Python, C++, Unity, Unreal Engine, TypeScript, Tailwind and more.  
            I love bringing software to life visually, crafting smooth and intuitive experiences with a strong sense of design.  
            In my free time, I enjoy 3D printing, tinkering with microcontrollers, and spending time in nature.


            </p>
            {/* CTA Row */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 animate__animated animate__fadeIn [animation-delay:1.1s]">
              <a
                href="/Martin_Klug_CV.pdf"
                download
                className="inline-block px-6 py-3 text-lg bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out text-center"
                aria-label="Download my CV as PDF"
              >
                Download CV
              </a>
              <a
                href="/projects"
                className="inline-block px-6 py-3 text-lg text-white rounded-full shadow-lg border border-white transition duration-300 ease-in-out hover:text-purple-900 hover:bg-purple-200 hover:border-purple-900 text-center"
                aria-label="Open my projects"
              >
                Explore my work →
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Timeline */}
      <section className="mt-20 animate__animated animate__fadeInUp animate__fadeIn [animation-delay:0.5s]">
        <MyJourneyTimeline />
      </section>

        <footer className="mb-0 text-center text-sm text-purple-200">
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

        {/* Impressum & Datenschutz */}
        <div className="mb-4 flex justify-center space-x-6 text-sm">
            <Link href="/legal" className="hover:underline hover:text-purple-400">
            Impressum
            </Link>
            <Link href="/legal" className="hover:underline hover:text-purple-400">
            Datenschutz
            </Link>
        </div>

        <p>Made with ♥ by Martin Klug</p>
        <p>© 2025</p>
        </footer>
    </main>
  );
}
