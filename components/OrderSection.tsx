"use client";

import { useState } from "react";

const PACKAGES = [
  {
    id: "starter",
    emoji: "🌱",
    name: "初创套餐",
    subtitle: "1个月 Telegram 推广",
    price: 800,
    features: ["Telegram Bot 推广", "每日定时发送", "点击追踪报告", "专属追踪链接"],
    color: "orange",
  },
  {
    id: "growth",
    emoji: "🚀",
    name: "成长套餐",
    subtitle: "2个月 + 2平台推广",
    price: 1500,
    features: ["Telegram + Instagram", "内容策划支持", "每周数据汇报", "优先客服支持", "专属追踪链接"],
    color: "purple",
    popular: true,
  },
  {
    id: "blast",
    emoji: "💥",
    name: "爆发套餐",
    subtitle: "3个月 + 全平台 + 内容制作",
    price: 3000,
    features: ["全平台推广", "专业内容制作", "日报 + 周报", "专属客户经理", "月度策略会议", "专属追踪链接"],
    color: "pink",
  },
];

const API_URL = "https://ad-dashboard-orcin.vercel.app/api/orders";

export default function OrderSection() {
  const [selectedPkg, setSelectedPkg] = useState<(typeof PACKAGES)[0] | null>(null);
  const [form, setForm] = useState({ name: "", contact: "", desc: "" });
  const [submitting, setSubmitting] = useState(false);
  const [paid, setPaid] = useState(false);
  const [customerName, setCustomerName] = useState("");

  function openForm(pkg: (typeof PACKAGES)[0]) {
    setSelectedPkg(pkg);
    setForm({ name: "", contact: "", desc: "" });
    setPaid(false);
    setTimeout(() => {
      document.getElementById("order-form-section")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedPkg) return;
    setSubmitting(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: form.name,
          customer_contact: form.contact,
          package_name: selectedPkg.name,
          package_price: selectedPkg.price,
          final_price: selectedPkg.price,
          discount_pct: 0,
          business_description: form.desc || null,
          source: "website",
        }),
      });
      if (!res.ok) throw new Error("提交失败");
      setCustomerName(form.name);
      setPaid(true);
    } catch {
      alert("❌ 提交失败，请稍后再试或直接 WhatsApp 联系我们");
    } finally {
      setSubmitting(false);
    }
  }

  const borderColor = {
    orange: "border-orange-500/50",
    purple: "border-purple-500/50",
    pink: "border-pink-500/50",
  };
  const accentColor = {
    orange: "text-orange-400",
    purple: "text-purple-400",
    pink: "text-pink-400",
  };
  const btnColor = {
    orange: "bg-orange-500 hover:bg-orange-400",
    purple: "bg-purple-500 hover:bg-purple-400",
    pink: "bg-pink-500 hover:bg-pink-400",
  };

  return (
    <section id="order" className="bg-[#0d0d1a] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-400 font-bold text-xs tracking-[0.25em] uppercase mb-3">
            立即下单 · ORDER NOW
          </p>
          <h2
            className="text-white text-4xl md:text-5xl font-black uppercase"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            选择你的<span className="text-orange-500">推广套餐</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            下单后我们会在 24 小时内联系你，确认推广详情并开始执行。
          </p>
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => openForm(pkg)}
              className={`relative rounded-2xl p-7 border-2 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                selectedPkg?.id === pkg.id
                  ? `${borderColor[pkg.color as keyof typeof borderColor]} shadow-lg`
                  : "border-white/8 hover:border-white/20"
              } bg-[#13131f]`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-black px-4 py-1 rounded-full whitespace-nowrap shadow-lg">
                  ⭐ 最受欢迎
                </span>
              )}
              {selectedPkg?.id === pkg.id && (
                <span className="absolute top-4 right-4 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</span>
              )}

              <div className="text-3xl mb-4">{pkg.emoji}</div>
              <h3 className="text-white text-xl font-black mb-1" style={{ fontFamily: "var(--font-barlow)" }}>
                {pkg.name}
              </h3>
              <p className="text-slate-500 text-xs mb-4">{pkg.subtitle}</p>

              <div className={`text-3xl font-black mb-5 ${accentColor[pkg.color as keyof typeof accentColor]}`}
                style={{ fontFamily: "var(--font-barlow)" }}>
                RM {pkg.price.toLocaleString()}
              </div>

              <ul className="flex flex-col gap-2.5 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className={`w-4 h-4 rounded-full flex-shrink-0 ${btnColor[pkg.color as keyof typeof btnColor].split(" ")[0]} flex items-center justify-center text-white text-[9px]`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full text-white font-bold text-sm uppercase tracking-wide transition-all duration-200 ${btnColor[pkg.color as keyof typeof btnColor]}`}
                onClick={(e) => { e.stopPropagation(); openForm(pkg); }}
              >
                立即下单 →
              </button>
            </div>
          ))}
        </div>

        {/* Order Form (inline, shown when package selected) */}
        {selectedPkg && (
          <div id="order-form-section" className="max-w-lg mx-auto">
            <div className="bg-[#13131f] border border-white/10 rounded-2xl p-8">
              {!paid ? (
                <>
                  <h3 className="text-white text-lg font-bold mb-1">
                    📦 {selectedPkg.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">
                    RM {selectedPkg.price.toLocaleString()} · {selectedPkg.subtitle}
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-slate-400 text-xs mb-2">姓名 *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="你的名字或公司名"
                        required
                        className="w-full bg-[#1c1c2e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-orange-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs mb-2">WhatsApp / 联系方式 *</label>
                      <input
                        type="text"
                        value={form.contact}
                        onChange={(e) => setForm({ ...form, contact: e.target.value })}
                        placeholder="+601X-XXXXXXX"
                        required
                        className="w-full bg-[#1c1c2e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-orange-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs mb-2">简述你的业务（可选）</label>
                      <textarea
                        value={form.desc}
                        onChange={(e) => setForm({ ...form, desc: e.target.value })}
                        placeholder="例：我经营一家餐厅，想推广外卖服务..."
                        rows={3}
                        className="w-full bg-[#1c1c2e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-orange-500/50 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-sm uppercase tracking-wide transition-all duration-200 hover:opacity-90 disabled:opacity-50"
                    >
                      {submitting ? "提交中..." : "确认下单 →"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h4 className="text-green-400 text-lg font-bold mb-2">订单已提交！</h4>
                  <p className="text-slate-400 text-sm mb-6">请在 24 小时内完成转账，我们将尽快联系你</p>

                  <div className="bg-green-500/8 border border-green-500/20 rounded-xl p-5 text-left mb-4">
                    <p className="text-green-400 text-xs font-bold text-center mb-4">🏦 银行转账详情</p>
                    <div className="flex flex-col gap-3 text-sm">
                      {[
                        ["银行", "Maybank"],
                        ["账户名", "CL SDN BHD"],
                        ["账户号", "5612-3456-7890"],
                        ["转账金额", `RM ${selectedPkg.price.toLocaleString()}`],
                        ["备注", customerName],
                      ].map(([label, value]) => (
                        <div key={label} className="flex justify-between">
                          <span className="text-slate-500">{label}</span>
                          <strong className={label === "账户号" ? "text-orange-400 tracking-widest" : label === "转账金额" ? "text-green-400" : "text-white"}>
                            {value}
                          </strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-orange-500/8 border border-orange-500/20 rounded-xl p-4 text-xs text-slate-400 mb-5">
                    ⚠️ 付款后请 WhatsApp 我们发送截图确认，谢谢！
                  </div>

                  <a
                    href="https://wa.me/60YOUR_WHATSAPP_NUMBER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 text-white font-bold text-sm px-8 py-3 rounded-full hover:bg-green-400 transition-colors"
                  >
                    📱 WhatsApp 发送截图
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
