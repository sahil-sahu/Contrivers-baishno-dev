function tableToCSV() {
 
    // Variable to store the final csv data
    var csv_data = [];

    // Get each row data
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {

        // Get each column data
        var cols = rows[i].querySelectorAll('td,th');

        // Stores each csv row data
        var csvrow = [];
        for (var j = 0; j < 2; j++) {

            // Get the text data of each cell
            // of a row and push it to csvrow
            csvrow.push(cols[j].innerHTML);
        }

        // Combine each column value with comma
        csv_data.push(csvrow.join(","));
    }

    // Combine each row data with new line character
    csv_data = csv_data.join('\n');

    // Call this function to download csv file 
    downloadCSVFile(csv_data);

}

function downloadCSVFile(csv_data) {

    // Create CSV file object and feed
    // our csv_data into it
    CSVFile = new Blob([csv_data], {
        type: "text/csv"
    });

    // Create to temporary link to initiate
    // download process
    var temp_link = document.createElement('a');

    // Download csv file
    temp_link.download = "BaishnodevUsersData.csv";
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    // Automatically click the link to
    // trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
    $(".modal").modal('close');
}

function renderdata(doc){

    var name = doc.data().name;
    var phone = doc.data().phone.replace("+91", "+91 ");
    let html = `
    <tr>
        <td>${name}</td>
        <td>${phone}</td>
        <td><a href="./manageuser.html?id=${doc.id}"><span class="material-symbols-outlined">
        open_in_new
        </span></a></td>
        <td><a onclick="deletethis('${doc.id}')" href="./manageuser.html?id=${doc.id}"><span class="material-symbols-outlined">
        delete
        </span></a></td>
    </tr>
    `;
    $('#userInfo').append(html);

}

db.collection("users").get().then((snapshot) => {
    snapshot.docs.forEach((doc) =>{
        renderdata(doc);
    })
})

async function deletethis(id){

    event.preventDefault();

    await db.collection("users").doc(id).delete();
    alert("Succesfully Deleted");
    location.reload(); 

}