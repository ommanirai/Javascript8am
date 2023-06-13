function add(a, b) { // a and b is parameter
    var sum;
    sum = a + b
    console.log(sum)
}

// add(12, 23) // 12 and 23 is argument
// add(72, 33)

function detail(name, address) {
    console.log("hi " + name + " welcome to " + address)
}
// detail('ram', null)


function welcome(name) {
    console.log("what comes in", name)
    // console.log("what comes in", typeof(name))
    console.log('welcome' + name)
}

// welcome([])

var detail = {
    email: 'ram@gmail.com',
    from: 'vedu',
    to: 'ram',
    replyTo: 'shyam',
    subject: 'welcome',
    message: 'hi',
    topic: 'something'
}

var phone = {
    name: 'redmi',
    price: 15000,
    ram: '4gb',
    rom: '64gb',
    email: 'ram@gmail.com',
    from: 'vedu',
    to: 'ram',
    replyTo: 'shyam',
    subject: 'welcome',
    message: 'hi',
    topic: 'something'
}

function mail(details) {
    // console.log('what comes in details: ', details)
    console.log("hi", details.email, 'from', details.from, 'subject', details.subject, 'message: ', details.message, 'topic: ', details.topic)
}

// mail(detail)
mail(phone)