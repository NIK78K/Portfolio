import Container from "@/components/ui/Container";
import { profile } from "@/data/profile";

const footerLinks = ["about", "experience", "projects", "skills", "contact"];

export default function Footer() {
	return (
		<footer className="border-t border-white/10 py-10">
			<Container>
				<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
					<div>
						<p className="text-lg font-semibold text-white">{profile.name}</p>
						<p className="mt-2 max-w-md text-sm text-slate-400">
							Portfolio web yang dirapikan dengan fokus pada struktur, visual hierarki,
							dan pengalaman baca yang lebih tenang.
						</p>
					</div>

					<div className="flex flex-wrap gap-3">
						{footerLinks.map((link) => (
							<a
								key={link}
								href={`#${link}`}
								className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-400 hover:text-white"
							>
								{link}
							</a>
						))}
					</div>
				</div>
			</Container>
		</footer>
	);
}
