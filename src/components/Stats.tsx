import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section
      id="impact"
      className="relative scroll-mt-24 overflow-hidden border-y border-line bg-bg-soft py-24 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[50rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <Container className="relative">
        <Reveal>
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-2">
            <span className="h-px w-6 bg-accent/60" aria-hidden />
            {stats.eyebrow}
          </p>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            {stats.heading}
          </h2>
        </Reveal>

        <dl className="mt-16 grid grid-cols-2 gap-y-12 gap-x-8 sm:gap-x-12 lg:grid-cols-4">
          {stats.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <div className="border-l border-line-strong pl-5">
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <Counter
                    value={item.value}
                    className="block font-serif text-5xl text-gradient sm:text-6xl"
                  />
                </dd>
                <p className="mt-3 text-sm leading-snug text-ink-soft">
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
