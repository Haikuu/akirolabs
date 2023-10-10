import * as axios from "axios";
import { generateToken } from "./generator-service";

jest.mock("axios");
const setServiceError = jest.fn();
const token = 'test-token';
const inputDigits = '1,2,3';

test("Request is successful for token generator", async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: {value : token} }));
    const response = await generateToken(inputDigits, setServiceError);
    expect(response).toBe(token);
});
  
test("Request is unsuccessful for token generator", async () => {
    axios.get.mockImplementation(() => Promise.reject({}));
    const response = await generateToken(inputDigits, setServiceError);
    expect(response).toBe('');
    expect(setServiceError).toHaveBeenCalled();
});