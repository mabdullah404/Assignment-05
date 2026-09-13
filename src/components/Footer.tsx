import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white mt-0.5">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-8 sm:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-start">
          <div className="max-w-xs text-center sm:text-left">
            <img src={logo} alt="Dev Stack" className="w-[110px] sm:w-[126px] mb-3 mx-auto sm:mx-0" />
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm font-light text-slate-600">
              <a href="https://github.com/mabdullah404" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">GitHub</a>
              <span className="text-slate-600">•</span>
              <a href="https://x.com/mabdullah77d" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">Twitter</a>
              <span className="text-slate-600">•</span>
              <a href="https://www.linkedin.com/in/mabdullah77/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">LinkedIn</a>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-10 md:gap-14">
            <div>
              <h4 className="text-xs font-semibold text-slate-900 tracking-wide mb-4">
                PRODUCT
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-pink-600">Home</a></li>
                <li><a href="#" className="hover:text-pink-600">Technologies</a></li>
                <li><a href="#" className="hover:text-pink-600">Projects</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-900 tracking-wide mb-4">
                COMPANY
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-pink-600">About</a></li>
                <li><a href="#" className="hover:text-pink-600">Contact</a></li>
                <li><a href="#" className="hover:text-pink-600">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-900 tracking-wide mb-4">
                LEGAL
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-pink-600">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 justify-between flex md:flex-col gap-4 text-xs text-slate-400 sm:flex-row sm:justify-between sm:items-center">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-pink-600">Privacy</a>
            <a href="#" className="hover:text-pink-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
