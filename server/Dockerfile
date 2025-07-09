FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV MONGODB_URI=mongodb+srv://sa:sa@cluster0.a0pc9kv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
CMD ["node", "server.js"]