export default function CookiePolicyPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-poppins mb-4">
            Cookie Policy
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Last updated: May 14, 2026</p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-3">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help websites
              remember your preferences, improve performance, and provide analytics data to help us understand
              how visitors use our site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-3">2. How We Use Cookies</h2>
            <p>Aibishter Engineering Services uses cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly (e.g., theme preference, session handling). These cannot be disabled.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site — which pages are most visited, how long users stay, and where they come from. We use this data to improve our content and user experience.</li>
              <li><strong>Preference Cookies:</strong> Remember your settings such as dark/light mode so you don't have to reset them on every visit.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-3">3. Types of Cookies We Use</h2>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-2 pr-4 font-bold text-slate-900 dark:text-white">Cookie</th>
                    <th className="text-left py-2 pr-4 font-bold text-slate-900 dark:text-white">Type</th>
                    <th className="text-left py-2 font-bold text-slate-900 dark:text-white">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">theme</td>
                    <td className="py-2 pr-4">Preference</td>
                    <td className="py-2">Stores your dark/light mode preference</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">_ga</td>
                    <td className="py-2 pr-4">Analytics</td>
                    <td className="py-2">Google Analytics — tracks site usage anonymously</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">_gid</td>
                    <td className="py-2 pr-4">Analytics</td>
                    <td className="py-2">Google Analytics — distinguishes users for 24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-3">4. Third-Party Cookies</h2>
            <p>
              Some pages on our site may include content or tools from third parties (such as Google Analytics or
              embedded maps) that set their own cookies. We do not control these cookies. Please refer to the
              respective third-party privacy policies for more information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-3">5. Managing Cookies</h2>
            <p>
              You can control and delete cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>View which cookies are stored on your device</li>
              <li>Delete cookies individually or all at once</li>
              <li>Block cookies from specific websites or all websites</li>
            </ul>
            <p className="mt-3">
              Note that disabling certain cookies may affect the functionality of our website, such as the ability
              to remember your theme preference.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-3">6. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be reflected on this page with
              a revised "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-3">7. Contact Us</h2>
            <p>If you have questions about our use of cookies, please contact us:</p>
            <ul className="list-none pl-0 space-y-1 mt-3">
              <li><strong>Email:</strong> sales.aibishter@gmail.com</li>
              <li><strong>Phone:</strong> +63 917 189 8089</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
