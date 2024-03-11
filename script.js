// var ENDPOINT = 'https://asia-south1-myfirstproject-391813.cloudfunctions.net/function-1';
var ENDPOINT = 'https://askai.aiclub.world/e1c9ef9d-7b61-40f9-a4b0-efb66e3727dd';

// var ENDPOINT = 'https://us-central1-stressreliefbuddy.cloudfunctions.net/stressreliefbuddy';

// var ENDPOINT = 'https://asia-south1-myfirstproject-391813.cloudfunctions.net/function-1';
var sliderTempMean = document.getElementById("sliderTempMean")
var sliderTempStd = document.getElementById("sliderTempStd")
var valueTempMean = document.getElementById("valueTempMean")
var valueTempStd = document.getElementById("valueTempStd")

var sliderEdaMean = document.getElementById("sliderEdaMean")
var sliderEdaStd = document.getElementById("sliderEdaStd")
var valueEdaMean = document.getElementById("valueEdaMean")
var valueEdaStd = document.getElementById("valueEdaStd")

var sliderHrMean = document.getElementById("sliderHrMean")
var sliderHrStd = document.getElementById("sliderHrStd")
var valueHrMean = document.getElementById("valueHrMean")
var valueHrStd = document.getElementById("valueHrStd")

var sliderIbiMean = document.getElementById("sliderIbiMean")
var sliderIbiStd = document.getElementById("sliderIbiStd")
var valueIbiMean = document.getElementById("valueIbiMean")
var valueIbiStd = document.getElementById("valueIbiStd")

var sliderBvpMean = document.getElementById("sliderBvpMean")
var sliderBvpStd = document.getElementById("sliderBvpStd")
var valueBvpMean = document.getElementById("valueBvpMean")
var valueBvpStd = document.getElementById("valueBvpStd")

var valuePrediction = document.getElementById("valuePrediction")

valueTempMean.innerHTML = sliderTempMean.value
valueTempStd.innerHTML = sliderTempStd.value
valueEdaMean.innerHTML = sliderEdaMean.value
valueEdaStd.innerHTML = sliderEdaStd.value
valueHrMean.innerHTML = sliderHrMean.value
valueHrStd.innerHTML = sliderHrStd.value
valueIbiMean.innerHTML = sliderIbiMean.value
valueIbiStd.innerHTML = sliderIbiStd.value
valueBvpMean.innerHTML = sliderBvpMean.value
valueBvpStd.innerHTML = sliderBvpStd.value

sliderTempMean.oninput = function() {
  valueTempMean.innerHTML = this.value
  makePrediction()
}
sliderTempStd.oninput = function() {
  valueTempStd.innerHTML = this.value
  makePrediction()
}

sliderEdaMean.oninput = function() {
  valueEdaMean.innerHTML = this.value
  makePrediction()
}
sliderEdaStd.oninput = function() {
  valueEdaStd.innerHTML = this.value
  makePrediction()
}

sliderHrMean.oninput = function() {
  valueHrMean.innerHTML = this.value
  makePrediction()
}
sliderHrStd.oninput = function() {
  valueHrStd.innerHTML = this.value
  makePrediction()
}

sliderIbiMean.oninput = function() {
  valueIbiMean.innerHTML = this.value
  makePrediction()
}
sliderIbiStd.oninput = function() {
  valueIbiStd.innerHTML = this.value
  makePrediction()
}

sliderBvpMean.oninput = function() {
  valueBvpMean.innerHTML = this.value
  makePrediction()
}
sliderBvpStd.oninput = function() {
  valueBvpStd.innerHTML = this.value
  makePrediction()
}

function makePrediction() {

  var tm = valueTempMean.innerHTML
  var ts = valueTempStd.innerHTML
  var em = valueEdaMean.innerHTML
  var es = valueEdaStd.innerHTML
  var hm = valueHrMean.innerHTML
  var hs = valueHrStd.innerHTML
  var ibm = valueIbiMean.innerHTML
  var ibs = valueIbiStd.innerHTML
  var bm = valueBvpMean.innerHTML
  var bs = valueBvpStd.innerHTML

  var d = `{"tempmean":${tm}, "tempstd":${ts}, "edamean":${em}, "edastd":${es}, "hrmean":${hm}, "hrstd":${hs}, "ibimean":${ibm}, "ibistd":${ibs}, "bvpmean":${bm}, "bvpstd":${bs}}`;
  predict(d)
}

function predict(data) {
  console.log("\n\n\nPrediction input: ", data)

  return fetch(ENDPOINT, {
    method: 'POST',
    body: data,
  })
    .then(res => res.json())
    .then(response => JSON.parse(response.body))
    .then(function(data) {
      var predictedValue = data["predicted_label"]
      if (predictedValue == 0)
        valuePrediction.innerHTML = "Low"
      if (predictedValue == 1)
        valuePrediction.innerHTML = "Medium"
      if (predictedValue == 2)
        valuePrediction.innerHTML = "High"
      console.log("Prediction output:", predictedValue)
    })
    .catch(err => console.log('err', err));
};


