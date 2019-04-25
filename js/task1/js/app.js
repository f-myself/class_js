var test = 1, second = 2;


var obj1 = {
    id: 0,
    name: 'test'
};
for (i=0; i<10; i++) {
    obj1.id = i;
    console.log(obj1);
}

var b = 0;

while(b < 10){
    b++;
    console.log(b);
}

for (var i in obj1) {
    console.log(i);
}

var arr1 = ['string', 34, true, 'test'];

arr1.forEach(function(val, index) {
    console.log(index, val);
})
    
function calc (a, b) {
    return a + b;
}

function multiFunction (a)
{
    return function(b)
    {
        return a + b;
    }
}

function testClass() {
    this.run = function(){
        console.log('Some text');
    }
}

testClass.prototype.abc = 'abc';

testClass.prototype.run = function() {
    console.log('Method run');
}

var app = new testClass();
app.run();