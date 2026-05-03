export default function Home() {
  const faqs = [
    {
      q: 'How does photo-based tracking work?',
      a: 'Simply snap a photo of your pills before taking them. Our AI recognizes the medication and logs the dose automatically — no manual entry needed.'
    },
    {
      q: 'How are family members notified?',
      a: 'Family members receive email alerts if a scheduled dose is missed. You control who gets notified and when, with customizable alert windows.'
    },
    {
      q: 'Is my health data private and secure?',
      a: 'Yes. All photos and health data are encrypted at rest and in transit. We never sell your data and you can delete everything at any time.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          AI-Powered Medication Tracking
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Never Miss a Dose.<br />
          <span className="text-[#58a6ff]">Keep Family in the Loop.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Snap a photo of your pills before taking them. MedSnap logs every dose, tracks your adherence, and automatically alerts loved ones if you miss a medication.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start for $7/mo
          </a>
          <a
            href="#how-it-works"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-medium px-8 py-4 rounded-lg text-lg transition-colors"
          >
            See How It Works
          </a>
        </div>
        <div id="how-it-works" className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            { icon: '📸', title: 'Snap a Photo', desc: 'Take a quick photo of your pills before each dose. Takes under 5 seconds.' },
            { icon: '🤖', title: 'AI Recognizes Pills', desc: 'Our AI identifies your medication and logs the dose with timestamp automatically.' },
            { icon: '🔔', title: 'Family Gets Alerted', desc: 'Missed a dose? Family members receive an instant email notification.' }
          ].map((step) => (
            <div key={step.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{step.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] text-center mb-10">One plan. Everything included. Cancel anytime.</p>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">MedSnap Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$7<span className="text-2xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need for peace of mind</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited pill photo logging',
              'AI-powered pill recognition',
              'Adherence dashboard & history',
              'Up to 5 family alert contacts',
              'Missed dose email notifications',
              'Encrypted health data storage',
              'Cancel anytime'
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started — $7/mo
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Secure checkout via Lemon Squeezy. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} MedSnap. Built for patients and families who care.</p>
      </footer>
    </main>
  )
}
