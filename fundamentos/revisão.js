JS
    Lado do Cliente
    Árvore de elementos (Vanila ou Frameworks)
    
    Lado do Servidor (NodeJS)
    Variáveis
        - var, let e const
        - = atribuição
        - Tipagem fraca
        - Tipos:
            string
            number (int e float)
            boolean
            array
                metodos
            object
                metodos
            null -> ausencia de valor
            undefined -: nao inicializado
            NaN -> Não é um numero (ex: 10/"olá")
    Tratamento de Dados
        String
            Concatenação
            ""
            ''
            `` (Template String)
            .length
            .toUpperCase()
            .toLowerCase()
            .replace()
            String
            
        Number
            Number.parseInt()
            Number.parseFloat()
            Number() string para numero
            String() numero para string
            .toFixed(2)
            .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            .toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
    Exibição de mensagens
        console.log(info, error, warn)
    Operadores Aritméticos
        + - * / % **
        precedência
            ()
            **
            * / %
            + -
        Math 
    Operadores relacionais
        > < >= <= == !=
        === !==

    Operadores lógicos
        ! negação
        && E
        || OU


    Condições
        if else
        ternário ? :

        switch(condicao) {
            case valor1:
                comando
                break
            default:
                break
        }

    Repetição

        // Testa a condição no inicio
        let contador = 0
        while (condicao) {
            comando
            contador++
        }

        // Testa a condição no fim
        let contador = 0
        do {
            comando
            contador++
        } while (condicao)

        // laço for
        // inicialização: condição: incremento
        for (let c = 1; c < 5 ; c++){
            comando
        }

    Funções
        function executa() {
            console.log("TESTE")
        }

        function soma(n1, n2) {
            return n1 + n2;
        }

        const soma = (n1, n2) => {
            return n1 + n2;
        }

        const soma = (n1,n2) => n1 + n2
