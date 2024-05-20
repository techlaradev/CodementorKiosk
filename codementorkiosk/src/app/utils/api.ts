import axios from 'axios';

const api = axios.create({
  baseURL: 'https://30ea-2804-14d-7e88-78f7-1820-9a1a-e628-69d2.ngrok-free.app/', // substitua pela URL base da sua API
  timeout: 1000, // opcional: define um tempo limite para as requisições
  headers: {'X-Custom-Header': 'foobar'} // opcional: define cabeçalhos personalizados
});

export default api;
