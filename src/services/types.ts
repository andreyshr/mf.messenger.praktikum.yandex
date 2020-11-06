export type EmptyRequest = {

}

export type SigninRequest = {
    login: string,
    password: string,
}

export type SignupRequest = {
    first_name: string,
    second_name: string,
    email: string,
    password: string,
    login: string,
    phone: string
}

export type ProfileRequest = {
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    newPassword: string,
    oldPassword: string,
    email: string,
    phone: string
}

export type CreateChatRequest = {
    title: string
}

export type ChatUsersRequest = {
    users: number[],
    chatId: number
}

export type SearchRequest = {
    login: string
}

export type UserResponse = {
    avatar: string | null
    display_name: string | null,
    email: string
    first_name: string
    id: number
    login: string
    phone: string
    second_name: string
}

export type ProfileResponse = {
    avatar: string | null
    display_name: string | null,
    email: string
    first_name: string
    id: number
    login: string
    phone: string
    second_name: string
}

export type ChatResponse = {
    avatar: string | null
    id: number
    title: string
}


