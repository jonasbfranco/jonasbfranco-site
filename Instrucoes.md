### Instalar yarn pelo npm
npm install -g yarn

### Site de Cores
https://colorsui.com/tint-and-shade-color-generator/#483078

### Site de cores gradiente
https://cssgradient.io/

### Adicionar React Icons
npm install react-icons --save
ou
yarn add react-icons
### React Icons
https://react-icons.github.io/react-icons/
### Fonte Awesome
import { IconName } from "react-icons/fa";
### Site Nodemailer
https://nodemailer.com/about/





### Configuracao arquivo .env
DB_HOST=localhost
DB_USER=myuser
DB_PASS=mypassword

#### Como usar as variaveis do arquivo .env
// pages/index.js
export async function getStaticProps() {
  const db = await myDB.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  })
  // ...
}


