import axios from 'axios';

const token = "BQAtgL3PWil6bJoOehwym7UixB9r4eQKxE3lEeRyiVB0bo979nPoqitsFsZ26RZufpCXQAo8G3nMm-kJNkHxz6V1qYAztpJUH9zqhphYjntvkP7dgQVqwtj3zg7Tb5jtcOU-e6xjTJkd";

const api = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    
});

export default {api};