window.addEventListener(('load'), () => {
    if (document.querySelector('.photoshoot-set-card') !== null) {
      window.sessionStorage.setItem('Heading', 'displayed');
    }
  })

if (window.sessionStorage.getItem('Heading')) {
    document.querySelector('.photoshoot-set-card').classList.remove('load')
}

function unhideLightbox(lightboxID) {
    // This removes the .hidden class from the #lightbox-overlay div
    document.getElementById('lightbox-overlay').classList.remove('hidden');
    // TODO: Remove the .hidden class from the div with the given id
    document.getElementById(lightboxID).classList.remove('hidden')
 }
 
 
 //
 // Part 2: Make the unhideLightbox function run when a picture is clicked on.
 // 
 document.getElementsByClassName("photoshoot-set-card").onclick = unhideLightbox;
 /**
 * Calls unhideLightbox with the id of the first lightbox
 */
 function unhideLightbox1() {
    unhideLightbox("picture1")
 }
 
 // TODO: Set the browser to run the function unhideLightbox1 when someone clicks #picture-1
 document.getElementById("pic1").onclick = unhideLightbox1;
 
 // TODO: do the same for #picture-2, write a function and then make it run on click
 function unhideLightbox2() {
    unhideLightbox("picture2")
 }
 document.getElementById("pic2").onclick = unhideLightbox2;
 
 
 
 // TODO: do the same for #picture-3, write a function and then make it run on click
 
 function unhideLightbox3() {
    unhideLightbox("picture3")
 }
 document.getElementById("pic3").onclick = unhideLightbox3;

 function unhideLightbox4() {
    unhideLightbox("picture4")
 }
 document.getElementById("pic4").onclick = unhideLightbox4;

 function unhideLightbox5() {
    unhideLightbox("picture5")
 }
 document.getElementById("pic5").onclick = unhideLightbox5;

 function unhideLightbox6() {
    unhideLightbox("picture6")
 }
 document.getElementById("pic6").onclick = unhideLightbox6;

 function unhideLightbox7() {
    unhideLightbox("picture7")
 }
 document.getElementById("pic7").onclick = unhideLightbox7;

 function unhideLightbox8() {
    unhideLightbox("picture8")
 }
 document.getElementById("pic8").onclick = unhideLightbox8;

 function unhideLightbox9() {
    unhideLightbox("picture9")
 }
 document.getElementById("pic9").onclick = unhideLightbox9;
 
 
 
 
 // 
 // Part 3: Now we need to be able to close the lightbox when we click outside the picture!
 // 
 function closeLightbox(lightboxID) {
    // This adds the .hidden class to the #lightbox-overlay div
    document.getElementById('lightbox-overlay').classList.add('hidden');
 
    // TODO: Add the .hidden class to the div with the given id
    document.getElementById(lightboxID).classList.add('hidden');
 }
 
 
 // This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
 function closeAllLightboxes() {
    // get every .lightbox div, getElementsByClassName gives us an array 
    var lightboxElements = document.getElementsByClassName('lightbox');
 
    // sneak preview of Javascript loops, which will go through every element in an array of elements
    for (var i = 0; i < lightboxElements.length; i++) {
        // get id of this particular .lightbox div
        var id = lightboxElements[i].id;
        // call closeLightbox for this id
        closeLightbox(id);
    }
 }
 
 // TODO: set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.
 document.getElementById('lightbox-overlay').onclick = closeAllLightboxes;

 $("..photoshoot-set-card").on("mouseover", function() {
    $(this).addClass("load"); }
)
