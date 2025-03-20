import cards from "./cards.js";
const tabla=(()=>{
    const cuerpoTabla=document.getElementById('taskTable').getElementsByTagName('tbody')[0];

    const addTask=(task)=>{
        const  nuevaFila = cuerpoTabla.insertRow();
        nuevaFila.insertCell(0).textContent=task.task;
        nuevaFila.insertCell(1).textContent=task.description;
        nuevaFila.insertCell(2).textContent=task.date;
        nuevaFila.insertCell(3).textContent=task.priority;

        const accionCell=nuevaFila.insertCell(4);
        const accions = document.createElement('div')
        accions.className='actions'

        const completeButton= document.createElement('button');
        completeButton.textContent='Completar';
        completeButton.className='view';
        completeButton.addEventListener('click',()=>{
            nuevaFila.classList.toggle('completed');

            cards.update();

        })
        accions.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.className='delete';
        deleteButton.addEventListener('click',()=>{
            cuerpoTabla.deleteRow(nuevaFila.rowIndex);

            cards.update();
            
        });
        accions.appendChild(deleteButton);
        accionCell.appendChild(accions);
    };
    const getTask=()=>{
        return Array.from(cuerpoTabla.rows).map(row=>({
            task:row.cells[0].textContent,
            description:row.cells[1].textConten,
            date:row.cells[2].textContent,
            priority:row.cells[3].textContent,
            completed:row.classList.contains('completed')
        }));
    };
    return{
        addTask,
        getTask
    }
})
export default tabla;