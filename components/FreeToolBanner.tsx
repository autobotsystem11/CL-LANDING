"use client";

const CALC_URL = "https://ad-dashboard-orcin.vercel.app/calculator.html";

export default function FreeToolBanner() {
  return (
    <section
      id="free-tool"
      className="relative overflow-hidden py-20 px-6"
      style={{ background: "linear-gradient(135deg, #0f0f1a 0%, #1a0b4b 50%, #0f0f1a 100%)" }}
    >
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Tag */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
            ✨ 完全免费 · 马来西亚商家专属
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-center text-white mb-4"
          style={{
            fontFamily: "var(--font-barlow)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            textTransform: "uppercase",
            lineHeight: 1.1,
          }}
        >
          60秒，免费预测你的
          <span className="text-orange-500"> 广告效果</span>
        </h2>
        <p className="text-center text-slate-400 text-base mb-10 max-w-xl mx-auto leading-relaxed">
          输入你的行业和预算，立即获得专业预估报告 + 3 款个性化广告文案，无需注册，完全免费！
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { icon: "📊", title: "效果预估", desc: "预计触及人数、点击、新增客户、ROI" },
            { icon: "📝", title: "3款广告文案", desc: "热门款、促销款、故事款，一键复制" },
            { icon: "🎯", title: "策略建议", desc: "最佳发送时间、频率、平台推荐" },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-5 border text-center"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <div className="text-white font-bold text-base mb-1">{f.title}</div>
              <div className="text-slate-400 text-sm">{f.desc}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CALC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-bold px-10 py-4 rounded-full transition-all duration-200 shadow-2xl hover:-translate-y-1 text-base"
            style={{ boxShadow: "0 0 40px rgba(249,115,22,0.35)" }}
          >
            🚀 立即免费预测广告效果
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <span className="text-slate-500 text-sm">已有 500+ 商家使用 · 无需注册</span>
        </div>

        {/* Mini preview strip */}
        <div
          className="mt-12 rounded-2xl border p-6 mx-auto max-w-2xl"
          style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(249,115,22,0.2)" }}
        >
          <div className="text-xs text-orange-400 font-bold uppercase tracking-widest mb-4">预估报告样本</div>
          <div className="grid grid-cols-4 gap-3">
            {[
              { val: "1,440人", lbl: "预计触及", color: "#f97316" },
              { val: "115次",   lbl: "预计点击", color: "#3b82f6" },
              { val: "14人",   lbl: "新增客户", color: "#22c55e" },
              { val: "1.5x",   lbl: "投资回报", color: "#a855f7" },
            ].map((s) => (
              <div key={s.lbl} className="text-center rounded-xl p-3"
                style={{ background: "rgba(255,255,255,0.04)" }}>
                <div className="font-extrabold text-lg mb-1" style={{ color: s.color }}>{s.val}</div>
                <div className="text-slate-500 text-xs">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
