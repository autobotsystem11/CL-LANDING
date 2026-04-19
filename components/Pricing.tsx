const plans = [
  {
    name: "Starter",
    nameZh: "入门套餐",
    price: "RM XXX",
    period: "/ month",
    desc: "Perfect for small businesses just getting started with digital marketing.",
    features: [
      "Social media video sharing (2x/week)",
      "Basic Telegram bot setup",
      "Up to 500 audience reach",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
    badge: null,
  },
  {
    name: "Growth",
    nameZh: "成长套餐",
    price: "RM XXX",
    period: "/ month",
    desc: "For businesses ready to scale fast and capture a bigger audience.",
    features: [
      "Social media video sharing (5x/week)",
      "Custom Telegram entertainment bot",
      "Up to 5,000 audience reach",
      "Weekly performance reports",
      "Priority WhatsApp support",
      "Lead funnel strategy",
    ],
    cta: "Most Popular",
    highlight: true,
    badge: "🔥 Best Value",
  },
  {
    name: "Enterprise",
    nameZh: "企业套餐",
    price: "Custom",
    period: "/ tailored",
    desc: "Fully custom solution for established businesses with larger goals.",
    features: [
      "Unlimited video sharing",
      "Advanced multi-function bot",
      "Unlimited audience reach",
      "Dedicated account manager",
      "Custom analytics dashboard",
      "Monthly strategy session",
    ],
    cta: "Contact Us",
    highlight: false,
    badge: null,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#1c1c2e] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-400 font-bold text-xs tracking-[0.25em] uppercase mb-3">
            套餐价格 · PRICING
          </p>
          <h2
            className="text-white text-4xl md:text-5xl font-black uppercase"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Simple, <span className="text-orange-500">Transparent</span> Pricing
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            No hidden fees. No long-term lock-ins. Just results. Contact us for the latest rates.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-start">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 ${
                p.highlight
                  ? "bg-orange-500 shadow-2xl shadow-orange-500/40 scale-105"
                  : "bg-[#14142b] border border-white/8 hover:border-white/20 hover:shadow-xl hover:shadow-black/30"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-orange-600 text-xs font-black px-4 py-1 rounded-full whitespace-nowrap shadow-lg">
                  {p.badge}
                </span>
              )}

              {/* Plan name */}
              <div>
                <h3
                  className={`text-2xl font-black uppercase mb-0.5 ${p.highlight ? "text-white" : "text-white"}`}
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {p.name}
                </h3>
                <p className={`text-xs tracking-widest ${p.highlight ? "text-orange-100" : "text-slate-500"}`}>
                  {p.nameZh}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1.5">
                <span
                  className={`text-4xl font-black ${p.highlight ? "text-white" : "text-orange-400"}`}
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {p.price}
                </span>
                <span className={`text-sm ${p.highlight ? "text-orange-100" : "text-slate-500"}`}>
                  {p.period}
                </span>
              </div>

              <p className={`text-sm leading-relaxed ${p.highlight ? "text-orange-100" : "text-slate-400"}`}>
                {p.desc}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${p.highlight ? "text-white" : "text-orange-400"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={p.highlight ? "text-white" : "text-slate-300"}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`mt-2 text-center font-bold text-sm py-3.5 rounded-full transition-all duration-200 uppercase tracking-wide ${
                  p.highlight
                    ? "bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
                    : "bg-orange-500 text-white hover:bg-orange-400 shadow-lg shadow-orange-500/25"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-xs mt-10">
          * Prices are indicative. Contact us for exact rates and custom packages. · 以上价格仅供参考，请联系我们获取最新报价。
        </p>
      </div>
    </section>
  );
}
