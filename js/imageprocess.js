
var alpha = document.getElementById("alphaRange").value;
function updateAlpha() {
	alpha = document.getElementById("alphaRange").value;
	document.getElementById("alphaValue").value = document.getElementById("alphaRange").value;
}

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

document.getElementById('download').addEventListener('click', function() {
    downloadCanvas(this, 'myCanvas', 'image.png');
}, false);

var path = $('input[name="object"]:checked').val();
$('input[name="object"]:radio').change(function() {       
    path = this.value;
    document.getElementById("thumbnail1").src = 'img/' + path + '/layer1.png';
	document.getElementById("thumbnail2").src = 'img/' + path + '/layer2.png';
	document.getElementById("thumbnail3").src = 'img/' + path + '/layer3.png';
	document.getElementById("thumbnail4").src = 'img/' + path + '/layer4.png';
	document.getElementById("thumbnail5").src = 'img/' + path + '/layer5.png';
	document.getElementById("thumbnail6").src = 'img/' + path + '/layer6.png';
	document.getElementById("thumbnail7").src = 'img/' + path + '/layer7.png';
	document.getElementById("thumbnail8").src = 'img/' + path + '/layer8.png';
	contextBlankCanvas.clearRect(0, 0, 440, 440);
	contextHidden1.clearRect(0,0,440,440);
	contextHidden2.clearRect(0,0,440,440);
	contextHidden3.clearRect(0,0,440,440);
	contextHidden4.clearRect(0,0,440,440);
	contextHidden5.clearRect(0,0,440,440);
	contextHidden6.clearRect(0,0,440,440);
	contextHidden7.clearRect(0,0,440,440);
	contextHidden8.clearRect(0,0,440,440);
	imageObjBlank.src = 'img/' + path + '/blank.png';
	imageObjHidden1.src = 'img/' + path + '/layer1.png';
	imageObjHidden2.src = 'img/' + path + '/layer2.png';
	imageObjHidden3.src = 'img/' + path + '/layer3.png';
	imageObjHidden4.src = 'img/' + path + '/layer4.png';
	imageObjHidden5.src = 'img/' + path + '/layer5.png';
	imageObjHidden6.src = 'img/' + path + '/layer6.png';
	imageObjHidden7.src = 'img/' + path + '/layer7.png';
	imageObjHidden8.src = 'img/' + path + '/layer8.png';
})

oraginColorChecked = true;
function changeColorCheckBox() {
    oraginColorChecked = document.getElementById('oraginColor').checked;
};

function updateColor() {
	colorHEX = document.getElementById("color").value;
	colorRGB = hex2rgb(colorHEX);
	colorHSV = rgb2hsv(colorRGB.r,colorRGB.g,colorRGB.b)
	console.log(colorHSV[0]);
	// document.getElementById("alphaValue").value = document.getElementById("alphaRange").value;
}



document.getElementById("thumbnail1").src = 'img/' + path + '/layer1.png';
document.getElementById("thumbnail2").src = 'img/' + path + '/layer2.png';
document.getElementById("thumbnail3").src = 'img/' + path + '/layer3.png';
document.getElementById("thumbnail4").src = 'img/' + path + '/layer4.png';
document.getElementById("thumbnail5").src = 'img/' + path + '/layer5.png';
document.getElementById("thumbnail6").src = 'img/' + path + '/layer6.png';
document.getElementById("thumbnail7").src = 'img/' + path + '/layer7.png';
document.getElementById("thumbnail8").src = 'img/' + path + '/layer8.png';

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var blankCanvas = document.getElementById('whiteCanvas');
var contextBlankCanvas = blankCanvas.getContext('2d');
var imageObjBlank = new Image();
imageObjBlank.onload = function() {
	contextBlankCanvas.drawImage(imageObjBlank, 0, 0);
};
imageObjBlank.src = 'img/' + path + '/blank.png';

var canvasHidden1 = document.getElementById('myCanvasHidden1');
var contextHidden1 = canvasHidden1.getContext('2d');
var imageObjHidden1 = new Image();
imageObjHidden1.onload = function() {
	contextHidden1.drawImage(imageObjHidden1, 0, 0);
};
imageObjHidden1.src = 'img/' + path + '/layer1.png';

var canvasHidden2 = document.getElementById('myCanvasHidden2');
var contextHidden2 = canvasHidden2.getContext('2d');
var imageObjHidden2 = new Image();
imageObjHidden2.onload = function() {
	contextHidden2.drawImage(imageObjHidden2, 0, 0);
};
imageObjHidden2.src = 'img/' + path + '/layer2.png';

