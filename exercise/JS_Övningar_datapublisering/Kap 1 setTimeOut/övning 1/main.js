setTimeout(() => {
    document.write(" It has gone one secound ");
    setTimeout(() => {
        document.write(" It has gone two secounds ");
        setTimeout(() => {
            document.write(" It has gone three secounds ");
        }, 1000)
    }, 1000)
}, 1000)