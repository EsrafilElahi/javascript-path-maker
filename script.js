
const paramTemplate = '<input class="q-input" placeholder="Param Key" />';
const queryTemplate = '<input class="q-input" placeholder="Query Key" /> <input class="q-input" placeholder="Query Value" />';
const baseUrl = "https://website.ir";


// Check Inputs Value
var checkAllInputs = (inputs) => {
  for (let i = 0; i < inputs.length; i++) {
    var value = inputs[i].value
    if (!value) {
      return false
    }
  }
  return true
}


// Add New Param
const addNewParam = () => {
  var paramContainer = document.getElementById('params-container')
  var allParamInputs = paramContainer.getElementsByTagName('input')

  checkValid = checkAllInputs(allParamInputs)
  if (checkValid) {
    var div = createDivElement()
    div.innerHTML = paramTemplate
    paramContainer.append(div)
    console.log('param div added')
  } else {
    console.log('param div not added')
  }
};


// Check New Query
const addNewQuery = () => {
  var queryContainer = document.getElementById('queries-container')
  var allQueryInputs = queryContainer.getElementsByTagName('input')

  checkValid = checkAllInputs(allQueryInputs)
  if (checkValid) {
    var div = createDivElement()
    div.innerHTML = queryTemplate
    queryContainer.append(div)
    console.log('query div added')
  } else {
    console.log('query div not added')
  }
};


// Generate URL
const generateURL = () => {
  var generatedParam = ''
  var generatedquery = ''

  var paramContainer = document.getElementById('params-container')
  var paramClass = paramContainer.getElementsByClassName('key-value-box')

  for (let i = 0; i < paramClass.length; i++) {
    var inputs = paramClass[i].getElementsByTagName('input');
    var value = inputs[0].value;

    generatedParam = generatedParam + `/${value}`
  }

  var queryContainer = document.getElementById('queries-container')
  var queryClass = queryContainer.getElementsByClassName('key-value-box')

  for (let i = 0; i < queryClass.length; i++) {
    var inputs = queryClass[i].getElementsByTagName('input');
    var key = inputs[0].value;
    var value = inputs[1].value;

    generatedquery = !generatedquery ? `?${key}=${value}` : `${generatedquery}&${key}=${value}`
  }

  var url = `${baseUrl}${generatedParam}${generatedquery}`
  renderUrl(url)

};


function createDivElement() {
  var div = document.createElement('div')
  div.classList.add('key-value-box')
  return div
}


const renderUrl = (url) => {
  const el = document.getElementById("result");
  el.innerHTML = `<h3>${url}</h3>`;
};


document.getElementById("generate-param").addEventListener("click", addNewParam);
document.getElementById("generate-query").addEventListener("click", addNewQuery);
document.getElementById("generate-url").addEventListener("click", generateURL);
