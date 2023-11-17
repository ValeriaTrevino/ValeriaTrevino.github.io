let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #de8efb;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #de8efb;">Estudiante con pasión por la ingeniería.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
