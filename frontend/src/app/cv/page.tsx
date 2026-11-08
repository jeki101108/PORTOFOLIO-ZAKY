const cvUrl = "/Muhammad%20Zaky%20Alkhaer%20Ahmad.pdf";

export default function CvPage() {
  return (
    <section className="py-16 sm:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Curriculum{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Vitae
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Lihat atau unduh CV saya untuk mengetahui profil, pendidikan, dan
            pengalaman saya.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold hover:from-indigo-400 hover:to-violet-400 transition-all duration-300"
            >
              Buka CV
            </a>
            <a
              href={cvUrl}
              download="Muhammad Zaky Alkhaer Ahmad.pdf"
              className="px-6 py-3 rounded-xl border border-gray-700 text-gray-300 font-semibold hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300"
            >
              Unduh CV
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-800/70 bg-gray-900/50">
          <iframe
            src={cvUrl}
            title="CV Muhammad Zaky Alkhaer Ahmad"
            className="h-[70vh] min-h-[480px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
