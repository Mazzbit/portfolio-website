import Link from "next/link";
import Image from "next/image";
import "animate.css";
import BokehBackground from "@/components/BokehBackground";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen flex flex-col justify-between font-hand px-6 py-10 select-none">
      {/* Background */}
      <div className="absolute inset-0 z-[-10] bg-gradient-to-b from-[#0a0014] to-[#1b004b]" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BokehBackground />
      </div>

      {/* Content */}
      <div className="relative z-20 text-purple-100 w-full flex-1 flex flex-col items-center">
        {/* Navigation */}
        <nav className="text-center text-xl font-bold space-x-6 mb-12">
          <Link href="/" className="hover:underline decoration-purple-300 underline-offset-4">home</Link>
          <Link href="/about" className="hover:underline decoration-purple-300 underline-offset-4 hover:scale-125">about me</Link>
          <Link href="/projects" className="hover:underline decoration-purple-300 underline-offset-4">projects</Link>
          <Link href="/contact" className="hover:underline decoration-purple-300 underline-offset-4">contact</Link>
        </nav>

        {/* About */}
        <section className="mt-12 w-full flex flex-col items-center animate__animated animate__fadeInUp">
          {/* Portrait */}
          <div className="flex items-center justify-center w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-4 ring-purple-400/40 shadow-2xl shadow-purple-900/50">
            <Image
              src="/me.jpg"
              alt="Portrait of Martin Klug"
              width={512}
              height={512}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-2xl text-left px-2 mt-10">
            <h1 className="text-5xl font-extrabold text-purple-300 font-mono leading-tight animate__animated animate__slideInUp">
              About me
            </h1>
            <p className="mt-4 text-lg text-purple-200/90 animate__animated animate__fadeIn [animation-delay:0.5s]">
              I’m Martin — a Full‑Stack Developer, Game Engineer, and Creative Technologist based in Graz, Austria. I love building playful, polished
              digital experiences, from real‑time interactive prototypes to production web apps.
            </p>
            <p className="mt-3 text-purple-300/80 animate__animated animate__fadeIn [animation-delay:0.8s]">
              Tech I enjoy: TypeScript, React/Next.js, Tailwind, Node, Python, Unity, and shader tinkering. When I’m not coding, you’ll probably find me
              exploring nature, sketching new game ideas, or chasing the perfect lofi mix.
            </p>

            {/* CTA Row */}
            <div className="mt-8 flex flex-wrap gap-4 animate__animated animate__fadeIn [animation-delay:1.1s]">
              <a
                href="/cv_martin_klug.pdf"
                download
                className="inline-block px-6 py-3 text-lg bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out"
                aria-label="Download my CV as PDF"
              >
                Download CV
              </a>
              <a
                href="/cv_martin_klug.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-lg text-white rounded-full shadow-lg border border-white transition duration-300 ease-in-out hover:text-purple-900 hover:bg-purple-200 hover:border-purple-900"
                aria-label="Open my CV in a new tab"
              >
                View CV →
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mb-0 text-center text-sm text-purple-200 animate__animated animate__fadeIn [animation-delay:1.6s]">
        <p>Made with ♥ by Martin Klug</p>
        <p>© 2025</p>
      </footer>
    </main>
  );
}