//we'll use a window.onload for simplicity, but typically it is best to use either jQuery's $(document).ready() or $(window).load() or cross-browser event listeners so that you're not limited to one.
window.onload = function(){

  // Declare the controls
  var playBtn = document.getElementById("playBtn"),
      restartBtn = document.getElementById("restartBtn"),
      choiceSet = document.getElementById("choiceSet"),
      choiceBtn = document.getElementById("choiceBtn");
      
  // Declare tweens
  var fadeToOne = TweenLite.to(choiceSet, .5, {opacity:"1", paused:true}),
      fadeToZero = TweenLite.to(choiceSet, .5, {opacity:"0", paused:true}),
      flingToRight = TweenLite.to(choiceSet, .5, {left:"1500", paused:true}),
      moveDownToBottom = TweenLite.to(choiceSet, .5, {top:"0", paused:true}),
      moveUpFromBottom = TweenLite.from(choiceSet, .5, {top:"0", paused:true});
  
  // Start Animation
  playBtn.onclick = function(){
      //call the tween's play() method
      fadeToOne.restart();
      moveUpFromBottom.restart();
  }

  // Restart Animation
  restartBtn.onclick = function() {
      //Start playing from a progress of 0.
      fadeToZero.restart();
  }

  // Item Button
  // choiceBtn.onclick = function() {
  //     flingRight.play();
  //     fadeToZero.resume();
  //     moveDownToBottom.resume();
  // }
}