import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="operations" className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-accent/8 blur-[120px]"
      />
      <Container className="relative">
        <Reveal>
          <SectionHeading eyebrow={services.eyebrow} heading={services.heading} />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <SpotlightCard className="h-full">
                <span className="font-serif text-2xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
                <span
                  aria-hidden
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-2 opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
