import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white mt-0.5">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-8 sm:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-start">
          {/* Brand */}
          <div className="max-w-xs">
            <img src={logo} alt="Dev Stack" className="w-31.5 mb-3" />
            <p className="text-sm text-slate-500 mb-4">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            {/* Social link */}
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
              <a href="https://github.com/mabdullah404" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">GitHub</a>
              <a href="https://x.com/mabdullah77d" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">Twitter</a>
              <a href="https://www.linkedin.com/in/mabdullah77/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">LinkedIn</a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10 md:gap-14">
            {/* Product */}
            <div>
              <h4 className="text-xs font-semibold text-slate-900 tracking-wide mb-4">
                PRODUCT
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-semibold text-slate-900 tracking-wide mb-4">
                COMPANY
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-pink-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-semibold text-slate-900 tracking-wide mb-4">
                LEGAL
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-600">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col gap-4 text-xs text-slate-400 sm:flex-row sm:justify-between sm:items-center">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-pink-600">
              Privacy
            </a>
            <a href="#" className="hover:text-pink-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
