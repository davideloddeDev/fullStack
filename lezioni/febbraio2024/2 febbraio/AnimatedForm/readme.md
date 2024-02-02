Ecco qui la tua RegEx:    /^[^\s@]+@[^\s@]+\.[^\s@]+$/

- ^: Indica l'inizio della stringa, assicurandosi che l'indirizzo email inizi da questo punto.
- [^\s@]+: Corrisponde a uno o più caratteri che non sono spazi (\s) o simboli "@".
- @: Corrisponde al simbolo "@".
- [^\s@]+: Corrisponde a uno o più caratteri che non sono spazi (\s) o simboli "@".
- \.: Corrisponde al simbolo ".". Nota che il punto deve essere preceduto da una barra rovesciata (\) per essere interpretato letteralmente.
- [^\s@]+: Corrisponde a uno o più caratteri che non sono spazi (\s) o simboli "@".
- $: Indica la fine della stringa, assicurandosi che l'indirizzo email finisca a questo punto.