const request = require('supertest');
const express = require('express');
const authController = require('../../server/controllers/authController');
const jwt = require('jsonwebtoken');

jest.mock('jsonwebtoken');

const app = express();
app.use(express.json());
app.post('/signup', authController.signup);
app.post('/login', authController.login);

describe('Auth Controller', () => {
  describe('POST /signup', () => {
    it('should create a new user and return a token', async () => {
      const response = await request(app)
        .post('/signup')
        .send({ username: 'testuser', password: 'testpass' });

      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty('token');
    });

    it('should return 400 if username or password is missing', async () => {
      const response = await request(app)
        .post('/signup')
        .send({ username: 'testuser' });

      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty('error', 'Username and password are required');
    });
  });

  describe('POST /login', () => {
    it('should authenticate user and return a token', async () => {
      jwt.sign.mockReturnValue('mockToken');

      const response = await request(app)
        .post('/login')
        .send({ username: 'testuser', password: 'testpass' });

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('token', 'mockToken');
    });

    it('should return 401 if credentials are invalid', async () => {
      const response = await request(app)
        .post('/login')
        .send({ username: 'wronguser', password: 'wrongpass' });

      expect(response.statusCode).toBe(401);
      expect(response.body).toHaveProperty('error', 'Invalid username or password');
    });
  });
});