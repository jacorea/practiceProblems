//Creating an object
//street,city,zipCode,showAddress(address)

const address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

const showAddress = (address) => {
    for (let key in address) {
        console.log(key, address[key])
    }
}

showAddress(address);