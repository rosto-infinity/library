function fibonacci(n: number): number[] {
  const fibSeries: number[] = [];

  for (let i = 0; i < n; i++) {
      if (i === 0) {
          fibSeries.push(0);
      } else if (i === 1) {
          fibSeries.push(1);
      } else {
          const nextFib = fibSeries[i - 1] + fibSeries[i - 2];
          fibSeries.push(nextFib);
      }
  }

  return fibSeries;
}

// Exemple d'utilisation
const n = 10; // Nombre de termes à générer
const result = fibonacci(n);
console.log(result); // Affiche la suite de Fibonacci
