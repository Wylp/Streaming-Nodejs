# Projeto de upload de arquivo com streaming e proxy
Este projeto consiste em um sistema de upload de arquivo com streaming utilizando uma API Rest como proxy do lado do cliente. O sistema é composto por três containers Docker: um backend em Node.js, outro uma API Rest que atua como proxy e um que simulador de frontend (basicamente um script atualmente) para o upload de arquivo.

## Pré-requisitos
Para executar este projeto, você precisará ter o Docker e o Docker Compose instalados em sua máquina.

## Executando o projeto
1.Clone este repositório em sua máquina local:

```git
    git clone https://github.com/seu-usuario/seu-repositorio.git
```

2.Acesse a pasta do projeto:
```sh
    cd seu-repositorio
```

3.Execute o Docker Compose:
```git
    docker-compose up
```

4.Crie um arquivo de qualquer tamanho na pasta `/front/toUpload` (Certifique-se de que a sua maquina o dobro do tamanho do arquivo).
```sh
    cd /front/toUpload
    dd if=/dev/zero of=bigfile.txt bs=1M count=<Quantidade_de_MB_desejado>
```

5. Execute o script da pasta front
```sh
    npm start
```

6. Olhe o terminal do docker, verá que o arquivo foi upado com sucesso.

7. Para visualiza-lo basta descobrir o nome do container e entrar para vê-lo
```sh
    docker ps
    docker exec -it <Container_ID> sh
```

```
    cd uploads
    ls -la
```


## Estrutura do projeto
O projeto é composto pelas seguintes pastas:

 - backend: contém o código do backend em Node.js.
 - api: contém o código da API Rest que atua como proxy.
 - frontend: contém o código de simulação de frontend para o upload de arquivo.

## Como funciona
1. O usuário executa a simulação frontend da aplicação usando o terminal.
1. O "frontend" faz uma requisição HTTP para a API Rest com o arquivo em formato de stream.
1. A API Rest recebe a requisição e faz uma nova requisição HTTP para o backend com o arquivo em formato de stream.
1. O backend recebe a requisição, processa o arquivo e salva localmente.
1. O backend retorna uma resposta para a API Rest.
1. A API Rest retorna uma resposta para o frontend.
1. O frontend exibe uma mensagem de sucesso ou erro para o usuário.

## Tecnologias utilizadas
- Node.js
- Express

### Feito em conjunto com o https://chat.openai.com/