package com.haikuu.generator.controller;

import com.haikuu.generator.model.Token;
import com.haikuu.generator.service.GeneratorService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.List;

class GeneratorControllerTest {

    public static final String TEST_TOKEN = "XXXX-XXXX-XXXX-XXXX";
    private GeneratorController generatorController;

    @Mock
    private GeneratorService generatorService;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
        generatorController = new GeneratorController(generatorService);
    }

    @Test
    void listOfDigitsIsPassed_shouldCallGeneratorServiceWithList() {
        List<Integer> digits = List.of(1,2,3);
        generatorController.generateToken(digits);
        Mockito.verify(generatorService).generateToken(digits);
    }
    @Test
    void listOfDigitsIsPassed_shouldReturnToken() {
        List<Integer> digits = List.of(1,2,3);
        Token token = new Token(TEST_TOKEN);
        Mockito.when(generatorService.generateToken(digits)).thenReturn(token);
        ResponseEntity<Token> response = generatorController.generateToken(digits);
        Assertions.assertEquals(token, response.getBody());
    }
}