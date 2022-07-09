const OptionsHelper = require("../utils/helper")

const checkOptions = (options) => {
    const helper = new OptionsHelper(options)
    helper.checkIsFlagExists("headers")
    helper.checkIsDelimitersExists()
    return helper.getResult()
}

const insertColumn = (csv, column, options = {headers: true}) => {
    options = checkOptions(options)

    if (typeof csv !== "string") {
        throw new Error("Wrong format of first argument.")
    }

    if (typeof column !== "string" && !options.insertArray) {
        throw new Error("Wrong format of second argument.")
    }

    let csvArray = csv.split("\n")
    column = column.split(options.columnDelimiter)

    if (column.length === 1) {
        throw new Error("Wrong column delimiter.")
    }

    for (var i = 0; i < csvArray.length; i++) {
        csvArray[i] = csvArray[i].split(options.delimiter)
        csvArray[i][csvArray[i].length] = column[i]
        csvArray[i] = csvArray[i].join(options.delimiter)
    }

    return csvArray.join("\n");
}

const insertRow = (csv, row, options={}) => {
    options = checkOptions(options)
    var output

    if (typeof csv !== "string") {
        throw new Error("Wrong format of first argument.")
    }

    if (typeof row !== "string") {
        throw new Error("Wrong format of second argument.")
    }

    if (options.rowDelimiter === options.delimiter) {
        let rowLength = row.split(options.rowDelimiter).length
        let csvLines = csv.split("\n")
        for (var i = 0; i < csvLines.length; i++) {
            csvLines[i] = csvLines[i].split(options.delimiter)
        }
        let csvLineLength = csvLines[0].length

        if (rowLength === csvLineLength) {
            output = csv + "\n" + row
        } else {
            throw new Error("The length of row is wrong.")
        }
    } else {
        throw new Error("Delimiters of csv file and row should be the same.")
    }

    if (row.length === 1) {
        throw new Error("Wrong row delimiter.")
    }

    return output
}

module.exports = { insertColumn, insertRow }