function getAssets() {
  const assets = {}

  // Importa dinámicamente todos los archivos JS/TS de la carpeta "assets" y sus subcarpetas
  // @ts-ignore
  const assetFiles = import.meta.globEager('./assets/*/*.@(js|jsx|ts|tsx)')

  // Crea una propiedad para cada asset en el objeto "assets"
  Object.entries(assetFiles).forEach(([path, asset]) => {
    const matchResult = path.match(/\.\/assets\/(.*)\/.*\.tsx?$/)
    const assetName = matchResult ? matchResult[1] : ''
    assets[assetName] = asset.default
  })

  return assets
}
export default getAssets
