const {deleteRow, deleteColumn} = require("../lib/delete")

test("Delete a row from csv with options", () => {
    expect(deleteRow("a,b,c\n1,2,3\n4,5,6", 2, {headers: true})).toBe("a,b,c\n1,2,3")
})

test("Delete a row from csv without options", () => {
    expect(deleteRow("a,b,c\n1,2,3\n4,5,6", 2)).toBe("a,b,c\n1,2,3")
})

test("Delete a column from csv with options", () => {
    expect(deleteColumn("a,b,c\n1,2,3\n4,5,6", 2, {headers: true})).toBe("a,c\n1,3\n4,6")
})

test("Delete a column from csv without options", () => {
    expect(deleteColumn("a,b,c\n1,2,3\n4,5,6", 2)).toBe("a,c\n1,3\n4,6")
})