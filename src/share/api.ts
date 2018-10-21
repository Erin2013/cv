import axios from 'axios'

const GAPI = axios.create({
  baseURL: 'https://script.google.com/macros/s',
  url: '/AKfycbwPH91z82VyYzn4TYzNErY0qBMPGSgJf4575-TZ2PWWtE4tX6JB/exec',
})

export type TypeGAPI = {
  urlPDF: string
}

const gapi = (): Promise<TypeGAPI> => GAPI({}).then(res => res.data)

export default gapi
