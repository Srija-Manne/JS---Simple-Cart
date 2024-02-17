document.getElementById('add').addEventListener('click', addPrice);

function addPrice() 
{
    var eventId = document.getElementById('eventId').value;
    var eventName = document.getElementById('eventName').value;
    var price = document.getElementById('price').value;
    var table = document.getElementById('result').getElementsByTagName('tbody')[0];

    if (!table) {
        // table = document.createElement('tbody');
        document.getElementById('result').appendChild(table);
    }

    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = eventId;
    cell2.innerHTML = eventName;
    cell3.innerHTML = price;
    cell4.innerHTML = `<input type="number" id="count" name="count" min="0" value="0">`;
    cell5.innerHTML = "<button onclick='removeRow(this)'>Remove</button>";
    document.getElementById('result').style.display = 'table';
}

function removeRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
