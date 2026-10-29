import Vue from 'vue'
import axios from 'axios'

const axiosCamara = axios.create({
  baseURL: 'https://dadosabertos.camara.leg.br/api/v2/',
  timeout: 60000,
})

const axiosSenado = axios.create({
  baseURL: 'https://legis.senado.leg.br/dadosabertos/',
  timeout: 6000,
});

  const Axios = axios.create({
    timeout: 90000
  })

Vue.prototype.$axios = axiosCamara
export { axiosCamara, axiosSenado, Axios }
