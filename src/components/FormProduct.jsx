// f(x) manejarCambios | inputs
const manejarCambios = (e) => {
    const{name,value} = e.target;
}

// valida longitud max description
const validarLongitud = (value) => {
    if(name === 'descripcion' && value.length > 200) return true;
    
    setProduct(prev => ({...prev, [name]: value}))
}