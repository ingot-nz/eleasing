// upload image file
var companyName = "Ingot";
let uploadButton = document.getElementById("upload-button");
let clientLogoImage = document.getElementById("client-logo");
let fileName = document.getElementById("file-name");

let defaultLogoData =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA2IAAADhCAYAAACqYwZ5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFxEAABcRAcom8z8AAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMTowMToxMSAxNjoyNDoxMpVgd5EAAFSdSURBVHhe7d0L/BZT/gfwE9tSuuguFQmRouiCpCvpYnVzv+TSrigSiYhQm1yWELKR/VM2UutWIbY2JamkEinVVlshFVKU2p3/fOZ3Hs3vdJ7LzDNzZp7n+bxfr1Mzz+95ZuaZZ86Z851z5kwJyyaIiIiIiIjImAPk/0RERERERGQIAzEiIiIiIiLDGIgREREREREZxkCMiIiIiIjIMAZiREREREREhjEQIyIiIiIiMoyBGBERERERkWEMxIiIiIiIiAxjIEZERERERGQYAzEiIiIiIiLDGIgREREREREZxkCMiIiIiIjIMAZiREREREREhjEQIyIiIiIiMoyBGBERERERkWEMxIiIiIiIiAxjIEZERERERGQYAzEiIiIiIiLDGIgREREREREZxkCMiIiIiIjIMAZiREREREREhjEQIyIiIiIiMoyBGBERERERkWEMxIiIiIiIiAxjIEZERERERGQYAzEiIiIiIiLDGIgREREREREZxkCMiIiIiIjIMAZiREREREREhpWwbHKaKGc89thjcio6rVq1EieffLKcIyKiqEV1bujfv7+cIiLKHAMxykmHH364+Prrr+VcNJ566inRp08fOUdERFErUaKEnDIH56ONGzfKOSKizLFrIhERERERkWEMxIiIiIiIiAxjIEZERERERGQYAzEiIiIiIiLDGIgREREREREZxkCMiIiIiIjIMAZiREREREREhjEQIyIiIiIiMoyBGBERERERkWEMxIiIiIiIiAxjIEZERERERGQYAzEiIiIiIiLDGIgREREREREZxkCMiIiIiIjIMAZiREREREREhjEQIyIiIiIiMoyBGBERERERkWEMxIiIiIiIiAxjIEZERERERGQYAzEiIiLKC5ZlGU8bN26Uayci8oaBGBERERERkWEMxIiIiIiIiAxjIEZERERERGQYAzEiIiIiIiLDGIgREREREREZxkCMiIiIiIjIsBIWxl6leMNPtHWrEFu27PvfPV2mzL5Utuz+87VrC3HwwXJh+eHw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7LDD5CuUDO8RIyIiIiJSoAtgq1at5BxlatiwYQzCMsRAjIiIiIhI4+KLL5ZTlInmzZs7zy2jzLBrIhERERFREh06dBDvvvuunKNUZsyYIdq0aSPnKB22iBERERERJTFixAg5Ran07t2bQZhHDMSIiIiIiJI4+eSTxZAhQ+Qc6eBeupEjR8o5yhS7JhIRERERpdGwYUOxdOlSOUcJuC/s7bffFuXKlZOvUKbYIkZERERElMaUKVPEiSeeKOcImjZtKt58800GYT4xECMiIiIiSgPPFJs6dSqDMalRo0birbfeEpUqVZKvkFcMxIiIiIiIMpAIxk466ST5SmGqX7++E4RVq1ZNvkJ+MBAjIiIiIsoQgjF0Uzz99NPlK4UFA5csW7bMeeA1ZYeBGBERERGRBwjG5s6dKwYPHixfyX89evQQy5cvF/fdd598hbLFUROJiIiIiHyaM2eOeOKJJ8Srr74qX8kv9erVE8OGDXMCMQoWAzEiIiIioiwtWrRIPPnkk2LChAli165d8tXc1a5dO9G1a1dxww03yFcoaAzEiIiIiIgCgiAMwdjLL78spk+fLl/NDR06dBBdunRxArDDDjtMvkphYSBGRERERBSCHTt2iBkzZvyWPvvsM/mXeKhTp4444YQTnMALAVjlypXlX8gEBmJERERERAbs2bPHGXEQCUHZunXrxMaNG8WmTZuc/3/99Vf5zuCUKFFCHH/88c69Xkju6dKlS8t3URQYiBERERERxcB3330ntm7d6qRt27b9Nr17924niEOghoTpvXv3inLlyomyZcs6yT3tnq9evbo48MAD5RooThiIERERERERGcbniBERERERERnGQIyIiIiIiMgwBmJERERERESGMRAjIiIiIiIyjIEYERERERGRYQzEiIiIiIiIDGMgRkREREREZBgDMSIiIiIiIsMYiBERERERERnGQIyIiIiIiMgwBmJERERERESGMRAjIiIiIiIyjIEYERERERGRYQzEXDp06CBKlCgRePJr2rRpYvDgwdrtatq0qbj44ovFX//6V7FmzRr5CW8eeuihYsvEfDbU7ZwzZ478y/68rNv9Pi+pYsWKzjb16dNHvPzyy2Lr1q1yiclhm3XLQsrk8+lgm9TlJvvu6j4KKiX7XdT14RjLRrrjIazvl0ipjr9U1GMA3yNI7mUHlbLZRvWYRLkSNJRl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";

