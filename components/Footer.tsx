export default function Footer() {
  return (
    <footer className="bg-[#0e0e1f] border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3 max-w-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center">
                <span className="text-white font-black text-sm" style={{ fontFamily: "var(--font-barlow)" }}>
                  CL
                </span>
              </div>
              <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-barlow)" }}>
                CL SDN BHD
              </span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed text-center md:text-left">
              Kuala Lumpur's customer acquisition agency. Social media video sharing & Telegram entertainment bots.
              <br />
              <span className="text-slate-600">吉隆坡专业客户开发公司</span>
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-10 gap-y-4">
            <div className="flex flex-col gap-2">
              <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-1">Navigate</p>
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#why-us" },
                { label: "Services", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-1">Services</p>
              {[
                "Social Media Video Sharing",
                "Telegram Entertainment Bot",
                "Customer Acquisition",
              ].map((s) => (
                <a key={s} href="#features" className="text-slate-400 hover:text-white text-sm transition-colors">
                  {s}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-1">Contact</p>
              <a
                href="https://t.me/YourUsername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#229ED9] text-sm transition-colors flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.247l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.18 13.668l-2.956-.924c-.643-.204-.657-.643.136-.953l11.543-4.453c.537-.194 1.006.131.659.909z" />
                </svg>
                Telegram
              </a>
              <a
                href="https://wa.me/60XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#25D366] text-sm transition-colors flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <p className="text-slate-600 text-xs mt-1">Kuala Lumpur, Malaysia</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © 2025 CL SDN BHD. All rights reserved. · 版权所有
          </p>
          <p className="text-slate-700 text-xs">
            Growing businesses in Kuala Lumpur, Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
}
