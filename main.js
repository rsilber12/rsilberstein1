$(document).ready(function() {
      
      
  $('input').inputAutogrow({
    minWidth: 50,
    trailingSpace: -100
  });
      
        $(".preview").on('keyup', function() {
          $("#capture").html('<strong class="stroke-two">You nominate&#32; </strong>' + $(".preview-name").val() + "&#32;" + '<strong class="stroke-two">because&#32;</strong>' + $(".preview-reason").val());
        });
      });
  
  
  $("#show").click(function() {
    
      html2canvas(document.querySelector("#capture")).then(canvas => {
        document.querySelector("#artboard").appendChild(canvas);
        var ctx = canvas.getContext("2d");
      });
    });
  
  $("#save").click(function() {
    
      html2canvas(document.querySelector("#capture")).then(canvas => {
        saveAs(canvas.toDataURL('image/png'), 'file-name.png');
      });
    });
  
  function saveAs(uri, filename) {
  
      var link = document.createElement('a');
  
      if (typeof link.download === 'string') {
  
          link.href = uri;
          link.download = filename;
  
          //Firefox requires the link to be in the body
          document.body.appendChild(link);
  
          //simulate click
          link.click();
  
          //remove the link when done
          document.body.removeChild(link);
  
      } else {
  
          window.open(uri);
  
      }
  }
  