var canvasHidden3 = document.getElementById('myCanvasHidden3');
var contextHidden3 = canvasHidden3.getContext('2d');
var imageObjHidden3 = new Image();
imageObjHidden3.onload = function() {
	contextHidden3.drawImage(imageObjHidden3, 0, 0);
};
imageObjHidden3.src = 'img/' + path + '/layer3.png';

var canvasHidden4 = document.getElementById('myCanvasHidden4');
var contextHidden4 = canvasHidden4.getContext('2d');
var imageObjHidden4 = new Image();
imageObjHidden4.onload = function() {
	contextHidden4.drawImage(imageObjHidden4, 0, 0);
};
imageObjHidden4.src = 'img/' + path + '/layer4.png';

var canvasHidden5 = document.getElementById('myCanvasHidden5');
var contextHidden5 = canvasHidden5.getContext('2d');
var imageObjHidden5 = new Image();
imageObjHidden5.onload = function() {
	contextHidden5.drawImage(imageObjHidden5, 0, 0);
};
imageObjHidden5.src = 'img/' + path + '/layer5.png';

var canvasHidden6 = document.getElementById('myCanvasHidden6');
var contextHidden6 = canvasHidden6.getContext('2d');
var imageObjHidden6 = new Image();
imageObjHidden6.onload = function() {
	contextHidden6.drawImage(imageObjHidden6, 0, 0);
};
imageObjHidden6.src = 'img/' + path + '/layer6.png';

var canvasHidden7 = document.getElementById('myCanvasHidden7');
var contextHidden7 = canvasHidden7.getContext('2d');
var imageObjHidden7 = new Image();
imageObjHidden7.onload = function() {
	contextHidden7.drawImage(imageObjHidden7, 0, 0);
};
imageObjHidden7.src = 'img/' + path + '/layer7.png';

var canvasHidden8 = document.getElementById('myCanvasHidden8');
var contextHidden8 = canvasHidden8.getContext('2d');
var imageObjHidden8 = new Image();
imageObjHidden8.onload = function() {
	contextHidden8.drawImage(imageObjHidden8, 0, 0);
};
imageObjHidden8.src = 'img/' + path + '/layer8.png';


function showCanvasData(argument) {

	var baseImage = contextBlankCanvas.getImageData(0,0,440,440);
	var layer = new Array(8);
	if($('input[name="layer1"]:checked').val() === "show")
		layer[0] = contextHidden1.getImageData(0,0,440,440);
	else
		layer[0] = contextBlankCanvas.getImageData(0,0,440,440)

	if($('input[name="layer2"]:checked').val() === "show")
		layer[1] = contextHidden2.getImageData(0,0,440,440);
	else
		layer[1] = contextBlankCanvas.getImageData(0,0,440,440)

    if($('input[name="layer3"]:checked').val() === "show")
		layer[2] = contextHidden3.getImageData(0,0,440,440);
	else
		layer[2] = contextBlankCanvas.getImageData(0,0,440,440)

    if($('input[name="layer4"]:checked').val() === "show")
		layer[3] = contextHidden4.getImageData(0,0,440,440);
	else
		layer[3] = contextBlankCanvas.getImageData(0,0,440,440)

    if($('input[name="layer5"]:checked').val() === "show")
		layer[4] = contextHidden5.getImageData(0,0,440,440);
	else
		layer[4] = contextBlankCanvas.getImageData(0,0,440,440)

    if($('input[name="layer6"]:checked').val() === "show")
		layer[5] = contextHidden6.getImageData(0,0,440,440);
	else
		layer[5] = contextBlankCanvas.getImageData(0,0,440,440)

    if($('input[name="layer7"]:checked').val() === "show")
		layer[6] = contextHidden7.getImageData(0,0,440,440);
	else
		layer[6] = contextBlankCanvas.getImageData(0,0,440,440)

    if($('input[name="layer8"]:checked').val() === "show")
		layer[7] = contextHidden8.getImageData(0,0,440,440);
	else
		layer[7] = contextBlankCanvas.getImageData(0,0,440,440)
	console.log(oraginColorChecked);
    for(var i = 0; i < 8; i++){
    	// isMiao = 1
	    for(var j = 0; j < baseImage.data.length - 1; j++){
	    	if (layer[i].data[j]!=255||layer[i].data[j+1]!=255||layer[i].data[j+2]!=255){
				if(oraginColorChecked) {
					baseImage.data[j] = (1-alpha)*baseImage.data[j]+alpha*layer[i].data[j];
					baseImage.data[j+1] = (1-alpha)*baseImage.data[j+1]+alpha*layer[i].data[j+1];
					baseImage.data[j+2] = (1-alpha)*baseImage.data[j+2]+alpha*layer[i].data[j+2];
				} else {

					colorHEX = document.getElementById("color").value;
					colorRGB = hex2rgb(colorHEX);
					colorHSV = rgb2hsv(colorRGB.r,colorRGB.g,colorRGB.b);
   					hsv = rgb2hsv(layer[i].data[j],layer[i].data[j+1],layer[i].data[j+2])
   					hsv[0] = colorHSV[0]
					rgb = hsv2rgb(hsv[0], hsv[1],hsv[2]);

					baseImage.data[j] = (1-alpha)*baseImage.data[j]+alpha*rgb[0];
					baseImage.data[j+1] = (1-alpha)*baseImage.data[j+1]+alpha*rgb[1];
					baseImage.data[j+2] = (1-alpha)*baseImage.data[j+2]+alpha*rgb[2];
				}

			 //    }
				//if (i == 1){
				// 	baseImage.data[j] = (1-alpha)*baseImage.data[j]+alpha*layer[i].data[j];
				//baseImage.data[j+1] = (1-alpha)*baseImage.data[j+1]+alpha*layer[i].data[j+1];
				//baseImage.data[j+2] = (1-alpha)*baseImage.data[j+2]+alpha*layer[i].data[j+2];
				//}

			    // baseImage.data[j] = (1-alpha)*baseImage.data[j]+alpha*rgb[0];
	    		// baseImage.data[j+1] = (1-alpha)*baseImage.data[j+1]+alpha*rgb[1];
	    		// baseImage.data[j+2] = (1-alpha)*baseImage.data[j+2]+alpha*rgb[2];

	    		// baseImage.data[j] = (1-alpha)*baseImage.data[j]+alpha*layer[i].data[j];
	    		// baseImage.data[j+1] = (1-alpha)*baseImage.data[j+1]+alpha*layer[i].data[j+1];
	    		// baseImage.data[j+2] = (1-alpha)*baseImage.data[j+2]+alpha*layer[i].data[j+2];
	    	}
	    	j=j+2;
	    	// baseImage.data[i] = layer.data[i];
	    }
	}
    context.putImageData(baseImage, 0, 0)
}


