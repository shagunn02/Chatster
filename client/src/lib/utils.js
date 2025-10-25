export function formatMessageTime(date){
    return new Date(date).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minutes: "2-digit"
    })
}