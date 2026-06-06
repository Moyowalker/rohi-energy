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
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="sticky top-32 lg:col-span-4">
            <Reveal direction="left">
              <SectionHeading eyebrow={services.eyebrow} heading={services.heading} />
              <p className="mt-6 text-base text-ink-soft">
                Explore how we drive innovation and sustainability across every facet of our operations, delivering cleaner energy efficiently.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-8 lg:mt-32 lg:pb-32">
            {services.items.map((item, i) => (
              <Reveal key={item.title} direction="up" delay={i % 2 === 0 ? 0 : 0.1}>
                <SpotlightCard className="h-full transition-transform hover:-translate-y-2">
                  <span className="font-serif text-3xl text-accent-deep/50 font-bold block mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft">
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
        </div>
      </Container>
    </section>
  );
}
