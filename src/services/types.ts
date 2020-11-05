export type EmptyRequest = {

}

export type SigninData = {
    login: string,
    password: string,
}

export type SignupData = {
    first_name: string,
    second_name: string,
    email: string,
    password: string,
    login: string,
    phone: string
}

export type ProfileData = {
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


