const { insertColumn, insertRow } = require("../lib/insert")

test("Insert string column to csv with options", () => {
    expect(insertColumn("a,b,c\n1,2,3", "d,4", {headers: true})).toBe("a,b,c,d\n1,2,3,4")
})

test("Insert string column to csv without options", () => {
    expect(insertColumn("a,b,c\n1,2,3", "d,4")).toBe("a,b,c,d\n1,2,3,4")
})

test("Insert string row to csv with options", () => {
    expect(insertRow("a,b,c\n1,2,3", "4,5,6", {headers: true})).toBe("a,b,c\n1,2,3\n4,5,6")
})

test("Insert string row to csv without options", () => {
    expect(insertRow("a,b,c\n1,2,3", "4,5,6")).toBe("a,b,c\n1,2,3\n4,5,6")
})