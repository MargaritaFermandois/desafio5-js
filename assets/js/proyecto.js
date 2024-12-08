
    const listaDeTareas = document.getElementById("tablaTareas");
    const tareaInput = document.getElementById("agregarTarea");
    const btnAgregar = document.getElementById("btnagregarTarea");
    const totalTareas = document.getElementById("totalTareas");
    const tareasCompletadas = document.getElementById("tareasCompletadas");

    const tareas = [
        { id: 987982, tarea: "Comprar en el super", realizada: false },
        { id: 347987, tarea: "Darle de comida a los peces", realizada: true },
        { id: 645767, tarea: "Pasar la aspiradora", realizada: false },
    ];

    function renderList(tareas) {
        let html = "";
        let realizadas = 0;

        for (let tarea of tareas) {
            html += `
                <tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.tarea}</td>
                    <td>
                        <input type="checkbox" 
                            ${tarea.realizada ? "checked" : ""} 
                            onchange="toggleRealizada(${tarea.id})">
                    </td>
                    <td><button onclick="borrar(${tarea.id})">✖</button></td>
                </tr>
            `;
            if (tarea.realizada) realizadas++;
        }

        listaDeTareas.innerHTML = html;


        totalTareas.textContent = tareas.length;
        tareasCompletadas.textContent = realizadas;
    }

    btnAgregar.addEventListener("click", () => {
        const descripcionTarea = tareaInput.value; 
        if (descripcionTarea !== "") {

            tareas.push({
                id: Date.now(),
                tarea: descripcionTarea,
                realizada: false,
            });

            tareaInput.value = "";
            renderList(tareas);
        } else {
            alert("Escribe una tarea antes de agregarla.");
        }
    });

    function casillaRealizada(id) {
        const tarea = tareas.find((t) => t.id === id);
        if (tarea) {
            tarea.realizada = !tarea.realizada; 
        }
        renderList(tareas);
    }

    function borrar(id) {
        const index = tareas.findIndex((tarea) => tarea.id === id);
        if (index !== -1) {
            tareas.splice(index, 1); 
            renderList(tareas);
        }
    }

    renderList(tareas);












































//ejemplo para modificar elementos de arreglo con find

// let tareas = [
//     { id: 1, descripcion: "Llamar a papá", realizada: false },
//     { id: 2, descripcion: "Comprar los regalos", realizada: false },
//     { id: 3, descripcion: "Preparar la diapositiva", realizada: true },
//     { id: 4, descripcion: "Hacer el informe", realizada: false }
//     ];
    
// let tareaEncontrada = tareas.find( tarea => tarea.id === 2)
// tareaEncontrada.realizada = true

// tareaEncontrada = tareas.find(tarea => tarea.id === 4)
// tareaEncontrada.descripcion = "Llevar TV al técnico"
// console.log(tareas);