console.log($('input[name="layer1"]:checked').val())
      
function rgb2hsv (r,g,b) {
 var computedH = 0;
 var computedS = 0;
 var computedV = 0;

 //remove spaces from input RGB values, convert to int
 var r = parseInt( (''+r).replace(/\s/g,''),10 ); 
 var g = parseInt( (''+g).replace(/\s/g,''),10 ); 
 var b = parseInt( (''+b).replace(/\s/g,''),10 ); 

 if ( r==null || g==null || b==null ||
     isNaN(r) || isNaN(g)|| isNaN(b) ) {
   alert ('Please enter numeric RGB values!');
   return;
 }
 if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) {
   alert ('RGB values must be in the range 0 to 255.');
   return;
 }
 r=r/255; g=g/255; b=b/255;
 var minRGB = Math.min(r,Math.min(g,b));
 var maxRGB = Math.max(r,Math.max(g,b));

 // Black-gray-white
 if (minRGB==maxRGB) {
  computedV = minRGB;
  return [0,0,computedV];
 }

 // Colors other than black-gray-white:
 var d = (r==minRGB) ? g-b : ((b==minRGB) ? r-g : b-r);
 var h = (r==minRGB) ? 3 : ((b==minRGB) ? 1 : 5);
 computedH = 60*(h - d/(maxRGB - minRGB));
 computedS = (maxRGB - minRGB)/maxRGB;
 computedV = maxRGB;
 return [computedH,computedS,computedV];
}

function hsv2rgb(h, s, v) {
    var r, g, b;
	var i;
	var f, p, q, t;
 
	// Make sure our arguments stay in-range
	h = Math.max(0, Math.min(360, h));
	s = Math.max(0, Math.min(1, s));
	v = Math.max(0, Math.min(1, v));
 
	// We accept saturation and value arguments from 0 to 100 because that's
	// how Photoshop represents those values. Internally, however, the
	// saturation and value are calculated from a range of 0 to 1. We make
	// That conversion here.
 
	if(s == 0) {
		// Achromatic (grey)
		r = g = b = v;
		return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
	}
 
	h /= 60; // sector 0 to 5
	i = Math.floor(h);
	f = h - i; // factorial part of h
	p = v * (1 - s);
	q = v * (1 - s * f);
	t = v * (1 - s * (1 - f));
 
	switch(i) {
		case 0:
			r = v;
			g = t;
			b = p;
			break;
 
		case 1:
			r = q;
			g = v;
			b = p;
			break;
 
		case 2:
			r = p;
			g = v;
			b = t;
			break;
 
		case 3:
			r = p;
			g = q;
			b = v;
			break;
 
		case 4:
			r = t;
			g = p;
			b = v;
			break;
 
		default: // case 5:
			r = v;
			g = p;
			b = q;
	}
 
	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function hex2rgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
