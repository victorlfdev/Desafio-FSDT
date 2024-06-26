# Desafio-FSDT

## Integrantes

> - Victor Costa Santos - RM357709
> - Victor Lima Fernandes - RM357736
> - Tiago Souza - RM357499
> - Murilo Greco - RM357524

# Desafio

![image](https://github.com/victorlfdev/Desafio-FSDT/assets/104789163/b05cd377-a416-4f37-8773-6458bffc8a3e)

**DESAFIO**

1. Criar formulário seguindo mockup do [Figma](https://www.figma.com/file/scLVh5Mov1SJlwMv0wQ2bW/POSTECH---FULLSTACK?type=design&node-id=0%3A1&mode=design&t=5tNVEAykHd8GeMof-1)
2. As informações deverão ser enviadas por uma requisição POST para: https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact as informações devem ser enviadas no formato JSON.
3. O JSON deve conter um atributo **names** (um array de string contendo os nomes dos integrantes da equipe) e um atributo **message** (uma string que referencia o campo história do grupo do protótipo)
4. Após a finalização, disponibilize no GitHub e enviar por e-mail para o professor e coordenador para ser avaliada

```jsx
POST
https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact

{
    "names": [
        "Gustavo",
        "Vanderson",
        "Henrique",
        "Thiago"
    ],
    "message": "Oi pessoal, sou o Gustavo, e vou estar com vocês como coordenador no curso de Full Stack! …"
}

```



**REGRAS**

- Permitido apenas a utilização de HTML, CSS e JavaScript. **Não é permitido** a utilização de frameworks ou bibliotecas e os arquivos de CSS e JavaScript devem estar separados do HTML.
    - Ex de estrutura de pastas:
        - folder
            - index.html
            - style.css
            - script.js
- Tempo máximo de 45 min
- Com a aplicação finalizada, **deverá ser publicado **no GitHub por um dos integrantes da equipe.**
- No readme precisa ter o nome completo de todos os integrantes com o RM
- A equipe que desenvolver, publicar e enviar primeiro, ganha! *(com a validação do professor e do coordenador)*
