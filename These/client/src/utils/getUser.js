export const getUser = async () => {
    let userId = JSON.stringify(localStorage.getItem("user_id"));

    let user; 
    if (userId) {
        let response = await fetch("/api/users/current-user");
        return await response.json();
    }

    return "not member"
}