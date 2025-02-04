function remove (r, div) {
    let message_id = r.message_id;

    let deleteReq = new Request(preUrl, {
        method: "DELETE",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify({
            // un: "jeat_heat",
            // pw: "NWX",
            ...me,
            message_id
        })
    })

    fetch(deleteReq)
        .then(r => {
            if (r.status !== 200) {
                div.classList.add("deleteError");
            }
            return r.json()
        })
        .then(() => {
            if (!div.classList.contains("error")) {
                div.remove();
              }
        })

        div.classList.add("deleting");
}
