package com.haikuu.validator.controller;

import com.haikuu.validator.model.Token;
import com.haikuu.validator.model.TokenValidation;
import com.haikuu.validator.service.ValidatorService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

class ValidatorControllerTest {

    private ValidatorController validatorController;

    @Mock
    private ValidatorService validatorService;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
        validatorController = new ValidatorController(validatorService);
    }

    @Test
    void tokenIsProvided_ShouldCallValidatorServiceWithToken() {
        String token = "2312-3212-2323-1333";
        Token validationRequest = new Token();
        validationRequest.setValue(token);
        validatorController.validateToken(validationRequest);
        Mockito.verify(validatorService).validateToken(token);
    }

    @Test
    void serviceReturnsFalse_ShouldReturnFalseAndOkStatus() {
        String token = "2312-3212-2323-1333";
        Token validationRequest = new Token();
        TokenValidation response = new TokenValidation(false);
        validationRequest.setValue(token);
        Mockito.when(validatorService.validateToken(token)).thenReturn(new TokenValidation(false));
        ResponseEntity<TokenValidation> result = validatorController.validateToken(validationRequest);
        Assertions.assertEquals(ResponseEntity.ok(response), result);
    }

    @Test
    void serviceReturnsTrue_ShouldReturnTrueAndOkStatus() {
        String token = "2312-3212-2323-1333";
        Token validationRequest = new Token();
        TokenValidation response = new TokenValidation(false);
        validationRequest.setValue(token);
        Mockito.when(validatorService.validateToken(token)).thenReturn(response);
        ResponseEntity<TokenValidation> result = validatorController.validateToken(validationRequest);
        Assertions.assertEquals(ResponseEntity.ok(response), result);
    }
}