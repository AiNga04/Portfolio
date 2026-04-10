import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Music,
  MoveRight,
  Code2,
  Cpu,
  Database,
  Layers,
} from "lucide-react";
import { cvData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] -z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Code2 className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Ái{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                  Nga
                </span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Hi, I&apos;m Truong Ai Nga, a passionate front-end developer who
              loves crafting beautiful and functional web experiences. Always
              eager to learn and grow in the ever-evolving tech world.
            </p>
            <div className="flex space-x-4">
              {cvData.socials.map((social, index) => {
                const Icon =
                  social.platform === "Facebook"
                    ? Facebook
                    : social.platform === "Github"
                      ? Github
                      : social.platform === "Instagram"
                        ? Instagram
                        : Linkedin;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    aria-label={social.platform}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Skills Summary */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider flex items-center">
              <span className="w-8 h-px bg-cyan-500 mr-3"></span>
              Skills
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <Code2
                  className="text-cyan-500 shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={16}
                />
                <span className="text-gray-400 text-sm">
                  HTML, SCSS, JavaScript, TypeScript, Java
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <Cpu
                  className="text-blue-500 shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={16}
                />
                <span className="text-gray-400 text-sm">
                  React.js, Next.js, Node.js, Nest.js, Spring Boot
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <Database
                  className="text-indigo-500 shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={16}
                />
                <span className="text-gray-400 text-sm">
                  MySQL, PostgreSQL, MongoDB
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <Layers
                  className="text-purple-500 shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={16}
                />
                <span className="text-gray-400 text-sm">
                  Bootstrap, MUI, Antd, Tailwind CSS, shadcn/ui
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Hobbies */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider flex items-center">
              <span className="w-8 h-px bg-blue-500 mr-3"></span>
              Hobbies
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <BookOpen className="text-orange-500" size={16} />
                </div>
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  Reading Technology Blogs
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <MoveRight className="text-emerald-500" size={16} />
                </div>
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  Walking & Refreshing
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center">
                  <Music className="text-pink-500" size={16} />
                </div>
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  Listening to Music
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider flex items-center">
              <span className="w-8 h-px bg-indigo-500 mr-3"></span>
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin className="text-rose-500 shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-white text-sm font-medium">
                    {cvData.contact.address}
                  </p>
                  <p className="text-gray-500 text-xs">Viet Nam</p>
                </div>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="text-amber-500 shrink-0" size={18} />
                <a
                  href={`tel:${cvData.contact.phone}`}
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {cvData.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="text-cyan-500 shrink-0" size={18} />
                <a
                  href={`mailto:${cvData.contact.email}`}
                  className="text-gray-400 text-sm hover:text-white transition-colors break-all"
                >
                  {cvData.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Trương Ái Nga. All rights
            reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
