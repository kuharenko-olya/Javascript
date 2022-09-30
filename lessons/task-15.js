function haveBreakfast() {
    return new Promise((resolve) => {
        resolve('I have breakfast')
    })
}

function doYoga() {
    return new Promise((resolve) => {
        resolve('I am doing yoga')
    })
}

function playWithCat() {
    return new Promise((resolve) => {
        resolve('I play with cat')
    })
}

haveBreakfast().then(
    (result) => {
        console.log(result)
        doYoga().then(
            (result2) => {
                console.log(result2)
                playWithCat().then(
                    (result3) => {
                        console.log(result3)
                    }
                )
            }
        )
    }
)

