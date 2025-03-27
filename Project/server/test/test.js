import { expect } from 'chai';
import { it } from 'mocha';
import supertest from 'supertest';
import app from '../app.js';


describe('Test user api', () => {
    it('should add two numbers', function () {
        const num1 = 2;
        const num2 = 3;

        expect(num1 + num2).to.equal(5);
    })


    it('Calling user creation', async () => {

        const response = await supertest(app).post(`/user`).send({
            "FirstName": "Test",
            "LastName": "API",
            "Email": "nasreen_arif@live.com",
            "Password": "12345678",
            "IsAdmin": 0
        });

        expect(response.status).to.equal(200);

    })


})
