package com.haikuu.generator.service;

import com.haikuu.generator.model.Token;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.NullAndEmptySource;

import java.util.List;
import java.util.stream.Stream;

class GeneratorServiceTest {
    private static final Character GROUP_CONCATENATION = '-';

    private final GeneratorService generatorService = new GeneratorService();

    @ParameterizedTest
    @NullAndEmptySource
    void digitListIsNullOrEmpty_shouldReturnEmptyToken(List<Integer> digits) {
        Token token = generatorService.generateToken(digits);
        Assertions.assertEquals("",token.getValue());
    }

    @Test
    void validDigitsInList_TokenLengthIsNineteen() {
        Token resultToken = generatorService.generateToken(List.of(1,2,3));
        Assertions.assertEquals(19, resultToken.getValue().length());
    }

    @Test
    void validDigitsInList_TokenLengthOfDigitsIsSixteen() {
        Token resultToken = generatorService.generateToken(List.of(1,2,3));
        String result = resultToken.getValue();
        result = result.replace(String.valueOf(GROUP_CONCATENATION), "");
        Assertions.assertEquals(16, result.length());
    }

    @Test
    void validDigitsInList_TokenContainsDashAfterEachFourDigitGroup() {
        Token resultToken = generatorService.generateToken(List.of(1,2,3));
        String result = resultToken.getValue();
        Assertions.assertEquals(GROUP_CONCATENATION, result.charAt(4));
        Assertions.assertEquals(GROUP_CONCATENATION, result.charAt(9));
        Assertions.assertEquals(GROUP_CONCATENATION, result.charAt(14));
    }
    @ParameterizedTest
    @MethodSource("provideSingleDigitsForGenerateToken")
    void singleDigitInList_shouldReturnSameDigitsInToken(List<Integer> digits, String expectedToken) {
        Token resultToken = generatorService.generateToken(digits);
        Assertions.assertEquals(expectedToken, resultToken.getValue());
    }

    private static Stream<Arguments> provideSingleDigitsForGenerateToken() {
        return Stream.of(
                Arguments.of(List.of(0), "0000-0000-0000-0000"),
                Arguments.of(List.of(1), "1111-1111-1111-1111"),
                Arguments.of(List.of(2), "2222-2222-2222-2222"),
                Arguments.of(List.of(3), "3333-3333-3333-3333"),
                Arguments.of(List.of(4), "4444-4444-4444-4444"),
                Arguments.of(List.of(5), "5555-5555-5555-5555"),
                Arguments.of(List.of(6), "6666-6666-6666-6666"),
                Arguments.of(List.of(7), "7777-7777-7777-7777"),
                Arguments.of(List.of(8), "8888-8888-8888-8888"),
                Arguments.of(List.of(9), "9999-9999-9999-9999")
        );
    }
}