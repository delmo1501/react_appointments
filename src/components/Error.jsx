
// si usamos el prop {children} se puede usar pero es general, toma todos los componentes, los almacena a todos los uqe pasas, cambia la sintaxis porque en el otro archivo
// No pasas por prop si no que haces <Error>'Aca dentro va el prop que pasaria por children'<Error/>, tambien podes pasar HTML eso es lo bueno
const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white rounded-md text-center p-3 uppercase font-bold mb-3">
      {children}
    </div>
  )
}

export default Error