const features = [
  {
    number: "01",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.869V15.13a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    badge: "社媒视频推广",
    title: "Social Media Video Sharing",
    desc: "We repost and amplify your video content across high-traffic social channels. Your videos get in front of thousands of targeted viewers — organic reach, no ads needed.",
    highlights: ["Multi-platform sharing", "Targeted demographics", "Engagement tracking"],
    accent: "from-orange-500/20 to-orange-600/5",
    border: "hover:border-orange-500/40",
    glow: "group-hover:shadow-orange-500/10",
  },
  {
    number: "02",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    badge: "娱乐 Bot 创建",
    title: "Telegram Entertainment Bot",
    desc: "We build custom Telegram bots that entertain, engage, and retain your audience. Games, quizzes, daily content — your brand stays top-of-mind around the clock.",
    highlights: ["Custom bot design", "Auto engagement", "24/7 active"],
    accent: "from-violet-500/20 to-violet-600/5",
    border: "hover:border-violet-500/40",
    glow: "group-hover:shadow-violet-500/10",
  },
  {
    number: "03",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    badge: "精准获客",
    title: "Customer Acquisition",
    desc: "Combining video reach with bot engagement, we funnel interested prospects directly to your business. More inquiries, more sales — a complete growth system.",
    highlights: ["Lead generation", "Funnel strategy", "Conversion focus"],
    accent: "from-sky-500/20 to-sky-600/5",
    border: "hover:border-sky-500/40",
    glow: "group-hover:shadow-sky-500/10",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#1c1c2e] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-400 font-bold text-xs tracking-[0.25em] uppercase mb-3">
            我们的服务 · WHAT WE DO
          </p>
          <h2
            className="text-white text-4xl md:text-5xl font-black uppercase"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Three powerful services, one goal: put your business in front of the right customers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group relative bg-gradient-to-b ${f.accent} border border-white/8 ${f.border} rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${f.glow} overflow-hidden`}
            >
              {/* Number watermark */}
              <span
                className="absolute top-4 right-6 text-7xl font-black text-white/4"
                style={{ fontFamily: "var(--font-barlow)" }}
                aria-hidden
              >
                {f.number}
              </span>

              {/* Badge */}
              <span className="inline-block text-orange-400 text-xs font-bold tracking-widest uppercase mb-6 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                {f.badge}
              </span>

              {/* Icon */}
              <div className="text-white mb-5">{f.icon}</div>

              <h3
                className="text-white text-xl font-black mb-3"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 700 }}
              >
                {f.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">{f.desc}</p>

              {/* Highlights */}
              <ul className="flex flex-col gap-2">
                {f.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-slate-300 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
