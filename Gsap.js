
/*const logo = document.getElementById("logo") ;
TweenMax.to(logo, 2,{width:200 , height:200});
*/

 const conveyor = document.getElementById("conveyor");


 const arm = document.getElementById("arm");


const emoticon = document.getElementById("emoticon");



function start(eyes,mouth){
	console.log(eyes)
	let div = document.getElementById("div");
	let imgEyes = document.createElement("img")
	imgEyes.src = eyes+".png";
	imgEyes.setAttribute('id','img1');
	imgEyes.style.position = "absolute";
	div.append(imgEyes);

	let imgMouth = document.createElement("img");
	imgMouth.src = mouth+".png";
	imgMouth.setAttribute('id','img2');
	imgMouth.style.position = "absolute";
	div.append(imgMouth);

	let e = document.getElementById("img1")
	TweenMax.to(e ,{x:0 ,y:10})
	TweenMax.to(conveyor, 2 ,{marginLeft:140 , delay:2} );
	TweenMax.to(arm, 2,{marginLeft:140 , delay:2});
	TweenMax.from(emoticon, 2 ,{x:345 , y:330 , opacity:0});
	TweenMax.to(emoticon , 1, {x:345 , y:-5 , opacity:1});
	TweenMax.to(emoticon, 2,{x:485 , delay:2});
	TweenMax.to(emoticon , 1 , {x:485, y:180, delay:5});
	TweenMax.to(emoticon , 1 , {x:645, delay:7, } , );
	
	
	TweenMax.to(img1 , 2,{y:350, delay:7});
	TweenMax.to(img1 , 1 , {x:210, delay:9, ease:Bounce.easeOut});
	TweenMax.to(img1 , 2 , {x:460, delay:11});
	TweenMax.to(img1 , 1 ,{x:5000,y:200, delay:13})
	
	TweenMax.to(img2 , 2,{y:370, delay:9});
	TweenMax.to(img2 , 2 , {x:270, delay:11});
	TweenMax.to(img2 , 1 ,{x:5000,y:200, delay:13})



	TweenMax.to(emoticon , 1 , {x:850, delay:9 });
	TweenMax.to(emoticon , 2 , {x:1100, delay:11});
	TweenMax.to(emoticon , 1 ,{x:5000,y:300, delay:13})

}

