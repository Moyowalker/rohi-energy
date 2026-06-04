import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { about, marquee } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      {/* Scrolling keyword band */}
      <div className="border-y border-line py-8">
        <Marquee items={[...marquee]} />
      </div>

      <Container className="mt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-ink-soft">
                {about.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-1">
                {about.highlights.map((h, i) => (
                  <Reveal as="li" key={h} delay={0.08 * i}>
                    <div className="flex items-center gap-4 bg-bg-soft px-6 py-5 text-sm text-ink">
                      <span
                        aria-hidden
                        className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent/15 text-accent"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {h}
                    </div>
                  </Reveal>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
