// app/legal/page.tsx  (App Router) 
// oder: pages/legal.tsx (Pages Router, default export gleich)

import Link from "next/link";
import "animate.css";
import BokehBackground from "@/components/BokehBackground";

export default function LegalPage() {
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
        </nav>

        {/* Header */}
        <header className="mt-12 mb-6 w-full max-w-3xl px-4 sm:px-10">
          <h1 className="text-4xl font-extrabold text-purple-300 font-mono leading-tight animate__animated animate__fadeInDown">
            Impressum & Datenschutz
          </h1>
        </header>

        {/* Body */}
        <section className="w-full max-w-3xl px-4 sm:px-10 mt-10 space-y-16">
          {/* Impressum */}
          <div id="impressum" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-purple-300 mb-4">Impressum</h2>
            <div className="space-y-1 text-purple-100/90">
              <p>Martin Tobias Klug</p>
              <p>Sternäckerweg 51a/T01</p>
              <p>8041 Graz, Österreich</p>
              <p>E-Mail: <a className="underline hover:text-purple-300" href="mailto:klug.martin.mk@gmail.com">klug.martin.mk@gmail.com</a></p>
              {/* Telefon optional:
              <p>Telefon: +43 660 4964327</p>
              */}
            </div>

            <div className="mt-6 text-sm text-purple-300/80">
              <p>Verantwortlich für den Inhalt: Martin Tobias Klug</p>
              <p>Diese Website ist ein persönliches Portfolio im Sinne des § 5 ECG (AT).</p>
            </div>
          </div>

          {/* Datenschutz */}
          <div id="datenschutz" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-purple-300 mb-4">Datenschutzerklärung</h2>

            <h3 className="text-xl font-semibold text-purple-200 mt-6">Allgemeines</h3>
            <p className="mt-2 text-purple-100/90">
              Der Schutz Ihrer Daten ist mir wichtig. Diese Website verwendet keine Cookies, keine Analyse- oder Tracking-Tools
              und erhebt keine personenbezogenen Daten, außer Sie kontaktieren mich freiwillig (z.&nbsp;B. per E-Mail).
            </p>

            <h3 className="text-xl font-semibold text-purple-200 mt-6">Kontaktaufnahme</h3>
            <p className="mt-2 text-purple-100/90">
              Wenn Sie mich per E-Mail kontaktieren, werden die übermittelten Daten ausschließlich zur Bearbeitung Ihrer Anfrage
              verwendet und nicht an Dritte weitergegeben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
              Kommunikation). Die Daten werden nur so lange gespeichert, wie es zur Bearbeitung erforderlich ist.
            </p>

            <h3 className="text-xl font-semibold text-purple-200 mt-6">Server-Logs</h3>
            <p className="mt-2 text-purple-100/90">
              Der Hosting-Provider kann aus technischen Gründen automatisch Server-Logfiles (z.&nbsp;B. IP-Adresse, Zeitpunkt, aufgerufene
              Seite) erfassen. Diese Daten dienen der technischen Bereitstellung und Sicherheit der Website und werden nicht mit anderen
              Datenquellen zusammengeführt.
            </p>

            <h3 className="text-xl font-semibold text-purple-200 mt-6">Ihre Rechte</h3>
            <p className="mt-2 text-purple-100/90">
              Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch zu
              (Art. 15–21 DSGVO). Kontakt:{" "}
              <a className="underline hover:text-purple-300" href="mailto:klug.martin.mk@gmail.com">klug.martin.mk@gmail.com</a>.
              Außerdem haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren.
            </p>

            <p className="mt-6 text-sm text-purple-300/70">
              Stand: {new Date().toLocaleDateString("de-AT")}
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mb-0 mt-12 text-center text-sm text-purple-200">
        <div className="mb-4 flex justify-center space-x-6 text-sm">
        </div>
        <p>Made with ♥ by Martin Klug</p>
        <p>© 2025</p>
      </footer>
    </main>
  );
}
