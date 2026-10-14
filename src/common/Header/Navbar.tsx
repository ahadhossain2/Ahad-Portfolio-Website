import type { SVGProps } from "react";
import { Link } from "react-router-dom";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import ThemeToggle from "../ThemeToggle";
import { Menus } from "../../Data/utils";

type SvgProps = SVGProps<SVGSVGElement>;

/* ---------- Custom artwork (logo) ---------- */
const Logo = (p: SvgProps) => (
  <svg viewBox="0 0 48 44" aria-hidden="true" {...p}>
    <defs>
      <linearGradient id="logo-g" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stopColor="#0ea5c6" />
        <stop offset="1" stopColor="#5eead4" />
      </linearGradient>
    </defs>
    <path d="M22 2 4 42h11l7-18 5 12h10L22 2Z" fill="url(#logo-g)" />
    <path d="M28 20l16 22H30l-6-9 4-13Z" fill="#0d9488" opacity=".85" />
  </svg>
);

const Navbar = () => {
  return (
    <header
      className="
        fixed left-0 right-0 top-0 z-50
        flex h-16 items-center
        border-b border-gray-200
        bg-white/95 text-[15px]
        shadow-lg backdrop-blur-xl
        transition-colors duration-300
        dark:border-slate-700
        dark:bg-black
        dark:shadow-black/75
      "
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-5">
        {/* Logo */}
        <Link
          to="/home"
          aria-label="Ahad.Dev home"
          className="inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
        >
          <Logo className="h-9 w-10 sm:h-11 sm:w-12" />
          <span className="text-2xl font-bold tracking-[0.12em] text-slate-900 dark:text-white sm:text-3xl">
            AHAD<span className="text-teal-400">.DEV</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-x-4 lg:flex">
          {Menus.map((menu, index) => (
            <DesktopMenu menu={menu} key={index} />
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex shrink-0 items-center gap-x-3 sm:gap-x-4">
          <ThemeToggle />

          <div>
            <Link
              to="/contact"
              className="
              group relative flex items-center justify-center
              overflow-hidden rounded-full
              bg-gradient-to-r from-[#1E5470] to-[#2a7fa3]
              px-4 py-2.5 text-sm font-semibold text-white
              shadow-lg transition-all duration-300
              hover:scale-105 hover:shadow-xl
              active:scale-95
              sm:px-6 sm:py-3 sm:text-base
            "
            >
              <span
                aria-hidden="true"
                className="
                pointer-events-none absolute inset-0
                -translate-x-full skew-x-12
                bg-gradient-to-r from-transparent
                via-white/25 to-transparent
                transition-transform duration-700 ease-out
                group-hover:translate-x-full
              "
              />
              <span className="relative z-10">Contact</span>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobMenu Menus={Menus} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
