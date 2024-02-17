document.getElementById('calc').addEventListener('click',calculate);
const countInput = document.getElementById('count');

countInput.addEventListener('input', function(event) {
       calculate();
});
var s
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
    calculate();
}

function removeRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function calculate()
{
    var sum = 0;
         var table = document.getElementById('result').getElementsByTagName('tbody')[0];
         if(table)
         {
            var rows = table.getElementsByTagName('tr');
            for(var i = 0;i < rows.length;i++)
            {
                var row = rows[i];
                var qinput = row.querySelector('input[type = "number"]');
                var priceCell = row.cells[2];
                var quan = parseInt(qinput.value);
                var price = parseFloat(priceCell.innerHTML);
                sum += quan*price;

            }

         }
         var s = document.getElementById('output');
         s.innerHTML = `The total cost is ${sum}`;
}