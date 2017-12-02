
var stateLenght;

var states = [];

function add() {

  if(document.getElementById('stateLenght').value!="" && document.getElementById('inputAlphabet').value!="" && document.getElementById('outputAlphabet').value!="" ){
    document.getElementById('optionsPanel').style.display = "block";
    var input = document.getElementById('inputAlphabet').value;
    var output = document.getElementById('outputAlphabet').value;
    var inputAlphabet = input.split(',');
    var outputAlphabet = output.split(',');
    stateLenght = document.getElementById('stateLenght').value;
    //Option create
    var selectState = document.getElementById('selectState');
    var selectLetter = document.getElementById('selectLetter');
    var selectOutput = document.getElementById('selectOutput');
    var selectNextState = document.getElementById('selectNextState');
    //State Create
    for (var i = 0; i < stateLenght; i++) {
      states[i] = "q"+i;
      var opt = document.createElement('option');
      opt.value = states[i];
      opt.innerHTML = states[i];
      selectState.appendChild(opt);
    }

    //Letter Create
    for (var i = 0; inputAlphabet[i]!=null; i++) {

      var opt = document.createElement('option');
      opt.value = inputAlphabet[i];
      opt.innerHTML = inputAlphabet[i];
      selectLetter.appendChild(opt);
    }
    //Output Letter Create
    for (var i = 0; outputAlphabet[i]!=null; i++) {

      var opt = document.createElement('option');
      opt.value = outputAlphabet[i];
      opt.innerHTML = outputAlphabet[i];
      selectOutput.appendChild(opt);
    }
    //Next State Create
    for (var i = 0; i < stateLenght; i++) {
      states[i] = "q"+i;
      var opt = document.createElement('option');
      opt.value = states[i];
      opt.innerHTML = states[i];
      selectNextState.appendChild(opt);
    }
  document.getElementById('addButton').disabled  = true;
  }else{
  alert("WARNING! There are empty spaces!");
  }

}
//var tableArray;
function tableAdd(){
  document.getElementById('list').style.display='block';
  var selectedValue = document.getElementById('selectState').value;
  var inputValue = document.getElementById('selectLetter').value;
  var outputValue = document.getElementById('selectOutput').value;
  var nextStateValue = document.getElementById('selectNextState').value;
  var array = [selectedValue,inputValue,outputValue,nextStateValue];

  //Table Create
  var count = document.getElementById("table").rows.length;
  if(count>1){

    var result = check(selectedValue,inputValue,count);
    if(result==0)
        return alert("There mustn't be more than one state.");
  }

  var table = document.getElementById('table');
  var tr = document.createElement('tr');
  for (var i=0;i<4;i++) {

    var td = document.createElement('td');
    td.value = array[i];
    td.innerHTML = array[i];
    tr.appendChild(td);
  }
  tr.setAttribute("id", array[0]+array[1]);
  table.appendChild(tr);
}
function check(state,letter,count){

  for(i=1;i<count;i++){
      var row = document.getElementById('table').rows[i].cells;
      if(row[0].value==state && row[1].value==letter)
          return 0;
  }
  return 1;
}
var nowState,resultOutput;
function searchTable(){
  var word = document.getElementById('searchWord').value;
  var ul = document.getElementById('divList');
  var uList = document.createElement('ul');
  nowState = "q0";
  var output="";
  resultOutput="";
  for( var i = 0; i<word.length;i++){
    output = outputResult(word.charAt(i),nowState);
    var li = document.createElement('li');
    li.innerText = output;
    uList.appendChild(li);
  }

  var resultHeader = document.createElement('h3');
  resultHeader.innerText = word+" , "+resultOutput;
  ul.appendChild(resultHeader);
  ul.appendChild(uList);

}
function outputResult(char,nState){
    var row = document.getElementById('table').rows.namedItem(nState+char).cells;
    nowState = row[3].value;
    resultOutput += row[2].value;
    var rtrn ="Old state "+row[0].value+" input "+row[1].value+" ----------> output "+row[2].value+" new state "+row[3].value;
    return rtrn;
}
