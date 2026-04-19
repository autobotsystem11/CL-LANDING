const reviews = [
  {
    name: "Ahmad Fariz",
    role: "F&B Owner, KL",
    roleZh: "餐饮业主",
    avatar: "AF",
    rating: 5,
    text: "Within 3 weeks, our Telegram bot had 2,000 subscribers and our daily orders jumped by 40%. The team at CL SDN BHD really knows how to get people engaged.",
    textZh: "三周内，我们的 Telegram Bot 累积了 2000 名订阅者，每日订单增加了 40%。",
  },
  {
    name: "Priya Nair",
    role: "E-Commerce Store, Petaling Jaya",
    roleZh: "电商店主",
    avatar: "PN",
    rating: 5,
    text: "I was skeptical at first, but the social media video sharing brought real traffic to my store. Not bots — actual customers asking about my products. Incredible ROI.",
    textZh: "起初我很怀疑，但社媒视频推广带来了真实的流量。真正的客户在询问我的产品。",
  },
  {
    name: "David Lim",
    role: "Training Academy, Subang",
    roleZh: "培训中心负责人",
    avatar: "DL",
    rating: 5,
    text: "The Telegram bot they built keeps our students coming back daily. Quizzes, updates, announcements — it handles everything. Sign-up rates for new courses are up 60%.",
    textZh: "他们做的 Bot 让我们的学生每天都回来。课程报名率提升了 60%。",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-orange-400" : "text-white/15"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#14142b] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-400 font-bold text-xs tracking-[0.25em] uppercase mb-3">
            客户反馈 · TESTIMONIALS
          </p>
          <h2
            className="text-white text-4xl md:text-5xl font-black uppercase"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            What Our <span className="text-orange-500">Clients Say</span>
          </h2>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-[#1c1c2e] border border-white/5 hover:border-orange-500/25 rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
            >
              {/* Quote icon */}
              <svg className="w-8 h-8 text-orange-500/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-slate-300 text-sm leading-relaxed flex-1">"{r.text}"</p>

              <p className="text-slate-500 text-xs italic">「{r.textZh}」</p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white text-xs font-bold">
                    {r.avatar}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{r.name}</p>
                    <p className="text-slate-500 text-xs">{r.role}</p>
                  </div>
                </div>
                <Stars count={r.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "150+", label: "Clients Served", labelZh: "服务客户" },
            { value: "3M+",  label: "Video Views",    labelZh: "视频观看量" },
            { value: "98%",  label: "Satisfaction",   labelZh: "满意度" },
            { value: "48h",  label: "Launch Time",    labelZh: "上线时间" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span
                className="text-4xl font-black text-orange-500"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {s.value}
              </span>
              <span className="text-slate-300 text-sm font-medium">{s.label}</span>
              <span className="text-slate-600 text-xs">{s.labelZh}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
