firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      // Check if the email is the specific email
      if(user.email === "digisocccerdesign@gmail.com"){
        document.getElementById("add-paragraph-form").style.display = "block";
      }
          // Add event listener to the "Add Paragraph" button
    document.getElementById("add-paragraph-btn").addEventListener("click", function() {
        // Get the input value
        var input = document.getElementById("paragraph-input").value;
      
        // Create a new paragraph element
        var p = document.createElement("p");
      
        // Create a text node with the input value
        var text = document.createTextNode(input);
      
        // Append the text node to the paragraph element
        p.appendChild(text);
      
        // Append the paragraph element to the container
        document.getElementById("paragraph-container").appendChild(p);
        });
    }})