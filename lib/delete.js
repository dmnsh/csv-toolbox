const OptionsHelper = require("../utils/helper")

const checkOptions = (options) => {
    const helper = new OptionsHelper(options)
    helper.checkIsFlagExists("headers")
    helper.checkIsDelimitersExists()
    return helper.getResult()
}

const deleteRow = (csv, index, options={headers:true}) => {
    options = checkOptions(options)

    if (typeof csv !== "string") {
        throw new Error("Wrong format of input csv.")
    }

    if (typeof index !== "number") {
        throw new Error("Row index have to be a number.")
    }

    let csvArray = csv.split('\n')
    if (options.headers) {
        let deleted = csvArray.splice(index, 1)
    } else {
        let deleted = csvArray.splice(index - 1, 1)
    }

    return csvArray.join('\n')
}

const deleteColumn = (csv, index, options={}) => {
    options = checkOptions(options)

    if (typeof csv !== "string") {
        throw new Error("Wrong format of input csv.")
    }

    if (typeof index !== "number" && typeof index !== "string") {
        throw new Error("Row index have to be a number.")
    }

    if (typeof index !== "string") {
        let csvArray = csv.split('\n')
        let header = csvArray[0].split(options.delimiter)
        index = header.indexOf(index)
    }

    let csvArray = csv.split('\n')
    for (let i = 0; i < csvArray.length; i++) {
        csvArray[i] = csvArray[i].split(options.delimiter)
        csvArray[i].splice(index - 1, 1)
        csvArray[i] = csvArray[i].join(options.delimiter)
    }

    return csvArray.join("\n")
}

module.exports = {
    deleteRow,
    deleteColumn
}