# Etapa de build
FROM node:18 AS build

WORKDIR /app

# Copia os arquivos de configuração do projeto e instala as dependências
COPY package*.json ./
RUN npm install

# Copia o código-fonte da aplicação para o container
COPY . .

# Gera a build da aplicação Vue.js
RUN npm run build

# Etapa de produção
FROM node:18 AS production

WORKDIR /app

# Instala a biblioteca `serve` globalmente
RUN npm install -g serve

# Copia os arquivos de build do container de build
COPY --from=build /app/dist /app/dist

# Exponha a porta em que `serve` vai rodar
EXPOSE 3000

# Comando para iniciar o `serve` no container
CMD ["serve", "-s", "dist"]