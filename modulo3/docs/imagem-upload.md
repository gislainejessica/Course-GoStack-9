## Upload de imagens no NodeJs
Json não suporta upload de arquivos, envio de arquivos, por isso usar __Multipart-Form-Data__ para fazer envio de imagens e arquivos, para manipular esse tipo de requisição usaremos o **Multer**

  - `yarn add multer`

1. Criar na raiz do projeto uma pasta __temp__

2. Criar na pasta config dentro so src o arquivo `multer.js`
  - Configuração pra upload de arquivos

3. Fazer a configuração para upload

  - Exemplo de config:
    ```js
    export default {
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: (req, file, cb) => {
          crypto.randomBytes(16, (err, res) => {
            if (err) {
              return cb(err)
            }
            return cb(null, res.toString('hex') + extname(file.originalname))
          })
        },
      }),
    }
    ```
4. Criar uma rota para fazer o upload de arquivos.
  - Criar uma variavel de uplod como o multer que vai captar os arquivos da rota
    `const upload = multer(multerConfig)`
  - A rota ficaria assim nesse ponto
    ```js
      routes.post('/files', upload.single('file'), (req, res) => {
      return res.json({ ok: true })})
    ```

Algumas observações sobre essa configuração:
- __storage__ define como o _multer_ vai guardar os arquivos de imagem

  - _CDN_: Content Delivery Network => servidores online para armazenar arquivos fisicos num servidor, por ex:  _Digital Ocean Spaces_ e _Amazon S3_
  - _DiskStorage_ é a opção que vamos utilizar, nesse caso, para armazenar os arquivos localmente.
    - Antes de salvar os arquivos vamos formatar o nome do arquivo de imagem:
      - Pra não ter carateres especiais que podem dá problemas na hora de armazenar,
      - E caso as imagens tenham nomes repetidos, não dá conflito na hora de referenciar
---

## Referenciar imagem na base de dados
