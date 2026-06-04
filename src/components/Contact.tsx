import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { contact } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading eyebrow={contact.eyebrow} heading={contact.heading} />
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
                {contact.body}
              </p>

              <dl className="mt-10 space-y-5">
                <ContactRow label="Email">
                  <a href={`mailto:${contact.email}`} className="text-ink transition-colors hover:text-accent">
                    {contact.email}
                  </a>
                </ContactRow>
                <ContactRow label="Phone">
                  <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="text-ink transition-colors hover:text-accent">
                    {contact.phone}
                  </a>
                </ContactRow>
                <ContactRow label="Office">
                  <span className="text-ink">{contact.address}</span>
                </ContactRow>
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-line bg-bg-elev/70 p-6 backdrop-blur-sm sm:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/12 blur-3xl"
                />
                <div className="relative">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-6 text-sm">
      <dt className="w-16 flex-none pt-px font-medium uppercase tracking-wide text-ink-dim">
        {label}
      </dt>
      <dd>{children}</dd>
    </div>
  );
}
