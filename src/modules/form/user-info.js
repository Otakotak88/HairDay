export function userInfo( {name, date} ){

    const id = new Date().getTime()
    
    return {
        name,
        date,
        id
    }
}