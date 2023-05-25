let white_keys = document.querySelectorAll(".key");
let black_keys = document.querySelectorAll(".black")
let show_keys = document.querySelector('input[type="checkbox"]');
let players = document.querySelectorAll("audio");
let volume = document.querySelector('input[type="range"]')
let letters = ["a",  "s", "d", "f", "g", "h", "j", "k", "l", ";", "w", "e", "t", "y", "u", "o", "p"]

volume.addEventListener("input", function (ev) {
   for(let i = 0; i < players.length; i++)
       players[i].volume = volume.value / 100
})


for(let i = 0; i < white_keys.length; i++) {
    white_keys[i].addEventListener("mouseover", function (ev) {
        ev.target.style.transform = "scaleY(1.02)"
    })
    white_keys[i].addEventListener("mouseout", function (ev) {
        ev.target.style.transform = "scaleY(1)"
    })
}
for(let i = 0; i < black_keys.length; i++) {
    black_keys[i].addEventListener("mouseover", function (ev) {
        ev.target.style.transform = "scaleY(1.02)"
    })
    black_keys[i].addEventListener("mouseout", function (ev) {
        ev.target.style.transform = "scaleY(1)"
    })
}

for(let i = 0; i < white_keys.length; i++) {
    white_keys[i].addEventListener("mousedown", async function (ev) {
        ev.target.style.transform = "scaleY(1.03)"
        players[i].currentTime = 0
        await players[i].play()
    })
    white_keys[i].addEventListener("mouseup", function (ev) {
        ev.target.style.transform = "scaleY(1.02)"
    })
}
for(let i = 0; i < black_keys.length; i++) {
    black_keys[i].addEventListener("mousedown", async function (ev) {
        ev.target.style.transform = "scaleY(1.03)"
        players[i + 10].currentTime = 0
        await players[i + 10].play()
    })
    black_keys[i].addEventListener("mouseup", function (ev) {
        ev.target.style.transform = "scaleY(1.02)"
    })
}

show_keys.addEventListener("click", function (ev) {
    if(show_keys.checked) {
        for(let i = 0; i < white_keys.length; i++) {
            white_keys[i].children[0].style.display = "flex"
        }
        for(let i = 0; i < black_keys.length; i++) {
            black_keys[i].children[0].style.display = "flex"
        }
    }else  {
        for(let i = 0; i < white_keys.length; i++) {
            white_keys[i].children[0].style.display = "none"
        }
        for(let i = 0; i < black_keys.length; i++) {
            black_keys[i].children[0].style.display = "none"
        }
    }
})
document.body.addEventListener("keydown", async function (ev) {
    await pres_key(ev)
})
document.body.addEventListener("keyup", function (ev) {
    for(let i = 0; i < white_keys.length; i++)
        white_keys[i].style.transform = "scaleY(1.00)"
    for(let i = 0; i < black_keys.length; i++)
        black_keys[i].style.transform = "scaleY(1.00)"
})


async function pres_key(ev) {
    for (const letter of letters) {
        const i = letters.indexOf(letter);
        if(ev.key === letter) {
            players[i].currentTime = 0
            await players[i].play()
            if(i < white_keys.length)
                white_keys[i].style.transform = "scaleY(1.03)"
            else
                black_keys[i - 10].style.transform = "scaleY(1.03)"

        }
    }
}
