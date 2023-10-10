package com.haikuu.validator.service;

import com.haikuu.validator.model.TokenValidation;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.NullAndEmptySource;
import org.junit.jupiter.params.provider.ValueSource;

class ValidatorServiceTest {

    private final ValidatorService validatorService = new ValidatorService();

    @ParameterizedTest
    @NullAndEmptySource
    void tokenIsNullOrEmpty_shouldReturnFalse(String token) {
        TokenValidation result = validatorService.validateToken(token);
        Assertions.assertFalse(result.isValid());
    }

    @ParameterizedTest
    @ValueSource(strings = {"2312-3212-2323-1333", "1321-7985-5598-3654", "4749-4954-8790-0000"})
    void invalidToken_ShouldReturnFalse(String token) {
        TokenValidation result = validatorService.validateToken(token);
        Assertions.assertFalse(result.isValid());
    }

    @ParameterizedTest
    @ValueSource(strings = {"2311-3212-2323-1333", "1821-3084-5160-9251", "7779-9997-9799-9999"})
    void validToken_ShouldReturnTrue(String token) {
        TokenValidation result = validatorService.validateToken(token);
        Assertions.assertTrue(result.isValid());
    }

}