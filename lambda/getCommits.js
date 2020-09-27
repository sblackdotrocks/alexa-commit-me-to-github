const { Octokit } = require("@octokit/core");

module.exports = function getCommits(username, date = Date.now()) {

  return new Promise((resolve, reject) => {
    const now = new Date(date)
    const octokit = new Octokit()
    let resp = octokit.request('GET /users/{username}/events', {
        username: username
      })

    resp.then((data) => {
      console.log(data)
      const pushEvents = data.data.filter(x => x.type == 'PushEvent')
                              .filter(x => {
                                const jsDate = new Date(Date.parse(x.created_at))

                                return jsDate.getFullYear() == now.getFullYear()
                                  && jsDate.getMonth() == now.getMonth()
                                  && jsDate.getDate() == now.getDate()
                              })

      resolve(pushEvents)
    })

    resp.catch((err) => {
      reject(err)
    })

  })
}
