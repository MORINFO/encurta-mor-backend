# Use uma imagem base oficial do Node.js com uma versão LTS
FROM node:20-alpine3.19

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie os arquivos de package e package-lock
COPY package*.json ./

# Instale as dependências do projeto
RUN npm ci

# Copie o resto dos arquivos do projeto
COPY . .

# Gere os tipos do Prisma
RUN npx prisma generate

# Compile o projeto (se estiver usando TypeScript)
RUN npm run build

# Exponha a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["sh", "-c", "npm run db:deploy && npm run start"]

