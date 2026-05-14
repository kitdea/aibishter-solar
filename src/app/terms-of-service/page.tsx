export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-poppins mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Last updated: May 14, 2026</p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website <strong>aibishter.com</strong>, you agree to be bound by these Terms
              of Service. If you do not agree with any part of these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-3">2. Services</h2>
            <p>
              Aibishter Engineering Services provides solar panel installation, electrical design, and related
              engineering services in the Philippines. Our website is used to provide information, accept consultation
              requests, and communicate with clients.
            </p>
            <p className="mt-3">
              All service engagements are subject to a separate written agreement or quotation signed by both parties.
              Content on this website does not constitute a binding service contract.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-3">3. Use of the Website</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the site or our systems</li>
              <li>Transmit harmful, offensive, or disruptive content through the site</li>
              <li>Reproduce or distribute our content without written permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, and images — is the property of
              Aibishter Engineering Services and is protected by applicable copyright and intellectual property laws.
              Unauthorized use is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-3">5. Disclaimer of Warranties</h2>
            <p>
              Our website and its content are provided on an "as is" basis without warranties of any kind, either
              express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of
              viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-3">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Aibishter Engineering Services shall not be liable for any
              indirect, incidental, special, or consequential damages arising from your use of, or inability to use,
              our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-3">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. These links are provided for convenience only.
              We have no control over those sites and are not responsible for their content or privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-3">8. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of the Republic of the Philippines. Any disputes
              arising from these terms shall be subject to the exclusive jurisdiction of the courts of Quezon Province.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-3">9. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. Changes will be posted on this page
              with a revised "Last updated" date. Continued use of the website after changes constitutes acceptance
              of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-3">10. Contact Us</h2>
            <p>For questions about these Terms of Service, please contact us:</p>
            <ul className="list-none pl-0 space-y-1 mt-3">
              <li><strong>Email:</strong> sales.aibishter@gmail.com</li>
              <li><strong>Phone:</strong> +63 917 189 8089</li>
              <li><strong>Address:</strong> PH 6, Citta Grande, Via Lucera Street Blk 4 Lot 18, Lucena City, Quezon 4301</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
