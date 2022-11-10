// Function to generate randomizes word content
function VhPwGen() {
    // Password content
    let pwElem =
        '!@#$%^&_*&+1234567890-ABCDEFGHIJ~KLMNOPQRSTUVWXYZ*abcdefg&hijklmnopqrstuwxyz'
    let newPw = ''

    for (var i = 0; i < 40; i++)
        newPw += pwElem.charAt(Math.floor(Math.random() * pwElem.length))

    // Button selector for password generator
    document.getElementById('passwordSection').innerHTML = newPw
}
