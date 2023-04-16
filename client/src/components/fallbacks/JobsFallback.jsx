export default function JobsFallback() {
  return (
    <section className="grid animate-pulse grid-cols-listing gap-4 py-4">
      {Array.from({ length: 10 }, (_, idx) => (
        <div key={idx} className="rounded-md bg-white p-4 shadow-lg">
          <div className="aspect-video w-full bg-slate-300" />
          <div className="mt-2 flex items-center gap-2 text-xs font-medium">
            <span className="h-6 w-80 rounded-full bg-slate-200 px-3 py-2"></span>
            <span className="h-6 w-60 rounded-full bg-teal-200 px-3 py-2"></span>
          </div>
          <span className="mt-2 h-12 w-full text-xl font-bold" />
        </div>
      ))}
    </section>
  )
}
