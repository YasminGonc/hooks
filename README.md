# Notas de aula e exemplos de aplicação dos Hooks

## O que são?

<ul>
    <li>API do React (a partir da versão 16.8);</li>
    <li>Permite usar state e outros recursos do React sem precisar de uma classe;</li>
    <li>Só é possível utilizar dentro de componentes funcionais;</li>
    <li>Facilita a sintax do componente --> ficando menos verbosa;</li>
    <li>Com a criação dos hooks não há mais a necessidade de usar as classes;</li>
    <li>Não colocar o Hooks dentro de uma função ou dentro de um if, pois a quantidade de vezes que ele vai ser chamado pode ser diferente;</li>
    <li>São exemplos de hooks:
        <ol>
            <li>useState</li>
            <li>useEffect</li>
            <li>useRef</li>
            <li>useReducer</li>
            <li>useContext</li>
            <li>useMemo</li>
            <li>useCallback</li>
            <li>useLayoutEffect</li>
        </ol>
    </li>
</ul>

## React Hooks

Principais Hooks:

### useState

<ul>
    <li>Forma de armazenar states nos componentes funcionais;</li>
    <li>Usado quando o estado de um componente se altera;</li>
</ul>

![](src/assets/useState.png)

### useEffect

<ul>
    <li>Um dos hooks mais importantes;</li>
    <li>Geralmente usados quando se consome dadoss de uma API;</li>
    <li>Dá acesso aos métodos de ciclo de vida do componente;</li>
    <li>"Fazer alguma coisa quando algo mudar";<li>
    <li>Não pode ser uma função assíncrona;</li>
    <li>Para usar assíncrono no useEffect tem que criar uma função assíncrona.</li>
</ul>

Construção:

<ul>
    <li>Recebe 2 parâmetros: primeiro é uma função e o segundo é o array de dependências;</li>
    <li>O segundo parâmetro não é obrigatório, mas sempre será executado sempre que o componente for renderizado novamente;</li>
    <li>O segundo parâmetro deve receber o elemento que eu quero "assistir". No exemplo, o resourseType é passado no segundo parâmetro, pois quero "fazer alguma coisa" quando esse componente mudar;</li>
</ul>

![](src/assets/useEffect.png)

### useRef

<ul>
    <li>Retorna um objeto ref mutável, no qual a propriedade .current é inicializada;</li>
    <li>Guardar quantas vezes o componente foi renderizado (Exemplo 1);</li>
    <li>Dá para utilizar para referenciar elementos HTML (Exemplo 2)</li>
</ul>
