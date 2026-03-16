
import React, { useState } from 'react';
import { Facebook, MessageCircle, X } from 'lucide-react';
import { ViewState } from '../App';

interface FooterProps {
  setView: (view: ViewState) => void;
}

type ModalType = 'terms' | 'privacy' | null;

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const [modalOpen, setModalOpen] = useState<ModalType>(null);

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-8">
              <img src="/hightech-logo.png" alt="High Tech Furniture" className="h-20 w-auto max-w-[240px]" />
            </div>
            <p className="text-white text-[11px] leading-relaxed mb-8 max-w-xs">
              Revolutionizing workspaces since 2003. Based in Coimbatore, serving excellence across borders.
            </p>
            <div className="flex justify-start gap-4">
              <a href="https://www.facebook.com/hightechfurniture/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/10 flex items-center justify-center hover:bg-[#4CAF50] hover:border-[#4CAF50] transition-all"><Facebook size={14} /></a>
              <a href="https://wa.me/919500644413" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/10 flex items-center justify-center hover:bg-[#4CAF50] hover:border-[#4CAF50] transition-all"><MessageCircle size={14} /></a>
            </div>
          </div>

          <div className="text-left">
            <h3 className="text-[#4CAF50] font-black text-[8px] uppercase tracking-[0.4em] mb-8">Catalog</h3>
            <ul className="space-y-4 text-[10px] font-bold text-white uppercase tracking-[0.2em]">
              <li><button onClick={() => setView('catalog')} className="hover:text-[#4CAF50] transition-colors">Workstations</button></li>
              <li><button onClick={() => setView('catalog')} className="hover:text-[#4CAF50] transition-colors">Executive</button></li>
              <li><button onClick={() => setView('catalog')} className="hover:text-[#4CAF50] transition-colors">Ergonomic</button></li>
              <li><button onClick={() => setView('catalog')} className="hover:text-[#4CAF50] transition-colors">Lounge</button></li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-[#4CAF50] font-black text-[8px] uppercase tracking-[0.4em] mb-8">Company</h3>
            <ul className="space-y-4 text-[10px] font-bold text-white uppercase tracking-[0.2em]">
              <li><button onClick={() => setView('story')} className="hover:text-[#4CAF50] transition-colors">Legacy</button></li>
              <li><button onClick={() => setView('services')} className="hover:text-[#4CAF50] transition-colors">Services</button></li>
              <li><button onClick={() => setView('inquiry')} className="hover:text-[#4CAF50] transition-colors">Contact</button></li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-[#4CAF50] font-black text-[8px] uppercase tracking-[0.4em] mb-8">Headquarters</h3>
            <div className="space-y-6">
              <div>
                <p className="text-[7px] font-black uppercase text-white mb-1">Connect</p>
                <p className="text-[10px] font-bold break-all">hightechindustriess@gmail.com</p>
              </div>
              <div>
                <p className="text-[7px] font-black uppercase text-white mb-1">Presence</p>
                <p className="text-[10px] font-bold max-w-[180px]">14, South, near Ambal Nagar, Coimbatore, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-6">
          <p className="text-white text-[7px] uppercase tracking-[0.5em] font-black cursor-pointer">
            <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#4CAF50] after:transition-all after:duration-300 hover:after:w-full">
              © 2026 High Tech Furniture · We Bring Life Back to Wood
            </span>
          </p>
          <div className="flex gap-6 text-white/20 text-[7px] uppercase tracking-[0.5em] font-black">
            <button onClick={() => setModalOpen('terms')} className="text-white hover:text-[#4CAF50] transition-colors cursor-pointer">Terms</button>
            <button onClick={() => setModalOpen('privacy')} className="text-white hover:text-[#4CAF50] transition-colors cursor-pointer">Privacy</button>
          </div>
        </div>
      </div>

      {/* Modal Backdrop */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-3 sm:p-4" onClick={() => setModalOpen(null)}>
          <div className="bg-white rounded-lg max-w-lg w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-black text-white flex justify-between items-center p-4 sm:p-6 border-b border-white/10 gap-4">
              <h2 className="text-lg sm:text-2xl font-black uppercase tracking-tight break-words">
                {modalOpen === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}
              </h2>
              <button onClick={() => setModalOpen(null)} className="p-1 hover:bg-white/10 rounded transition-colors flex-shrink-0">
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-8 space-y-4 sm:space-y-6 text-gray-800">
              {modalOpen === 'terms' ? (
                <>
                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">1. Introduction</h3>
                    <p className="text-xs sm:text-sm leading-relaxed">These Terms and Conditions govern your use of the High Tech Furniture website and services. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">2. Use License</h3>
                    <p className="text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">Permission is granted to temporarily download one copy of the materials (information or software) on High Tech Furniture's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                    <ul className="text-xs sm:text-sm space-y-1 sm:space-y-2 ml-3 sm:ml-4">
                      <li>• Modify or copy the materials</li>
                      <li>• Use the materials for any commercial purpose or for any public display</li>
                      <li>• Attempt to reverse engineer, disassemble, or decode any software or services provided</li>
                      <li>• Remove any copyright or other proprietary notations from the materials</li>
                      <li>• Transfer the materials to another person or "mirror" the materials on any other server</li>
                      <li>• Breach any applicable laws or regulations</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">3. Disclaimer</h3>
                    <p className="text-xs sm:text-sm leading-relaxed">The materials on High Tech Furniture's website are provided on an 'as is' basis. High Tech Furniture makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">4. Limitations</h3>
                    <p className="text-xs sm:text-sm leading-relaxed">In no event shall High Tech Furniture or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on High Tech Furniture's website, even if High Tech Furniture or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">5. Accuracy of Materials</h3>
                    <p className="text-xs sm:text-sm leading-relaxed">The materials appearing on High Tech Furniture's website could include technical, typographical, or photographic errors. High Tech Furniture does not warrant that any of the materials on its website are accurate, complete, or current. High Tech Furniture may make changes to the materials contained on its website at any time without notice.</p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">6. Links</h3>
                    <p className="text-xs sm:text-sm leading-relaxed">High Tech Furniture has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by High Tech Furniture of the site. Use of any such linked website is at the user's own risk.</p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">7. Modifications</h3>
                    <p className="text-xs sm:text-sm leading-relaxed">High Tech Furniture may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">8. Governing Law</h3>
                    <p className="text-xs sm:text-sm leading-relaxed">These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in Coimbatore.</p>
                  </section>
                </>
              ) : (
                <>
                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">1. Information We Collect</h3>
                    <p className="text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">We collect information you provide directly to us, such as:</p>
                    <ul className="text-xs sm:text-sm space-y-1 sm:space-y-2 ml-3 sm:ml-4">
                      <li>• Contact information (name, email, phone number, address)</li>
                      <li>• Inquiry and project details</li>
                      <li>• Payment information for transactions</li>
                      <li>• Communications and preferences</li>
                    </ul>
                    <p className="text-xs sm:text-sm leading-relaxed mt-2 sm:mt-3">We also automatically collect certain information when you visit our website, including IP address, browser type, pages visited, and time spent on pages.</p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">2. How We Use Your Information</h3>
                    <p className="text-xs sm:text-sm leading-relaxed">We use the information we collect to:</p>
                    <ul className="text-xs sm:text-sm space-y-1 sm:space-y-2 ml-3 sm:ml-4 mt-2">
                      <li>• Respond to inquiries and provide customer support</li>
                      <li>• Process and fulfill orders and transactions</li>
                      <li>• Send marketing communications (with your consent)</li>
                      <li>• Improve our website and services</li>
                      <li>• Comply with legal obligations</li>
                      <li>• Protect against fraud and security issues</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">3. Data Protection & Security</h3>
                    <p className="text-xs sm:text-sm leading-relaxed">We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">4. Information Sharing</h3>
                    <p className="text-xs sm:text-sm leading-relaxed">We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.</p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">5. Cookies & Tracking</h3>
                    <p className="text-xs sm:text-sm leading-relaxed">Our website uses cookies to enhance your browsing experience. These allow us to remember preferences and analyze website usage patterns. You can control cookie settings through your browser preferences.</p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">6. Your Rights</h3>
                    <p className="text-xs sm:text-sm leading-relaxed">You have the right to:</p>
                    <ul className="text-xs sm:text-sm space-y-1 sm:space-y-2 ml-3 sm:ml-4 mt-2">
                      <li>• Access the personal information we hold about you</li>
                      <li>• Request correction of inaccurate information</li>
                      <li>• Request deletion of your information (subject to legal requirements)</li>
                      <li>• Opt-out of marketing communications</li>
                      <li>• Request information about how your data is processed</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">7. Third-Party Links</h3>
                    <p className="text-xs sm:text-sm leading-relaxed">Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing any personal information.</p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">8. Children's Privacy</h3>
                    <p className="text-xs sm:text-sm leading-relaxed">Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information.</p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">9. Changes to This Policy</h3>
                    <p className="text-xs sm:text-sm leading-relaxed">High Tech Furniture reserves the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting to the website. Your continued use of our website following any changes constitutes your acceptance of the new Privacy Policy.</p>
                  </section>

                  <section>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3 uppercase">10. Contact Us</h3>
                    <p className="text-xs sm:text-sm leading-relaxed">If you have questions about this Privacy Policy or our privacy practices, please contact us at: <strong>hightechindustriess@gmail.com</strong></p>
                  </section>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-4 sm:p-6 flex justify-end">
              <button
                onClick={() => setModalOpen(null)}
                className="px-4 sm:px-6 py-2 bg-black text-white font-black uppercase text-xs sm:text-sm rounded hover:bg-[#4CAF50] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
