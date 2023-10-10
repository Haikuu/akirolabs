import * as axios from "axios";
import { validateToken } from "./validator-service";
import { VALIDATION_STATES } from "../constants/validation";

jest.mock("axios");
const setServiceError = jest.fn();

test("Request is successful for token validator", async () => {
    axios.post.mockImplementation(() => Promise.resolve({ data: {valid: true} }));
    const response = validateToken('test-token', setServiceError);
    expect(response).toBeTruthy();
});
  
  test("Request is unsuccessful for token validator", async () => {
    axios.post.mockImplementation(() => Promise.reject({}));
    const response = await validateToken('test-token', setServiceError);
    expect(response).toBe(VALIDATION_STATES.UNVALIDATED);
    expect(setServiceError).toHaveBeenCalled();
  });