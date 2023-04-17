export const SimplePagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className="mb-6 flex items-center justify-center gap-4 py-4">
      <button
        className="cursor-pointer rounded-lg bg-slate-800 px-6 py-3 text-white disabled:cursor-not-allowed disabled:bg-slate-400"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(v => v - 1)}
      >
        Prev
      </button>
      <p>
        {currentPage} of {totalPages}
      </p>
      <p>{totalPages} total item(s)</p>
      <button
        className="cursor-pointer rounded-lg bg-slate-800 px-6 py-3 text-white disabled:cursor-not-allowed disabled:bg-slate-400"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(v => v + 1)}
      >
        Next
      </button>
    </div>
  )
}
