const assert = require('assert')
const getCommits = require('./getCommits')

async function testGetCommitsTruthy() {
    let result = await getCommits("sblack4")
    assert(result)
}

// async function testGetCommitsGets() {
//     let testDay = new Date(2020, 4, 1)
//     let result = await getCommits("sblack4", date=testDay)
//     console.log(result)
//     assert(result.length == 5)
// }

testGetCommitsTruthy()
testGetCommitsGets()
