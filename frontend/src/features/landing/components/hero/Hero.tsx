import BackgroundGradient from "./BackgroundGradient";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-gradient-to-br
        from-slate-50
        via-blue-50
        to-indigo-100

        transition-colors
        duration-500

        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
      "
    >
      {/* Background Effects */}

      <BackgroundGradient />

      {/* Blur Orbs */}

      <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px] dark:bg-violet-500/10" />

      <div className="absolute right-[-100px] bottom-0 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px] dark:bg-blue-500/10" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 lg:px-16">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <HeroContent />

          {/* Right */}

          <HeroVisual />

        </div>

      </div>
    </section>
  );
}