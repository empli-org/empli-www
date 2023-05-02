import { Container } from '@/components'

export default function CompanyOffers() {
  return (
    <div>
      <Container>
        <header className="flex items-center gap-4 py-8">
          <input
            type="search"
            placeholder="Código de empleo"
            className="px-3 py-4"
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="public"
              id="public"
              className="accent-blue-whale"
            />
            <label htmlFor="public">Públicas</label>
          </div>
        </header>
        <div>
          <h1 className="mt-8 text-xl font-medium text-slate-500">
            No tienes publicada ninguna offerta aún
          </h1>
        </div>
      </Container>
    </div>
  )
}
