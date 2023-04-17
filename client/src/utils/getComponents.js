function getComponents() {
  const components = {}

  // Importa dinámicamente todos los archivos JS/TS de la carpeta "components" y sus subcarpetas
  // @ts-ignore
  const componentFiles = import.meta.globEager('./*/*.@(js|jsx|ts|tsx)')

  // Crea una propiedad para cada componente en el objeto "components"
  Object.entries(componentFiles).forEach(([path, component]) => {
    const matchResult = path.match(/\.\/(.*)\/.*\.@(js|jsx|ts|tsx)?$/)
    const componentName = matchResult ? matchResult[1] : ''
    components[componentName] = component.default
  })

  return components
}

export default getComponents
