window.addEventListener("load", event => {
	main();
});

const main = () => {
	
	
	let component = new MyComponent();
}


let drawCircle = (p1,p2,p3) =>{
	let a,a1,b,b1,ry;
	
    let ret ={x:0.0,y:0.0,r:0.0};
	let m = {x:0.0,y:0.0};
	let m1 = {x:0.0,y:0.0};
	let c = {x:0.0,y:0.0};

	m.y = (p1.y+p2.y) / 2;
	m.x = (p1.x+p2.x) / 2;
	m1.x = (p2.x+p3.x) / 2;
	m1.y = (p2.y+p3.y) / 2;

	a= (p1.y - p2.y)/(p1.x - p2.x);
	b = m.y + (m.x/a);
	
	a1= (p2.y - p3.y)/(p2.x - p3.x);
	b1 = m1.y + (m1.x/a1);

	inva = 1/a;
	inva1 = 1/a1;

	c.x = (b1 - b) / (inva1 - inva);
	c.y =  -(c.x/a) + b;

	ry = Math.sqrt((p1.x-c.x)*(p1.x-c.x)+(p1.y-c.y)*(p1.y-c.y));

	ret.x = c.x;
	ret.y = c.y;
	ret.r = ry;

	return ret;
}




class MyComponent {
	
	constructor() {

		let div = document.createElement("div");
		let canvas =  document.createElement("canvas");

		let p1 = {x:14.0,y:37.0};
		let p2 = {x:34.0,y:7.0};
		let p3 = {x:43.0,y:30.0};

		let r1 = drawCircle(p1,p2,p3);	

		console.log(r1);


		div.style.width="100%";
		div.style.height="100vh";
		div.style.position="relative";

		canvas.style.position="absolute";
		canvas.style.top="0";
		canvas.style.bottom="0";
		canvas.style.right="0";
		canvas.style.left="0";
		canvas.style.margin="auto";
		canvas.style.background ="yellow" 



		let ctx = canvas.getContext("2d");
		ctx.beginPath();
        ctx.arc(r1.x,r1.y,r1.r, 0, 2 * Math.PI);
		ctx.stroke();
		
		div.appendChild(canvas)
		document.body.appendChild(div);
	}
	
}