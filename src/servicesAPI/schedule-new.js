import { APIConfig } from "./API-config";

export async function scheduleNew({name, date, id}){
    await fetch(`${APIConfig.baseURL}/schedules`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, date, id})
    })
}