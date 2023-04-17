export const TalentsFallback = () => {
  return (
    <section className="grid animate-pulse grid-cols-listing gap-4 py-4">
      {Array.from({ length: 10 }, (_, idx) => (
        <div
          key={idx}
          className="flex items-start gap-4 rounded-md bg-white p-4 shadow-lg"
        >
          <div className="h-20 w-20 rounded-full bg-slate-200 grayscale filter" />
          <div className="flex flex-col">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-6 w-24 rounded-full bg-slate-200" />
                <span className="h-6 w-24 rounded-full" />
              </div>
              <h1 className="mt-2 flex items-center gap-2 text-xl font-bold">
                <span className="h-6 w-full bg-slate-300" />
                <span className="h-4 w-4 rounded-full bg-cyan-600" />
              </h1>
              <span className="h-6 w-24 bg-slate-200" />
              <div>
                <h3 className="flex items-center gap-2 text-sm">
                  <span className="h-6 w-1/2 bg-slate-300 font-bold" />
                </h3>
                <h3 className="flex items-center gap-2 text-sm">
                  <span className="h-6 w-1/2 bg-slate-300 font-bold" />
                </h3>
              </div>
            </div>
            <span className="h-6 w-1/3 bg-slate-300" />
          </div>
        </div>
      ))}
    </section>
  )
}