clientLogoImage.setAttribute("src", defaultLogoData);

uploadButton.onchange = () => {
  let reader = new FileReader();
  reader.readAsDataURL(uploadButton.files[0]);
  reader.onload = () => {
    clientLogoImage.setAttribute("src", reader.result);
  };
};

// Export PDF Generation STARTS

// jspdf added in index.html and we are setting it to a variable here for use in export.
var jsPDF = window.jspdf.jsPDF;

// download as PDF
function exportPDF() {
  let pdf = new jsPDF("p", "pt", "a4");

  let pWidth = pdf.internal.pageSize.width; // 595.28 is the width of a4
  let srcWidth = document.getElementById("print_area").scrollWidth;
  let margin = 18; // narrow margin - 1.27 cm (36);
  let scale = (pWidth - margin * 2) / srcWidth;

  pdf.html(document.getElementById("print_area"), {
    x: margin,
    y: margin,
    html2canvas: {
      scale: scale,
    },
    callback: function () {
      pdf.save("Quote.pdf");
    },
  });
}
// Export PDF Generation ENDS

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("DownloadQuote");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";

  var comm_24_months = $("#firstband24").text();
  console.log(comm_24_months);
  $("#comm_24_months_value").append(comm_24_months);

  var comm_36_months = $("#firstband36").text();
  $("#comm_36_months_value").append(comm_36_months);

  var comm_45_months = $("#firstband45").text();
  $("#comm_45_months_value").append(comm_45_months);

  var comm_48_months = $("#firstband48").text();
  $("#comm_48_months_value").append(comm_48_months);

  var comm_60_months = $("#firstband60").text();
  $("#comm_60_months_value").append(comm_60_months);

  // Get the Government Calculated Data from the form and append to the PDF section

  var govt_24_months = $("#govt24").text();
  $("#govt_24_months_value").append(govt_24_months);

  var govt_36_months = $("#govt36").text();
  $("#govt_36_months_value").append(govt_36_months);

  var govt_45_months = $("#govt45").text();
  $("#govt_45_months_value").append(govt_45_months);

  var govt_48_months = $("#govt48").text();
  $("#govt_48_months_value").append(govt_48_months);

  var govt_60_months = $("#govt60").text();
  $("#govt_60_months_value").append(govt_60_months);

  // Get Customer Contact Details

  $("#business_name").on("input", function () {
    // Print entered value in a div box
    $("#customer_name").text($(this).val());
  });

  $("#customer_contact_name").on("input", function () {
    // Print entered value in a div box
    $("#new_customer_contact_name").text($(this).val());
  });
  
