initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          console.log(user)
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            console.log('oggy');
            var photoURL = user.photoURL;
            console.log("yo");
            firebase.firestore().collection("admin-cred").doc("html").get().then((doc) => {
                   document.querySelector("body").innerHTML = doc.data().content;
                   read();
                   re_tag();
                   addit();
                   $(".dp").attr("src",photoURL)
                }).catch((error) => {
                  console.log(error);
                   document.querySelector("body").innerHTML = ` <div class="jumbotron jumbotron-fluid container" style="margin-top: 20vh;">
                        <div class="container">
                          <h1 class="display-4">You are at Wrong place !!</h1>
                          <p class="lead">We have your login credentials we are reaching u soon.</p>
                        </div>
                      </div>`
            });
            
          } else{
            console.log("shambhu");
            document.querySelector("body").innerHTML = ` <div class="jumbotron jumbotron-fluid container" style="margin-top: 20vh;">
                <div class="container">
                  <h1 class="display-4">You are at Wrong place !!</h1>
                  <p class="lead">We have your login credentials we are reaching u soon.</p>
                </div>
              </div>`
          }
        }, function(error) {
          console.log(error);
        });
      };

      window.addEventListener('load', function() {
        initApp();
      });