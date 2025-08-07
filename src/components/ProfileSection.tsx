import { MapPin, Mail, Phone, Github, Linkedin, Download,  } from 'lucide-react';

const ProfileSection = () => {
  return (
    <section id="profile" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="src/assets/new-image.webp"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white p-3 rounded-full shadow-lg">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="text-white">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 
  leading-[1.8] bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Pratham Singh
              </h1>
              <h2 className="text-xl relative top-30px sm:text-2xl text-blue-300 mb-6 font-light">
                Mern stack developer & Generative AI enthusiast
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                A driven fresher in  Generative AI ,web development, exploring modern technologies like langchain,AI automation,React, Node.js.
I enjoy designing and developing responsive, user-friendly applications with a creative touch.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Ludhiana,Punjab</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
  <a
    href="mailto:singhpratham128@gmail.com"
    className="hover:underline"
  >
    singhpratham128@gmail.com
  </a>

              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+91 95011-22358</span>
              </div>
            </div>

            {/* Social Links & Actions */}
            <div className="flex flex-wrap gap-4">
              <a
               href="/PRATHAM-SINGH-CV-(2025)" 
               download="Pratham_Singh_CV"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
              <a
               href="https://github.com/Prathamsenger" 
                target="_blank"
                className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                 href="https://www.linkedin.com/in/pratham-singh-3303682b5" 
                target="_blank" 
                className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;