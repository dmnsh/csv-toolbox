const { insertColumn, insertRow } = require("../lib/insert")

test("Insert string column to csv", () => {
    expect(insertColumn("a,b,c\n1,2,3", "d,4", {headers: true})).toBe("a,b,c,d\n1,2,3,4")
})

test("Insert string row to csv", () => {
    expect(insertRow("a,b,c\n1,2,3", "4,5,6", {headers: true})).toBe("a,b,c\n1,2,3\n4,5,6")
})