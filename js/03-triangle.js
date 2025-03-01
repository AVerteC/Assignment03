for (let i = 0; i < 7; i++) {
    output = "#";
    if (i > 0) {
        for (let j = 0; j < i; j++) {
            output += "#";
        }
    }
    console.log(output);
}