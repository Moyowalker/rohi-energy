import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { about, marquee } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      {/* Scrolling keyword band */}
      <div className="border-y border-line py-8 rotate-[-2deg] scale-[1.05] bg-accent/5 backdrop-blur">
        <Marquee items={[...marquee]} />
      </div>

      <Container className="mt-32">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-12 items-start">
          <div className="lg:col-span-1 lg:sticky lg:top-32">
            <Reveal direction="right">
              <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />
              
              <div className="mt-8 hidden lg:block h-[1px] w-12 bg-accent" />
            </Reveal>
          </div>

          <div className="lg:col-span-1 border-l border-line-strong pl-6 or lg:pl-10">
            <Reveal delay={0.2} direction="up">
              <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
                {about.body.map((p, i) => (
                  <p key={i} className={i === 0 ? "font-medium text-ink" : ""}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-4 mt-8 lg:mt-0">
            {about.highlights.map((h, i) => (
              <Reveal as="div" key={h} delay={0.1 * i} direction="left">
                <div className="group relative overflow-hidden flex items-center gap-4 rounded-2xl border border-line bg-bg-elev/40 px-6 py-6 text-sm text-ink backdrop-blur-md transition-all hover:bg-accent/5 hover:border-accent/40">
                  <div className="absolute inset-0 w-1 bg-accent transform origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
                  <span
                    aria-hidden
                    className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent-2/15 text-accent-2 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-medium text-base">{h}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
