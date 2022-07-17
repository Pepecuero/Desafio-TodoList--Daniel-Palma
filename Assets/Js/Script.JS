const inputTarea = document.querySelector("#tareaInput")
const botonTarea = document.querySelector("#agregaTarea")
const tablaTareas = document.querySelector("#tareas")
const totalTareas = document.querySelector("#totalTareas")
const tareasRealizadas = document.querySelector("#tareasRealizadas")


const misTareas = [
    { id: 1, descripcion: "Construir la página", completado: true },
    { id: 2, descripcion: "Darle correcta funcionalidad", completado: true },
    { id: 3, descripcion: "Entregar el desafío", completado: true }
]
let idTarea = misTareas.length 


function renderTodasLasTareas() {
    let html = ""
    for (let tarea of misTareas) {
        if (tarea.completado == false) {
            html += `<tr>
                        <th>${tarea.id}</th>
                        <td>${tarea.descripcion}</td>
                        <td class="miniBoton"><button type="button" class="btn btn-warning btn-sm" onclick="cambiaEstado(${tarea.id})"><strong>NO</strong></button></td>
                        <td class="miniBoton"><button type="button" class="btn btn-danger btn-sm" onclick="borrar(${tarea.id})"><strong>X</strong></button></td>
                    </tr>`
                    
        } else {
            html += `<tr>
                        <th>${tarea.id}</th>
                        <td style="text-decoration: line-through">${tarea.descripcion}</td>
                        <td class="miniBoton"><button type="button" class="btn btn-success btn-sm" onclick="cambiaEstado(${tarea.id})"><strong>SI</strong></button></td>
                        <td class="miniBoton"><button type="button" class="btn btn-danger btn-sm" onclick="borrar(${tarea.id})"><strong>X</strong></button></td>
                    </tr>`       
        }
    }
    tablaTareas.innerHTML = html 
    totalTareas.innerHTML = misTareas.length
    filtroRealizadas()
}

document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        botonTarea.click()
    }
});



botonTarea.addEventListener("click", () => {
    const nuevaTarea = inputTarea.value 
    if (nuevaTarea == "") { 
        alert("Por favor agregar una tarea")
        return
    }
    idTarea++
    misTareas.push({ id: idTarea, descripcion: nuevaTarea, completado: false }) 
    inputTarea.value = "" 
    renderTodasLasTareas()
})


function borrar(id) {
    console.log(id)
    const index = misTareas.findIndex(tarea => tarea.id == id)
    misTareas.splice(index, 1)
    renderTodasLasTareas()
}


function filtroRealizadas() {
    const tareaLista = true
    const tareasFiltradas = misTareas.filter((tarea) => tarea.completado === tareaLista);
    tareasRealizadas.innerHTML = tareasFiltradas.length
}


function cambiaEstado(id) { 
    console.log(id)
    const index = misTareas.findIndex(tarea => tarea.id == id) 
    misTareas[index].completado = !misTareas[index].completado 
    renderTodasLasTareas()
}


renderTodasLasTareas()