const Employee = require("../lib/Employee");

test("can make a new employee instance",()=>{
    var e = new Employee ();  
    expect(typeof(e)).toBe("object");
})

