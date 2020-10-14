
var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
 for (i = 0; i<= exercises.length-1;i++){
   selExercises.addItem(exercises[i])
   }
for (i = 0;i<=coreExercises.length-1;i++){
  selExercises.addItem(coreExercises[i])
  }
}

selExercises.onfocusout=function(){

}



btnSubmit.onclick=function(){
  
}
