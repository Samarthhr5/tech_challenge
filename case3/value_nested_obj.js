let obj = {
    a: {
        b: {
            nested: true
        },
    },
    x: {
        y: 'z',
    }
};


function getObjectKeys(object, key) {
    // if you want another split key you can change this.
    const keys = key.split('.');
    let obj = object;
    for (let ikey of keys) {
        for (let [objKey, value] of Object.entries(obj)) {
            if(!keys.includes(objKey)) {
                continue;
            }
            obj = value;
        }
    }
    return obj;
}

console.log(getObjectKeys(obj, 'a.b.nested'));

console.log(getObjectKeys(obj, 'x.y'));
// even if there is another additional key
console.log(getObjectKeys(obj, 'x.y.nested'));
