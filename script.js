class Usuarios {
    constructor(nombre, email, contraseña) {
        this.nombre = nombre
        this.email = email
        this.contraeña = contraseña
    }
}

let usuarios = []

usuarios = (localStorage.getItem('usuarios')) ? tareas = JSON.parse(localStorage.getItem('usuarios')): localStorage.setItem('usuarios', JSON.stringify(usuarios))


const formUsers = document.getElementById("formUsers")
const divT = document.getElementById("divT")
const botonUsers = document.getElementById("botonUsers")
const contraseña = document.getElementById("idContraseña")

formUsers.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)
    let datForm = new FormData(e.target)



    let usuario = new Usuarios(datForm.get('nombre'), datForm.get('email'), datForm.get("contraseña"))
    usuarios.push(usuario)
    console.log(usuarios)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    formUsers.reset()
})

botonUsers.addEventListener('click', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('usuarios'))
    divT.innerHTML = ""
    arrayStorage.forEach((usuario, indice) => {
        
        divT.innerHTML += `
        <div class="card border-dark mb-3" id="tarea${indice}" style="max-width: 20rem; margin:4px;">
            <div class="card-header"><h2>${usuario.nombre}</h2></div>
            <div class="card-body">
                <p class="card-title">${usuario.email}</p>
                
            </div>
        </div>
        
        `
    });



})