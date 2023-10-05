import axios from 'axios'


const baseUrl = "https://full-stack-todo-app-backend-zq2o.onrender.com";

// get method
// const getAllToDo =  (setToDo) =>{
//     axios
//     .get(baseUrl)
//     .then(({data})=>{
//         console.log("data--->", data);
//         setToDo(data)
//     })
    
// }

// get method
const getAllToDo = async (setToDo) =>{
    try {
        const {data} = await axios.get(baseUrl)
        console.log("data--->", data);
        setToDo(data)     
    } catch (error) {
        console.log(error);    
    }
}

// create method
// const addToDo = (text, setText, setToDo) =>{
//     axios
//     .post(`${baseUrl}/save`, {text})
//     .then((data) =>{
//         console.log(data);
//         setText("")
//         getAllToDo(setToDo)
//     })

// }

const addToDo = async(text, setText, setToDo) =>{
    try {
        if(text === ""){
            return false
        }else{
            const {data} = await axios.post(`${baseUrl}/save`, {text})
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        }
    } catch (error) {
            console.log(error);
        }
}

// update items
// const updateToDo = async(toDoId, text, setToDo, setText, setIsUpdating) =>{
//         axios
//         .put(`${baseUrl}/update`, {_id: toDoId, text})
//         .then((data) =>{
//             setText("")
//             setIsUpdating(false)
//             getAllToDo(setToDo)
//         })
//         .catch((err) => console.log(err))      
// }


// update items
const updateToDo = async(toDoId, text, setToDo, setText) =>{
    try {
        const {data} = await axios.put(`${baseUrl}/update`, {_id: toDoId, text})
        console.log(data);
        setText("")
        //setIsUpdating(false)
        getAllToDo(setToDo) 
        } catch (error) {
            console.log(error);
            
        }
}


// delete items
// const deleteToDo = async(_id, setToDo) =>{
//     try {
//         const {data} = await axios.delete(`${baseUrl}/delete`, {_id})
//         console.log(data);
//         getAllToDo(setToDo)
//         } catch (error) {
//             console.log(error);
            
//         }
// }

// delete items
const deleteToDo = async(_id, setToDo) =>{
        axios
            .delete(`${baseUrl}/delete`,{_id})
            .then((data) =>{
                console.log(data);
                getAllToDo(setToDo)
                window.location.reload()
            })
            .catch((err) => console.log(err))      
}

export {getAllToDo,addToDo,updateToDo, deleteToDo};