import Auth from '../utils/auth'
const host = 'http://localhost:5000'

async function register (username, email, password){
    const res = await window.fetch(host + '/auth/signup', {
        method:'POST',
        mode:"cors",
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json',
            'Accept':'apliccation/json'
        },
        body:JSON.stringify({
            username,
            email,
            password
        })
    })

    return res.json()
}

async function login (email,password){
    const res = await window.fetch(host + '/auth/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'apliccation/json'
        },
        body:JSON.stringify({
            email,
            password
        })
    })

    return res.json()
}

async function createProfile(data){
    const res = await window.fetch(host + '/profile/create', {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'bearer ' + Auth.getToken()
        },
        body:JSON.stringify(data),
    })

    return res.json();
}

async function editProfile(id,data){
    const res = await window.fetch(host + `/profile/edit/${id}`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'bearer ' + Auth.getToken()
        },
        body:JSON.stringify(data)
    })

    return res.json();
}

async function deleteProfile(id){
    const res = await window.fetch(host + `/profile/delete/${id}`, {
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'bearer ' + Auth.getToken()
        },
       
    })

    return res.json();
}

async function fetchProfiles(){
    const res = await window.fetch(host + '/admin/profiles',{
        headers:{
            'Content-Type':'application/json',
            'Authorization':'bearer ' + Auth.getToken()
        }
    })
    return res.json()
}

async function addDog(data){
    const res = await window.fetch(host + '/dog/create', {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'bearer ' + Auth.getToken()
        },
        body:JSON.stringify(data)
    })

    return res.json();
}

async function editDog(id,data){
    const res = await window.fetch(host + `/dog/edit/${id}`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'bearer ' + Auth.getToken()
        },
        body:JSON.stringify(data)
    })
    return res.json();
}

async function deleteDog(id){
    const res = await window.fetch(host + `/dog/delete/${id}`, {
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'bearer ' + Auth.getToken()
        },
      
    })

    return res.json();
}

async function fetchDogs(){
    const res = await window.fetch(host + '/admin/dogs', {
        headers:{
            'Content-Type':'application/json',
            'Authorization':'bearer ' + Auth.getToken()
        }
    })

    return res.json();
}

async function createWalk(data){
    const res = await window.fetch(host + 'walk/create', {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'bearer ' + Auth.getToken()
        },
        body:JSON.stringify(data)
    })

    return res.json();
}

async function editWalk(id,data){
    const res = await window.fetch(host + `/walk/edit/${id}`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'bearer ' + Auth.getToken()
        },
        body:JSON.stringify(data)
    })

    return res.json();
}

async function deleteWalk(id){
    const res = await window.fetch(host + `/walk/delete/${id}`, {
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'bearer ' + Auth.getToken()
        },
      
    })

    return res.json();
}

async function fetchWalks(){
    const res = await window.fetch(host + '/admin/walks',{
        headers:{
            'Content-Type':'application/json',
            'Authorization':'bearer ' + Auth.getToken()
        }
    })

    return res.json();
}

export{
    register,
    login,
    createProfile,
    editProfile,
    deleteProfile,
    fetchProfiles,
    addDog,
    editDog,
    deleteDog,
    fetchDogs,
    createWalk,
    editWalk,
    deleteWalk,
    fetchWalks
}