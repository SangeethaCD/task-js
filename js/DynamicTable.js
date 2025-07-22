function generateTable()
{
    const table = document.createElement('table');
    const tablebd = document.createElement('tbody');

    for(let i=0;i<2;i++)
    {
        let row = document.createElement('tr');
        for(let j=0;j<2;j++)
        {
            let cell = document.createElement('tr');
            let cellText = document.createTextNode('the cell at row $(i) and column $(j)');

            row.appendChild(cell);
            cell.appendChild(cellText);
        }

        tablebd.appendChild(tablebd);
    }

    table.appendChild(tablebd);

    document.body.appendChild(table);
    table.setAttribute('border',2);
}


document.querySelector("button[type='button']").addEventListener('click',generateTable);
