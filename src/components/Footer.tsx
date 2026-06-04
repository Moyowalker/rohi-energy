import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { company, nav, contact, footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-soft">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <Container className="relative py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {footer.blurb}
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-dim">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-ink-soft transition-colors hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-dim">
                Connect
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-ink-soft transition-colors hover:text-accent"
                  >
                    {contact.email}
                  </a>
                </li>
                {contact.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-ink-soft transition-colors hover:text-accent"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-6">
          <p className="text-xs text-ink-dim">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
