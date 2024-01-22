let tableName = ''; // Declare a global variable to store the table name
let columnNames = []; // Declare a global variable to store column names

function parseAndDisplay() {
    // Get table and column names from input fields
    tableName = document.getElementById('tableName').value;
    columnNames = [
        document.getElementById('columnName1').value,
        document.getElementById('columnName2').value
    ];

    const dataInput = document.getElementById('dataInput');
    const dataRows = dataInput.value.split('\n').map(row => row.split('\t').map(cell => cell.trim()));

    const dataTable = document.getElementById('dataTable');
    dataTable.innerHTML = '';

    // Create table header
    const headerRow = document.createElement('tr');
    for (let i = 0; i < columnNames.length; i++) {
        const th = document.createElement('th');
        th.textContent = columnNames[i];
        headerRow.appendChild(th);
    }
    dataTable.appendChild(headerRow);

    // Create table rows
    for (let i = 0; i < dataRows.length; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < dataRows[i].length; j++) {
            const td = document.createElement('td');
            td.contentEditable = true;
            td.textContent = dataRows[i][j];
            tr.appendChild(td);
        }
        dataTable.appendChild(tr);
    }
}

function convertToSQL() {
    const table = document.getElementById('dataTable');
    const rows = table.rows;
    const columns = rows[0].cells.length;
    let sqlCommands = [];

    for (let i = 1; i < rows.length; i++) {
        let rowValues = [];
        for (let j = 0; j < columns; j++) {
            rowValues.push(rows[i].cells[j].textContent);
        }
        const sqlCommand = `INSERT INTO \`${tableName}\` (\`${columnNames[0]}\`, \`${columnNames[1]}\`) VALUES (${rowValues.map(value => `'${value}'`).join(', ')});`;
        sqlCommands.push(sqlCommand);
    }

    const sqlResultTextarea = document.getElementById('sqlResult');
    sqlResultTextarea.value = sqlCommands.join('\n');
}
