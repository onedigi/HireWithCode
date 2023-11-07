//验证github id格式
export const validateGithubID = (githubID: string) => {
    return /^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){0,38}$/.test(githubID)
}

//验证邮箱格式
export const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

//验证url格式
export const validateURL = (url: string) => {
    return /^(?:(?:https?|ftp):\/\/)?([^\s/$.?#].[^\s]*\.[^\s]{2,}|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(:\d+)?(\/[\w\d.-]*)*(\?\S*)?$/.test(
        url
    )
}
