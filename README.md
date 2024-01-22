# Table to SQL Converter

This web application allows you to convert tabular data into SQL commands. The converter has its limitations, such as column contents with an apostrophe (') needing adjustment by adding another apostrophe ('').

## Usage

1. Open `index.html` in a web browser.

2. Enter the desired table name, column names, and data in the respective input fields and textarea.

3. Click the "Parse and Display" button to visualize the data in an editable table.

4. Edit the table cells as needed.

5. Click the "Convert to SQL" button to generate SQL commands.

6. Copy the generated SQL commands from the textarea.

## Input Fields

- **Table Name:** Enter the desired name for your SQL table.

- **Column Names:** Provide names for each column in the input fields.

- **Data Input:** Paste your tabular data in the textarea. Rows are separated by newlines, and columns are separated by tabs.

## Important Note

- Make sure to handle column contents with apostrophes manually by adding another apostrophe.

## Example

Consider the following example:

