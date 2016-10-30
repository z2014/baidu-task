// function changeUrl() {
// 	var list0 = document.getElementById('list0');
// 	var a = document.getElementsByTagName('a');
// 	var iframe = document.getElementsByTagName('iframe')[0];
// 	for (var i = 0; i < a.length; i++) {
// 		a[i].onclick = function() {
// 			var source = this.href;
//             iframe.src = source;
// 			return false;
// 		};
// 	}
// }
// changeUrl();

var module = {};

module.clickFn = function(classname,fn) {
    var classname = document.getElementsByTagName(classname);
    console.log(classname.length);
    for (var i = 0; i < classname.length; i++) {
    	classname[i].onclick = fn;
    }
}
function changeUrl() {
	var iframe = document.getElementsByTagName('iframe')[0];
	var source = this.href;
    iframe.src = source;
    return false;
}
module.clickFn('a',changeUrl);



function listChose() {
	var list0 = document.getElementById('list0');
	var item1 = list0.getElementsByClassName('item1');
	var list1 = list0.getElementsByClassName('list1');
	for (var i = 0; i < item1.length; i++) {
		item1[i].onclick = function() {
			var j = i;
			var spelist = list1[j];
			return function() {
				if (spelist.style.display == 'none') {
					spelist.style.display = 'block';
					spelist.style.backgroundColor = 'rgb(57,62,78)';
					item1[j].parentNode.style.backgroundColor = 'rgb(57,62,78)';
				}
				else{
					spelist.style.display = 'none';
					item1[j].parentNode.style.backgroundColor = 'rgb(42,46,61)';
				}
				var item2 = spelist.getElementsByClassName('item2');
				var list2 = spelist.getElementsByClassName('list2');
				for (var n = 0; n < item2.length; n++) {
					item2[n].onclick = function() {
						var choselist = list2[n];
						return function() {
							// console.log('n', n);
							 if (choselist.style.display == 'none') {
                            	choselist.style.display = 'block';
                            }
                            else{
                            	choselist.style.display = 'none';
                            }
						}
					}(n);
				}
			}
		}(i);
	}
}
listChose();
	// var list0 = document.getElementById('list0');
	// var item0 = list0.getElementsByClassName('item0');
	// for (var i = 0; i < item0.length; i++) {
	// 	item0[i].onclick = function() {
 //            var list1 = item0[i].getElementsByClassName('list1')[0];
 //            var item1 = list1.getElementsByClassName('item1');
 //            return function() {
 //                if (list1.style.display == 'block') {
 //                	list1.style.display = 'none';
 //                }
 //                else{
 //                	list1.style.display = 'block';
 //                }
 //                for (var n = 0; n < item1.length; n++) {
	//             	item1[n].onclick = function() {
	//                     var list2 = item1[n].getElementsByClassName('list2')[0];
	//                     console.log(n);
	//                     return function() {
	//                     	if (list2.style.display == 'none') {
	//                     		list2.style.display == 'block';
	//                     	}
	//                     	else{
	//                     		list2.style.display == 'none';
	//                     	}
	//                     }
	//             	}(n);
	//             }
 //            }
	// 	}(i);
	// }

