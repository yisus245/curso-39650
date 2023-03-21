 export const Login = ()=>{
    let nombre ="pepino"

    const saludar1 =()=>{
        console.log("hola")
    }
    return <div style={{backgroundColor: "steelblue"}}> 
        <h1>hola desde el componente login</h1>
        <h3>mi nombre es {nombre}</h3>
        <button onClick={saludar1}>Saludar</button>
    </div>
}