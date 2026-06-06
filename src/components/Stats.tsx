import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section
      id="impact"
      className="relative scroll-mt-24 overflow-hidden border-y border-line bg-bg-soft py-32 lg:py-48"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[80rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-2/10 blur-[140px]"
      />
      <Container className="relative">
        <div className="flex flex-col items-center text-center mb-24">
          <Reveal direction="up">
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-accent">
              <span className="h-2 w-2 rounded-full bg-accent-2 animate-pulse" aria-hidden />
              {stats.eyebrow}
            </p>
            <h2 className="max-w-3xl mx-auto font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-[4rem]">
              {stats.heading}
            </h2>
          </Reveal>
        </div>

        <dl className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-line-strong">
          {stats.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.15} direction="up">
              <div className="flex flex-col items-center text-center px-8">
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <Counter
                    value={item.value}
                    className="block font-serif text-6xl lg:text-7xl xl:text-8xl text-gradient drop-shadow-md hover:scale-110 transition-transform duration-500 cursor-default"
                  />
                </dd>
                <p className="mt-6 text-base font-medium tracking-wide leading-snug text-ink-soft uppercase text-ink-dim">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
