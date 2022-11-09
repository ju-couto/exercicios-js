const Helper = require("./helper.js")

function code(message) {
    const user = Helper.getUsername()
    const notifications = Helper.getNotifications()
    const messageUsername = message.replaceAll("{{user_name}}", user)
    const messageNotifications = messageUsername.replaceAll("{{notifications}}", notifications)
    return messageNotifications
}

module.exports = code