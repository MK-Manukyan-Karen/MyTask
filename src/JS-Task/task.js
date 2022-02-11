const targetArr = [1, 2, 3, [true], [[[[[4, 5]]]]], [['perfect']]]

const flat = (array) => {
    let result = []
    let recursion = (array) => {
        array.forEach((el) => {
            Array.isArray(el) ? recursion(el) : result.push(el)
        })
    }
    recursion(array)
    return result
}

// const flat = (arr) => {
//     return arr.flat(Infinity)
// }

//flat(targetArr) -> [1, 2, 3, true, 4, 5, 'perfect']

//---------------------------------------------------

const str = 'aabbsba'

function countChars() {

    let objectMap = arguments[0].split('').reduce((acc, el) => {
        acc.set(el, (acc.get(el) || 0) + 1)
        return acc
    }, new Map())

    let resultStr = ''
    objectMap.forEach((value, key) => {
        resultStr += `${key}-${value},`
    })
    return resultStr
}

//countChars(str) -> 'a-3,b-3,s-1,'