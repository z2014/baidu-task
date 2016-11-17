function setType(val) {
	var types = document.getElementsByName(val);
	var type;
	for (var i = 0; i < types.length; i++) {
		if (types[i].checked) {
            type = types[i].value;
		}
	}
	return type;
}

function NewForm() {
	this.type = setType("type");
	this.isRequired = setType("require");
	this.label = setType("label");
	valid(this.isRequired);
	// this.valid = function(val) {
	// 	if (val) {
	// 		this.onchange = function() {
	// 			console.log(this.value);
	// 			if (this.value == null) {
	// 				console.log(1);
	// 			}
	// 		}
	// 	}
	// };
	// this.valid(this.isRequired);
}

function show() {
	document.getElementById('option').style.display = 'block';
}

document.getElementById('optionText').onkeypress = function (event) {
	var content = document.getElementById('content');
	var ev = event || window.event;
	var text = ev.target.value;
	var arr = [];
	if (ev.keyCode == 32) {
    	var span = document.createElement('span');
        arr = text.split(" ");
        span.innerHTML = arr[arr.length-1];
        span.className = 'span';
        content.appendChild(span);
        span.onclick = function() {
        	content.removeChild(span);
        }
        console.log(arr);
        // Promise.resolve(span).then(function(span){span.onclick = function() {
        // 	content.removeChild(span);
        // }}); 
	}
}

var btn = document.getElementById('submit');
btn.onclick = function() {
	var component = document.getElementById('component');
    var form = new NewForm();
    console.log(form);	
    var input = document.createElement('input');
    var label = document.createElement('label');
    label.innerHTML = form.label;
    input.type = form.type;
    input.required = form.isRequired;
    component.appendChild(label);
    component.appendChild(input);
    // Promise.resolve(form).then(function(form){
    // 	form.onclick = function() {
    // 		console.log(this.value);
    // 	};
    // }).catch(function(err){
    // 	console.log(err);
    // });
}
function valid(val) {
	if (val) {
		this.onchange = function() {
			console.log(this);
			console.log(this.value);
		}
	}
}