import { Star, Eye } from "lucide-react";

const CertificationSection = () => {
  const certifications = [
    {
      id: 1,
      image: "src/assets/python.png",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuously expanding my expertise through industry-recognized
            certifications and staying current with the latest technologies and
            best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-xl w-100 overflow-hidden shadow-md border border-slate-600 bg-slate-700/50 flex flex-col"
            >
              <img
                src={cert.image}
                alt={`Certificate ${cert.id}`}
                className="w-100 h-70 object-cover hover:scale-105 transition-transform duration-300"
              />

              {/* View button */}
              <div className="p-4 flex justify-center">
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-slate-700/50 px-6 py-3 rounded-lg border border-slate-600">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">
              {certifications.length} Active Certifications
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