$("#customer_phone").on("input", function () {
    // Print entered value in a div box
    $("#customer_contact_phone").text($(this).val());
  });

  $("#email").on("input", function () {
    // Print entered value in a div box
    $("#customer_email").text($(this).val());
  });

  $("#supplier_name").on("input", function () {
    // Print entered value in a div box
    $("#customer_supplier_name").text($(this).val());
  });
   $("#supplier_contact_person").on("input", function () {
    // Print entered value in a div box
    $("#customer_supplier_contact_person").text($(this).val());
  });
  
  $("#supplier_phone").on("input", function () {
    // Print entered value in a div box
    $("#customer_supplier_phone").text($(this).val());
  });

  $("#supplier_email").on("input", function () {
    // Print entered value in a div box
    $("#customer_supplier_email").text($(this).val());
  });

  $("#equipment_description").change(function () {
    $("#customer_equipment_description").text($(this).val());
  });
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  
   // clearn commercial calc value
    $("#comm_24_months_value").text('');
    $("#comm_36_months_value").text('');
    $("#comm_45_months_value").text('');
    $("#comm_48_months_value").text('');
    $("#comm_60_months_value").text('');
    
    // clearn government calc vale
    $("#govt_24_months_value").text('');
    $("#govt_36_months_value").text('');
    $("#govt_45_months_value").text('');
    $("#govt_48_months_value").text('');
    $("#govt_60_months_value").text('');

};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";

    // clearn commercial calc value
    $("#comm_24_months_value").text('');
    $("#comm_36_months_value").text('');
    $("#comm_45_months_value").text('');
    $("#comm_48_months_value").text('');
    $("#comm_60_months_value").text('');
    
    // clearn government calc vale
    $("#govt_24_months_value").text('');
    $("#govt_36_months_value").text('');
    $("#govt_45_months_value").text('');
    $("#govt_48_months_value").text('');
    $("#govt_60_months_value").text('');
    
  }
};



// Commercial or Government Section. Hide or Display

// Get Customer Contact Details

$(document).ready(function () {

  $("#DownloadQuote").attr('disabled', true);
  $("#DownloadQuote").css('background', '#d8d4d3');
 

// disable download quote button if input is blank
  $("#firstband").on('input', function () {
    $("#DownloadQuote").attr('disabled', false);
  $("#DownloadQuote").css('background', '#c03831');
  });

  

  // Commercial or Government Section. Hide or Display
  $("#commercial-btn").click(function () {
    $("#Commercial-Section").css("display", "block");
    $("#Government-Section").css("display", "none");

    $("#info").clone().prependTo("#add-info");
  });
  $("#government-btn").click(function () {
    $("#Commercial-Section").css("display", "none");
    $("#Government-Section").css("display", "block");
  });

  // Clone Logo
  // $("#uploadButton").click(function () {
  //   $("#chosen-image").clone().prependTo("#client-logo");
  // });

  // Get the Commercial Calculated Data from the form and append to the PDF section area for export

  // Get Today's Date

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  console.log(today);
  $("#today_date").text(today);
});

// Script for sliding section
var slideIndex = 1;
showSlides(slideIndex);

 var next = document.getElementById('next');
  var prev = document.getElementById('prev');
  prev.classList.add("hidePrev");

function plusSlides(n) {
  showSlides((slideIndex += n));
  console.log(slideIndex);

  if (slideIndex == 1) {
    prev.classList.add("hidePrev");
    //next.classList.add("showNext");
   
  }
  if (slideIndex == 2) {
    prev.classList.remove("hidePrev");
  }
  if (slideIndex == 3) {
    next.classList.add("showNext");
    
  }
  if (slideIndex == 4) {
    next.classList.remove("showNext");
    next.classList.add("hideNext");
    
  }
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
