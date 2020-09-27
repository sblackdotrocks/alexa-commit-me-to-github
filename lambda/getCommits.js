const { Octokit } = require("@octokit/core");

module.exports = async function getCommits(username, date = Date.now()) {
    const octokit = new Octokit()

    // let username = "sblack4"
    let resp = await octokit.request('GET /users/{username}/events', {
        username: username
      })

    const now = new Date(date)

    const pushEvents = resp.data.filter(x => x.type == 'PushEvent')
                                .filter(x => {
                                  const jsDate = new Date(Date.parse(x.created_at))
                                  
                                  return jsDate.getFullYear() == now.getFullYear()
                                    && jsDate.getMonth() == now.getMonth()
                                    && jsDate.getDate() == now.getDate()
                                })

    return pushEvents;
}
