export default function Contact() {
  return (
    <section id="contact" className="bg-[#14142b] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-400 font-bold text-xs tracking-[0.25em] uppercase mb-3">
            联系我们 · GET IN TOUCH
          </p>
          <h2
            className="text-white text-4xl md:text-5xl font-black uppercase"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Ready to <span className="text-orange-500">Grow?</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Talk to us for free. No commitment, no pressure — just a straight conversation about how we can help your business.
            <br />
            <span className="text-slate-500">无需承诺，免费咨询，先聊聊再说。</span>
          </p>
        </div>

        {/* Contact card */}
        <div className="bg-[#1c1c2e] border border-white/8 rounded-3xl p-10 md:p-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: info */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-2">Company</p>
                <p className="text-white text-xl font-bold" style={{ fontFamily: "var(--font-barlow)" }}>
                  CL SDN BHD
                </p>
                <p className="text-slate-400 text-sm mt-1">Kuala Lumpur, Malaysia</p>
              </div>

              <div>
                <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-2">Services</p>
                <ul className="text-slate-300 text-sm flex flex-col gap-1.5">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-orange-400" />
                    Social Media Video Sharing · 社媒视频推广
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-orange-400" />
                    Telegram Entertainment Bot · 娱乐 Bot 创建
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-orange-400" />
                    Customer Acquisition · 精准获客
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-2">Response Time</p>
                <p className="text-slate-300 text-sm">
                  We reply within <span className="text-white font-semibold">2 hours</span> during business hours (9am–6pm MYT).
                </p>
              </div>
            </div>

            {/* Right: contact buttons */}
            <div className="flex flex-col gap-4">
              <p className="text-slate-400 text-sm text-center md:text-left mb-2">
                Reach us directly on:
              </p>

              {/* Telegram */}
              <a
                href="https://t.me/YourUsername"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-[#229ED9]/10 hover:bg-[#229ED9]/20 border border-[#229ED9]/30 hover:border-[#229ED9]/60 text-white rounded-2xl px-6 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#229ED9]/15"
              >
                <div className="w-12 h-12 rounded-full bg-[#229ED9] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#229ED9]/30">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.247l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.18 13.668l-2.956-.924c-.643-.204-.657-.643.136-.953l11.543-4.453c.537-.194 1.006.131.659.909z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-base">Telegram</p>
                  <p className="text-slate-400 text-sm">@YourUsername · 点击直接联系</p>
                </div>
                <svg className="w-5 h-5 text-slate-500 group-hover:text-[#229ED9] group-hover:translate-x-1 transition-all" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/60XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366]/60 text-white rounded-2xl px-6 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/15"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#25D366]/30">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-base">WhatsApp</p>
                  <p className="text-slate-400 text-sm">+60X-XXXX-XXXX · 点击直接联系</p>
                </div>
                <svg className="w-5 h-5 text-slate-500 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>

              <p className="text-slate-600 text-xs text-center mt-2">
                Based in Kuala Lumpur · 总部位于吉隆坡
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
