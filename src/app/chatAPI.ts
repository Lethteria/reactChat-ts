import {IUser} from "../types/usersTypes";

async function CreateUser(user: IUser){

    const response =  await fetch("https://reqres.in/api/users", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "name": user.name,
            "job": user.gender
        })
    })

    if (response.ok) return response.json();
    else throw Error("login error");
}

async function getUsers(){

    const response =  await fetch("https://reqres.in/api/users?page=1")

    if (response.ok) return response.json();
    else throw Error("loading users error");
}

export {CreateUser, getUsers}