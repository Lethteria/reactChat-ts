export interface IUser {
    id: number | null,
    name: string,
    gender: string,
    imgPath: string
}

export interface IAuthUserSuccess {
    id: number,
    name: string,
    job: string
}

export interface ILoadUserSuccess {
    id: number,
    email: string,
    first_name: string,
    last_name: string
    avatar: string
}