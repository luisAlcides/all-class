// fx.replace(/["']/g, "")
const btnCalcularMethos = document.getElementById('btn-calculate-methods');
let data = {};

const bisection = (
	fun,
	xa,
	xb,
	iteration = 1000,
	error = 0.001,
	allResponse
) => {
	solution = undefined;
	count = 0;
	error_calculated = 101;
	console.log(fun(xa) + ' * ' + fun(xb));

	if (fun(xa) * fun(xb) <= 0) {
		while (count <= iteration && error_calculated) {
			count += 1;
			solution = (xa + xb) / 2;
			error_calculated = Math.abs((solution - xa) / solution) * 100;

			if (fun(xa) * fun(solution) >= 0) {
				xa = solution;
			} else {
				xb = solution;
			}
			console.log('xr= ', solution);
			console.log('er= ', error_calculated);

			allResponse.innerHTML += `<p>xr = ${solution}</p>
         <p>Er = ${error_calculated}</p>`;

			if (count <= iteration) {
				allResponse.innerHTML += `<h3>${count} iteracion</h3>`;
			}

			data.xr = solution;
			data.e_r = error_calculated;
		}
	} else {
		console.log('Error no encontrado');
	}
};

btnCalcularMethos.addEventListener('click', () => {
	const function_user =
		'(x) => ' + document.getElementById('function-user').value;
	const functionNotString = eval('(' + function_user + ')');
	console.log(functionNotString);

	console.log(typeof functionNotString);

	// const xa = document.getElementById("xa-user").value
	const xb = document.getElementById('xb-user').value;
	const iteration = document.getElementById('iteration-user').value;
	const error = document.getElementById('error-user').value;
	// const btn_e = document.getElementById("btn-e").textContent
	const allResponse = document.getElementById('allResponse');

	// let xaa = (Math.exp(x-1) - (1.5*x))

	bisection(functionNotString, xa, xb, iteration, error, allResponse);
});

//
