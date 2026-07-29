export default function Navbar() {
    return (
         <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-white">
          Alfath<span className="text-blue-500">.</span>
        </h1>

        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#experience" className="hover:text-blue-400">Experience</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </nav>
      </div>
    </header>
    );
}