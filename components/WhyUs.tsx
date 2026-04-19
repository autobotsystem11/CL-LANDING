const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Proven Results",
    titleZh: "效果有保证",
    desc: "Every campaign is backed by data. We track reach, engagement, and conversions — so you see exactly what your money is doing.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Real Audience, Real Customers",
    titleZh: "真实受众，真实客户",
    desc: "We reach actual people interested in your product — not bots, not random clicks. Quality matters more than quantity.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Affordable for SMEs",
    titleZh: "中小企业也负担得起",
    desc: "No massive ad budgets needed. Our packages are built for growing businesses — maximum impact at a price that makes sense.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Setup, Immediate Impact",
    titleZh: "快速启动，即时见效",
    desc: "From onboarding to live campaign in as little as 48 hours. We move fast so your business doesn't have to wait.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#14142b] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-400 font-bold text-xs tracking-[0.25em] uppercase mb-3">
            为什么选择我们 · WHY CHOOSE US
          </p>
          <h2
            className="text-white text-4xl md:text-5xl font-black uppercase"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Built for <span className="text-orange-500">Results</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            We're not just another marketing agency. We're your partner in growing a loyal customer base, the smart way.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="group bg-[#1c1c2e] border border-white/5 hover:border-orange-500/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors">
                {r.icon}
              </div>
              <h3
                className="text-white font-bold text-lg mb-1"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 700 }}
              >
                {r.title}
              </h3>
              <p className="text-orange-400/70 text-xs mb-3 tracking-wide">{r.titleZh}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
