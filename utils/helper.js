class OptionsHelper {
    constructor(options) {
        this.options = options
    }

    checkIsFlagExists (flag) {
        if (!(flag in this.options)) {
            this.options[flag] = false
        }
    }

    checkIsDelimitersExists () {
        if ("delimiter" in this.options) {
            if (this.options["delimiter"] === ',' || this.options["delimiter"] === ';') {
                return
            }
        }

        if ("columnDelimiter" in this.options) {
            if (this.options["columnDelimiter"] === ',' || this.options["columnDelimiter"] === ';') {
                return
            }
        }

        if ("rowDelimiter" in this.options) {
            if (this.options["rowDelimiter"] === ',' || this.options["rowDelimiter"] === ';') {
                return
            }
        }

        this.options["delimiter"] = ","
        this.options["columnDelimiter"] = ","
        this.options["rowDelimiter"] = ","
    }

    getResult () {
        return this.options;
    }
}

module.exports = OptionsHelper