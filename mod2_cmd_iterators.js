let a,b,c;
([a,b,...c] = [...process.argv]);
console.log('\n');
/* obtener los elmentos a eliminar */
let eliminar = c.reduce((acc,el,i,a) => 
	el === '-r' && a[i + 1] !== undefined ? acc.concat(a[i + 1]):acc
,[]);

/* se elimina de la lista de argumentos el -r */
let unicos = c.sort().reduce((ac,el,i,a) => 
 el !== '-r'? ac.concat(el) : ac,[]);

/* eliminar los elementos a borrar indicados en el parametro -r */ 
let filtrado = [];
unicos.forEach( (unico) => {
	eliminar.findIndex(el => el === unico) ?  filtrado.push(unico): filtrado; 
});

console.log('Route to node.js: ' + a);
console.log('Route to this file: ' + b);
 
console.log('\n');

 function mostrarContador(a,acc) {
	console.log(a + ' : ' + acc.length);
	return acc;
 }
 filtrado.reduce((acc,el,i,a) => {
	let anterior = a[i - 1];
	let ultimo = a[i + 1];
	
	if (anterior === undefined) {
		acc++;
		return acc;
	}
	if (el === anterior) {
		acc++;
		return acc;
	} else if (anterior !== el){
		console.log(anterior + ' : ' + acc);
		acc = 1;
		if (ultimo === undefined) {
			console.log(el + ' : ' + acc);
		}
		return acc;
	}
	if (ultimo === undefined) {
		console.log(el + ' : ' + acc);
	}
}, 0);