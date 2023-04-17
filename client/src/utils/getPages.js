function getPages() {
  const pages = {}

  // Importa dinámicamente todos los archivos JS/TS de la carpeta "pages" y sus subcarpetas
  // @ts-ignore
  const pageFiles = import.meta.globEager('./pages/*/*.@(js|jsx|ts|tsx)')

  // Crea una propiedad para cada página en el objeto "pages"
  Object.entries(pageFiles).forEach(([path, page]) => {
    const matchResult = path.match(/\.\/pages\/(.*)\/.*\.tsx?$/)
    const pageName = matchResult ? matchResult[1] : ''
    pages[pageName] = page.default
  })

  return pages
}
export default getPages
