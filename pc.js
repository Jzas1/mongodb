// const add = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (a < 0 || b < 0) {
//                 return reject('numbers must be positive')
//             }
//             resolve(a + b)
//         }, 2000)
//     })
// }

const Task = require("./src/models/task")

// const doWork = async () => {
//     const sum = await add(1, 99)
//     const sum2 = await add(sum, -50)
//     const sum3 = await add(sum2, 500)
//     return sum3
// }


// doWork().then((result) => {
//     console.log('result', result)
// }).catch((e) => {
//     console.log('error:', e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('6008e5419037a6965c1fea1b', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})