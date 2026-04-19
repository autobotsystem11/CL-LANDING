export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex overflow-hidden">
      {/* ── Right cosmic bg (behind everything) ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D1B69] via-[#1a0b4b] to-[#0d0720]">
        {/* Stars */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[
            [80,  60,  1.5, "0s"],   [140, 120, 1,   "0.4s"],  [220, 45,  2,   "0.8s"],
            [310, 90,  1.5, "1.2s"], [380, 170, 1,   "0.6s"],  [420, 60,  2.5, "0.3s"],
            [500, 130, 1,   "1s"],   [560, 50,  1.5, "0.7s"],  [620, 200, 1,   "1.5s"],
            [680, 80,  2,   "0.2s"], [720, 150, 1,   "1.1s"],  [780, 40,  1.5, "0.9s"],
            [840, 110, 1,   "0.5s"], [900, 60,  2,   "1.3s"],  [950, 180, 1.5, "0.1s"],
            [100, 250, 1,   "0.8s"], [200, 310, 2,   "1.4s"],  [300, 280, 1,   "0.6s"],
            [450, 320, 1.5, "1s"],   [550, 260, 1,   "0.3s"],  [650, 350, 2,   "0.7s"],
            [750, 290, 1,   "1.2s"], [850, 240, 1.5, "0.4s"],  [950, 310, 1,   "1.6s"],
          ].map(([cx, cy, r, delay], i) => (
            <circle
              key={i}
              cx={cx} cy={cy} r={r}
              fill="white"
              opacity="0.7"
              className="animate-twinkle"
              style={{ animationDelay: delay as string }}
            />
          ))}
        </svg>

        {/* Rocket */}
        <div
          className="absolute animate-float"
          style={{ right: "8%", top: "12%", width: 260, height: 400 }}
        >
          <svg viewBox="0 0 260 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Flame trail (behind rocket, render first) */}
            <path
              d="M 100 300 Q 40 380 10 460 Q 60 400 110 350"
              stroke="#F97316" strokeWidth="28" strokeLinecap="round" fill="none"
              opacity="0.75" className="animate-flicker"
            />
            <path
              d="M 155 305 Q 220 380 250 440 Q 200 390 155 345"
              stroke="#FBBF24" strokeWidth="18" strokeLinecap="round" fill="none"
              opacity="0.6" className="animate-flicker" style={{ animationDelay: "0.5s" }}
            />
            {/* Inner bright core flame */}
            <path
              d="M 118 295 Q 100 360 130 400 Q 160 360 142 295"
              fill="#FDE68A" opacity="0.9"
            />
            <path
              d="M 123 295 Q 110 345 130 375 Q 150 345 137 295"
              fill="white" opacity="0.6"
            />

            {/* Rocket body */}
            <rect x="103" y="155" width="55" height="148" rx="8" fill="#F1F5F9" />

            {/* Nose cone */}
            <path d="M 103 163 Q 130 60 157 163 Z" fill="#DC2626" />

            {/* Porthole window */}
            <circle cx="130" cy="198" r="20" fill="#1D4ED8" />
            <circle cx="130" cy="198" r="14" fill="#60A5FA" opacity="0.6" />
            <circle cx="124" cy="192" r="4" fill="white" opacity="0.5" />

            {/* Red stripe */}
            <rect x="103" y="238" width="55" height="10" rx="2" fill="#DC2626" />

            {/* Bottom body */}
            <rect x="103" y="248" width="55" height="55" rx="4" fill="#E2E8F0" />

            {/* Left fin */}
            <path d="M 103 262 L 68 310 L 103 295 Z" fill="#DC2626" />
            {/* Left fin shadow */}
            <path d="M 103 262 L 78 310 L 103 295 Z" fill="#991B1B" />

            {/* Right fin */}
            <path d="M 157 262 L 192 310 L 157 295 Z" fill="#DC2626" />
            {/* Right fin shadow */}
            <path d="M 157 262 L 182 310 L 157 295 Z" fill="#991B1B" />

            {/* Exhaust nozzle */}
            <ellipse cx="130" cy="302" rx="20" ry="7" fill="#94A3B8" />
          </svg>
        </div>

        {/* Decorative orb glow */}
        <div
          className="absolute rounded-full"
          style={{
            right: "5%", bottom: "20%",
            width: 300, height: 300,
            background: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            right: "35%", top: "10%",
            width: 200, height: 200,
            background: "radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Left dark panel (diagonal clip) ── */}
      <div
        className="relative z-10 flex flex-col justify-center w-full lg:w-[58%] bg-[#1c1c2e] px-8 md:px-16 pt-28 pb-16 lg:pt-32 lg:pb-20"
        style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)" }}
      >
        {/* Eyebrow tag */}
        <div className="flex items-center gap-2 mb-5 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="inline-block w-8 h-0.5 bg-orange-500" />
          <span className="text-orange-400 font-semibold text-xs tracking-[0.2em] uppercase">
            Kuala Lumpur Based
          </span>
        </div>

        {/* Headline */}
        <h1
          className="leading-none mb-2 animate-fade-up"
          style={{
            fontFamily: "var(--font-barlow)",
            fontWeight: 800,
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            animationDelay: "0.2s",
          }}
        >
          <span className="text-white">BOOST YOUR</span>
        </h1>
        <h1
          className="leading-none mb-6 animate-fade-up"
          style={{
            fontFamily: "var(--font-barlow)",
            fontWeight: 800,
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            animationDelay: "0.3s",
          }}
        >
          <span className="text-orange-500">BUSINESS</span>
        </h1>

        {/* Chinese sub-tagline */}
        <p
          className="text-slate-400 text-sm tracking-widest mb-4 animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          社媒视频推广 · Telegram Bot 创建 · 精准获客
        </p>

        {/* Description */}
        <p
          className="text-slate-300 text-base leading-relaxed max-w-md mb-8 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          We help businesses in Malaysia reach real customers — through social media
          video sharing and custom Telegram entertainment bots that keep
          audiences engaged and coming back.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-xl shadow-orange-500/30 hover:shadow-orange-400/50 hover:-translate-y-0.5 text-sm uppercase tracking-wide"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-sm uppercase tracking-wide hover:bg-white/5"
          >
            Our Services
          </a>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2.5 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <span className="w-7 h-2 rounded-full bg-orange-500" />
          <span className="w-2 h-2 rounded-full bg-white/30" />
          <span className="w-2 h-2 rounded-full bg-white/30" />
          <span className="w-2 h-2 rounded-full bg-white/30" />
        </div>
      </div>
    </section>
  );
}
