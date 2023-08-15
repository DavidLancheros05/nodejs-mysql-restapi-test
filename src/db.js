import { createPool } from 'mysql2/promise'

import {BD_HOST, BD_PORT, BD_USER, BD_PASSWORD, BD_DATABASE} from './config.js'

export const pool = createPool({
    host: BD_HOST, // Cambia esto con la dirección de tu servidor MySQL
    user: BD_USER, // Cambia esto con tu usuario de MySQL
    password: BD_PASSWORD, // Cambia esto con tu contraseña de MySQL
    port: BD_PORT,
    database: BD_DATABASE // Cambia esto con el nombre de tu base de datos
  })


