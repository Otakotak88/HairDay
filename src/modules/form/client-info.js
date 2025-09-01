export function clientInfo(name, date){

    const id = new Date().getTime()

    return {
        name,
        date,
        id
    }
}