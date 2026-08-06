const certificates = [
  {
    id: 1,
    title: "JavaScript Essentials 2",
    issuer: "Cisco",
    date: "June 11, 2026",
    credentialId: "Cert ID: 92a2f8bd-dd1d-456e-b46b-1a1003eb0467",
    verificationUrl:
      "https://www.credly.com/badges/f7a98a24-4e8f-4352-81aa-f6b762fb4a11/public_url",
  },
  {
    id: 2,
    title: "JavaScript Essentials 2",
    issuer: "Cisco",
    date: "June 11, 2026",
    credentialId: "Cert ID: 92a2f8bd-dd1d-456e-b46b-1a1003eb0467",
    verificationUrl:
      "https://www.credly.com/badges/f7a98a24-4e8f-4352-81aa-f6b762fb4a11/public_url",
  },
  {
    id: 3,
    title: "JavaScript Essentials 2",
    issuer: "Cisco",
    date: "June 11, 2026",
    credentialId: "Cert ID: 92a2f8bd-dd1d-456e-b46b-1a1003eb0467",
    verificationUrl:
      "https://www.credly.com/badges/f7a98a24-4e8f-4352-81aa-f6b762fb4a11/public_url",
  },
];

export default function CertificatePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Certificates</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Sertifikasi keahlian dan pencapaian akademik yang saya raih selama
          menempuh pembelajaran di bidang Informatika.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400 font-bold border border-indigo-500/20">
                📜
              </div>
              <h3 className="text-lg font-bold text-white mb-2 hover:text-indigo-400 transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-indigo-400 font-medium text-sm mb-4">
                {cert.issuer}
              </p>
              <div className="space-y-1.5 text-xs text-gray-400">
                <p>
                  <span className="font-medium text-gray-300">
                    Diterbitkan:
                  </span>{" "}
                  {cert.date}
                </p>
                <p>
                  <span className="font-medium text-gray-300">
                    ID Kredensial:
                  </span>{" "}
                  {cert.credentialId}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800">
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-indigo-400 transition-colors duration-300"
              >
                Lihat Kredensial <span className="text-sm">↗️</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}