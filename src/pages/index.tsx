import Container from "@/components/Container";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import isshinTechLogo from "@/images/isshin-tech-logo.jpg";
import semanticBanner from "@/images/semantic-uncertainty-banner.png";
import avatarImg from "@/images/avatar.png";

export default function Home() {
  return (
    <Container>
      {/* Header Section */}
      <header id="home" className="flex flex-col items-center justify-center min-h-[50vh] py-8 md:py-10 text-center w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-gradient clash-grotesk mt-10 md:mt-14">
          Semantic Similarity and Uncertainty Quantification
        </h1>

        <div className="w-full flex justify-center mb-6 md:mb-8">
          {/* Banner image with overlay caption */}
          <div className="w-full max-w-3xl relative rounded-xl overflow-hidden">
            <Image
              src={semanticBanner}
              alt="Banner showing NLP and uncertainty concepts"
              className="object-cover w-full max-h-[400px] h-auto rounded-xl shadow"
              style={{ objectPosition: 'center' }}
              priority
            />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs md:text-base px-3 py-1 rounded shadow-md max-w-[90%]">
              Exploring Semantic Similarity & Uncertainty in Language Models
            </div>
          </div>
        </div>
      </header>

      {/* About the Project */}
      <section id="about" className="my-10 md:my-14 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gradient clash-grotesk">About the Project</h2>
        <p className="text-lg text-muted-foreground">
          This project investigates how large language models (LLMs) can measure and express their uncertainty during language understanding tasks. We explore the use of semantic similarity metrics (e.g., cosine similarity, semantic volume, kernel language entropy) and uncertainty quantification (UQ) techniques to reduce hallucination, increase trust, and improve interpretability in tasks like question answering, retrieval, and summarization.
        </p>
      </section>

      {/* Team Section */}
      <section id="team" className="my-10 md:my-14 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-gradient clash-grotesk">Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Undergraduates */}
          <div>
            <h3 className="text-xl font-semibold mb-4">🎓 Undergraduates</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <Image
                  src={avatarImg}
                  alt="Team member avatar"
                  width={56}
                  height={56}
                  className="rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm object-cover bg-white"
                />
                <div>
                  <div className="font-bold">B. Praveenasarma</div>
                  <div className="text-sm text-muted-foreground">CSE Department, University of Moratuwa<br/>Colombo, Sri Lanka</div>
                  <a href="mailto:baskarakurukkal.21@cse.mrt.ac.lk" className="text-xs text-primary underline">baskarakurukkal.21@cse.mrt.ac.lk</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src={avatarImg}
                  alt="Team member avatar"
                  width={56}
                  height={56}
                  className="rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm object-cover bg-white"
                />
                <div>
                  <div className="font-bold">R. Akshiya</div>
                  <div className="text-sm text-muted-foreground">CSE Department, University of Moratuwa<br/>Colombo, Sri Lanka</div>
                  <a href="mailto:raveendiran.21@cse.mrt.ac.lk" className="text-xs text-primary underline">raveendiran.21@cse.mrt.ac.lk</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src={avatarImg}
                  alt="Team member avatar"
                  width={56}
                  height={56}
                  className="rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm object-cover bg-white"
                />
                <div>
                  <div className="font-bold">Karunathilaka G.M.D.S.</div>
                  <div className="text-sm text-muted-foreground">CSE Department, University of Moratuwa<br/>Colombo, Sri Lanka</div>
                  <a href="mailto:dilrangi.21@cse.mrt.ac.lk" className="text-xs text-primary underline">dilrangi.21@cse.mrt.ac.lk</a>
                </div>
              </li>
            </ul>
          </div>
          {/* Supervisors */}
          <div>
            <h3 className="text-xl font-semibold mb-4">👨‍🏫 Supervisors</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <Image
                  src={avatarImg}
                  alt="Team member avatar"
                  width={56}
                  height={56}
                  className="rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm object-cover bg-white"
                />
                <div>
                  <div className="font-bold">R.T. Uthayasanker</div>
                  <div className="text-sm text-muted-foreground">CSE Department, University of Moratuwa<br/>Colombo, Sri Lanka</div>
                  <a href="mailto:rtuthaya@cse.mrt.ac.lk" className="text-xs text-primary underline">rtuthaya@cse.mrt.ac.lk</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src={avatarImg}
                  alt="Team member avatar"
                  width={56}
                  height={56}
                  className="rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm object-cover bg-white"
                />
                <div>
                  <div className="font-bold">K. Premaratne</div>
                  <div className="text-sm text-muted-foreground">Department of Electrical and Computer Engineering,<br/>University of Miami, Coral Gables, FL, USA</div>
                  <a href="mailto:kamal@miami.edu" className="text-xs text-primary underline">kamal@miami.edu</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src={avatarImg}
                  alt="Team member avatar"
                  width={56}
                  height={56}
                  className="rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm object-cover bg-white"
                />
                <div>
                  <div className="font-bold">V. Pragatheeswaran</div>
                  <div className="text-sm text-muted-foreground">Department of Electrical and Computer Engineering,<br/>University of Miami, Coral Gables, FL, USA</div>
                  <a href="mailto:pxv245@miami.edu" className="text-xs text-primary underline">pxv245@miami.edu</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research Topics / Focus */}
      <section id="topics" className="my-10 md:my-14 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gradient clash-grotesk">Research Topics / Focus</h2>
        <ul className="list-disc ml-6 text-lg text-muted-foreground space-y-2">
          <li>Semantic Similarity in NLP</li>
          <li>Uncertainty Quantification in LLMs</li>
          <li>Semantic Entropy, Semantic Volume, KLE</li>
          <li>Hallucination Detection in Language Models</li>
        </ul>
      </section>

      {/* Repository */}
      <section id="repository" className="my-10 md:my-14 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gradient clash-grotesk">Repository</h2>
        <div className="flex flex-col gap-2">
          <a href="https://github.com/aaivu/semantic-similarity-and-uncertainty" target="_blank" rel="noopener noreferrer" className="text-primary text-lg">
            🔒 GitHub Repository: https://github.com/aaivu/semantic-similarity-and-uncertainty
          </a>
          <span className="text-sm text-muted-foreground">This repository is currently private and will be made public later.</span>
        </div>
      </section>

      {/* Survey Paper */}
      <section id="survey" className="my-10 md:my-14 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gradient clash-grotesk">Survey Paper</h2>
        <button className="px-6 py-2 rounded bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition" disabled>
          Download PDF (Coming Soon)
        </button>
      </section>

      {/* Timeline */}
      <section id="timeline" className="my-10 md:my-14 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gradient clash-grotesk">Timeline</h2>
        <div className="bg-white/5 rounded-lg p-6 md:p-8 shadow-sm">
          <div className="mb-4 text-base md:text-lg font-semibold text-primary flex items-center gap-2">
            <span>📅</span> Project Timeline (Internal Deadlines)
          </div>
          <ul className="timeline-list flex flex-col gap-6 md:gap-7">
            <li className="flex items-start gap-4">
              <span className="text-2xl md:text-3xl">📝</span>
              <div>
                <div className="font-semibold">Proposal</div>
                <div className="text-sm md:text-base text-muted-foreground">Supervisor-approved proposal report submission</div>
                <div className="text-xs md:text-sm text-primary">28th July 2025</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl md:text-3xl">🎤</span>
              <div>
                <div className="font-semibold">Proposal Presentation</div>
                <div className="text-sm md:text-base text-muted-foreground">Student-scheduled presentation</div>
                <div className="text-xs md:text-sm text-primary">29th July – 9th August 2025</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl md:text-3xl">📈</span>
              <div>
                <div className="font-semibold">Progress Report</div>
                <div className="text-sm md:text-base text-muted-foreground">Supervisor-approved progress report</div>
                <div className="text-xs md:text-sm text-primary">29th December 2025</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl md:text-3xl">🎥</span>
              <div>
                <div className="font-semibold">Progress Presentation</div>
                <div className="text-sm md:text-base text-muted-foreground">Student-scheduled panel presentation</div>
                <div className="text-xs md:text-sm text-primary">30th December 2025 – 10th January 2026</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl md:text-3xl">🖼️</span>
              <div>
                <div className="font-semibold">Poster Preparation</div>
                <div className="text-sm md:text-base text-muted-foreground">Printed poster ready</div>
                <div className="text-xs md:text-sm text-primary">8th March 2026</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl md:text-3xl">🧾</span>
              <div>
                <div className="font-semibold">Poster Presentation</div>
                <div className="text-sm md:text-base text-muted-foreground">Present to panel (during FYP time slot)</div>
                <div className="text-xs md:text-sm text-primary">10th–11th March 2026</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl md:text-3xl">📘</span>
              <div>
                <div className="font-semibold">Final Report</div>
                <div className="text-sm md:text-base text-muted-foreground">Final report draft submitted to supervisor</div>
                <div className="text-xs md:text-sm text-primary">7th April 2026</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl md:text-3xl">🎓</span>
              <div>
                <div className="font-semibold">Final Evaluation</div>
                <div className="text-sm md:text-base text-muted-foreground">Final viva / defense presentation</div>
                <div className="text-xs md:text-sm text-primary">14th – 25th April 2026</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-2xl md:text-3xl">🎉</span>
              <div>
                <div className="font-semibold">FYP Showcase</div>
                <div className="text-sm md:text-base text-muted-foreground">Final Year Project public showcase</div>
                <div className="text-xs md:text-sm text-primary">Last week of April 2026</div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </Container>
  );
}
