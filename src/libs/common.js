const getRandomString = () => {
    let text = "abcdefghijklmnopqrstuvwxyz";
    let length = 16;

    let output = "";
    for (let i = 0; i < length; i++) {
        output += text.charAt(Math.floor(Math.random() * text.length));
    }
    return output;
}

export { getRandomString };