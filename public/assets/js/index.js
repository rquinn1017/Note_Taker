$( document ).ready(function() {
  let notes;
  
  function getNotes(){
    $.ajax({
          url: "/api/notes",
          method: "GET"
        }).then(function(response) {
          notes = response;
          console.log(notes);
          $("#note-column").empty();
          for (x of notes){
            $(`<h4>${x.title}<h4><button class="btn btn-sm btn-outline-dark delete-button" data-id="${x.id}" data-body="${x.body}"><i class="text-danger fas fa-dumpster"></i></button><p class ="hwText" >${x.body}</p>`).appendTo("#note-column");
          };
          deleteListener();
        });
  };
  
  getNotes();
  
  $("#save-note").on("click", function() {
    event.preventDefault();
    
    const noteData = {
        title: $("#title-input").val().trim(),
        body: $("#text-input").val().trim()
        
      };
      console.log(noteData);
      $.ajax({
        url: "/api/notes",
        method: "POST",
        data: noteData
      }).then(function(){
        getNotes();
      });
  });
  
  
  function deleteListener(){
    // alert("starting");
    $(".delete-button").click(function() {
      // event.preventDefault();
      let deleteData = {
        id: $(this).attr("data-id").trim(),
        body: $(this).attr("data-body").trim(),
      };
      console.log(deleteData);
      $.ajax({
        url: "/api/notes/" + deleteData.id,
        method: "DELETE",
      }).then(function(){
        getNotes();
        
      });
  
  
    });
  };
  
  // setTimeout(function(){deleteListener(); console.log("ready");}, 1000);
  // $(this).attr("data-name")
  
  