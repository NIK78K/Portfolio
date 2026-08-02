import Container from "@/components/ui/Container";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-(--border) py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-(--text)">
              {profile.name}
            </p>

            <p className="mt-2 max-w-md text-sm text-(--text-secondary)">
              System Analyst | Full Stack Web Developer
            </p>
          </div>

          <p className="text-sm text-(--text-secondary)">
            © 2026 {profile.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}