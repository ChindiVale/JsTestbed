function makeCoffee(sugar, milk)
{
    console.log("make coffee with " + sugar + " sugars and " + milk + "% milk.");
}

function test2()
{
    console.log('test2');
}

var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "yes",
        pistons: [{ maker: "BMW" }, { maker: "GMC" }]
    },
    drive: function () { return "drive!"; }
};
