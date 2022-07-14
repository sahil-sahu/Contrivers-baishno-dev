class Projects{
    constructor(){

        this.projects = null;
        const searchParams = new URLSearchParams(window.location.search)
        this.id = searchParams.get('id')

    }

    renderdata(doc){

        let html = `<option value="" data-icon="${doc.data().cover}">${doc.data().name}</option>`;
        $('select').append(html);
        
    }
    
    async callDocs(){
        
        
        await db.collection("projects").orderBy("name","asc").get().then((snapshot) => {
            
            this.projects = snapshot.docs;

            snapshot.docs.forEach((doc) =>{
                this.renderdata(doc);
            })
        })  ;

        $(document).ready(function(){
            $('select').formSelect();
          });


    }

    async userInfo(){

        let userData = await db.collection("users").doc(this.id).get()
        $("#userName").text(userData.data().name);
        $("#userPhone").text(userData.data().phone);

    }

    async updateUser(name){

        db.collection("users").doc(this.id).update({name: name});

    }

    async addProject(percent, comment){

        await db.collection("users").doc(this.id).collection("projects").add({
            id: this.addID,
            name: this.addName,
            percent: percent,
            comment : comment,
        });

    }

    async showProjects(){

        let data = await db.collection("users").doc(this.id).collection("projects").get();
        await data.docs.forEach(load => {

            let html = `<li>
                            <div class="collapsible-header">${load.data().name}</div>
                            <div class="collapsible-body">
                            <ul id="${load.id}">
                                <li>Percentage : <span id="user_percent" contenteditable="true">${load.data().percent}</span></li>
                                <li>comment : <span id="user_comment" contenteditable="true">${load.data().comment}</span></li>
                            </ul>
                            <button onclick="deleteUserProject('${load.id}')">
                                <span class="material-symbols-outlined">delete</span>
                            </button>
                            <button onclick="updateUserProject('${load.id}')">
                                <span class="material-symbols-outlined">update</span>
                            </button>
                            </div>
                        </li>`
            
            $('.collapsible').append(html);
        });

        $(document).ready(function(){
            $('.collapsible').collapsible();
          });


    }

}

// $(document).ready(function(){
//     $('.modal').modal();
//   });

var projects = new Projects();
projects.callDocs();
projects.userInfo();
projects.showProjects();

document.getElementById('updateUser').onclick = async function(){

    await projects.updateUser($("#userName").text());
    alert("Successfully Updated Name!");

}



async function addProject(){
    const elemt = $('select :selected').text();
    if(elemt){

        const data = await db.collection("projects").where("name","==",elemt).get();
        projects.addID = data.docs[0].id;
        projects.addName = data.docs[0].data().name;
        // document.getElementById("projectSave").getAttribute('data-id') = projects.addID;
        // console.log(projects.addID);

    };

}  
     

async function saveProject(){

    let percent = document.getElementById("userPercent").value;
    let comment = document.getElementById("userComment").value;

    if(percent){

        await projects.addProject(percent, comment);
        alert("Added sucessFully");
        location.reload();

    }
    
}

async function deleteUserProject(id){

    // console.log(id);
    db.collection("users").doc(projects.id).collection("projects").doc(id).delete().then(() => {
        alert("Project Successfully deleted!");
        location.reload();
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });

}

async function updateUserProject(id){

    let percent = $("#user_percent").text();
    let comment = $("#user_comment").text();
    await db.collection("users").doc(projects.id).collection("projects").doc(id).update({

        percent : percent,
        comment : comment,

    });
    alert("updated successfully!");

}
