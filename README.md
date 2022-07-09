# CSV TOOLBOX

CSV-Toolbox is a nodejs library which helps to work with CSV data format.

## Installation

Use the npm package manager to install csv-toolbox

```bash
    npm install csv-toolbox
```

## Usage

### Insert Column
```javascript
const {insertColumn} = require("csv-toolbox")

let csv = "a,b,c\n" +
          "1,2,3\n" +
          "4,5,6"

let column = "d,7,8"

const result = insertColumn(csv, column)

```
### Insert Row
```javascript
const {insertRow} = require("csv-toolbox")

let csv = "a,b,c\n" +
          "1,2,3"

let row = "4,5,6"

const result = insertRow(csv, row)
```

