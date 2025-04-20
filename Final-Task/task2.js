function sendNotification(email){
    if(!email.includes('@')){
        return 'invalid email'
    }

    const parts =email.split('@')
    const user_name = parts[0]
    const domain_name = parts[1]
    return `${user_name} sent you an email from ${domain_name}`
}

const email_Address = [
    sendNotification('zihad@gmail.com'),
    sendNotification('farhan34@yahoo.com'),
    sendNotification('nadim.naem5@gmail.com'),
    sendNotification('fahim234.hotmail.com'),
    sendNotification('sadia8icloud.com'),
]
console.log(email_Address.join('\n'))
