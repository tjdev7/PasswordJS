// Function to generate randomizes word content
function HrdPwGen() {
    // Password content
    let pwElem =
        '!@#$%^&--*&+1234567890-ABCDEF--GHIJ~KLMNOPQRSTUVWXYZ*abcdefg--&hijkl--mnopqrs--tuwxyz'
    let newPw = ''

    for (var i = 0; i < 20; i++)
        newPw += pwElem.charAt(Math.floor(Math.random() * pwElem.length))

    // Button selector for password generator
    document.getElementById('passwordSection').innerHTML = newPw
}
