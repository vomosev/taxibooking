const request = require('supertest');
const express = require('express');
const ratingController = require('../../server/controllers/ratingController');
const { mockRequest, mockResponse } = require('../utils/interceptor');

const app = express();
app.use(express.json());

app.post('/rate', ratingController.rate);

describe('Rating Controller', () => {
  describe('POST /rate', () => {
    it('should successfully rate a driver', async () => {
      const req = mockRequest({
        body: {
          userId: 1,
          driverId: 2,
          rating: 5,
        },
      });
      const res = mockResponse();

      await ratingController.rate(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
        message: 'Rating submitted successfully',
      }));
    });

    it('should fail if rating is missing', async () => {
      const req = mockRequest({
        body: {
          userId: 1,
          driverId: 2,
        },
      });
      const res = mockResponse();

      await ratingController.rate(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
        error: 'Rating is required',
      }));
    });

    it('should fail if userId is missing', async () => {
      const req = mockRequest({
        body: {
          driverId: 2,
          rating: 5,
        },
      });
      const res = mockResponse();

      await ratingController.rate(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
        error: 'User ID is required',
      }));
    });

    it('should fail if driverId is missing', async () => {
      const req = mockRequest({
        body: {
          userId: 1,
          rating: 5,
        },
      });
      const res = mockResponse();

      await ratingController.rate(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
        error: 'Driver ID is required',
      }));
    });
  });
});