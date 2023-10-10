package com.haikuu.generator.service;

import com.haikuu.generator.model.Token;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Component
public class GeneratorService {
    public static final int TOKEN_DIGITS = 16;
    public static final String GROUP_CONCATENATION = "-";
    public static final int DIGITS_GROUP_SIZE = 4;

    public Token generateToken(List<Integer> digits) {
        if(isInValidInput(digits)) {
            return new Token("");
        }
        StringBuilder tokenBuilder = new StringBuilder();
        for(int counter = 0; counter < TOKEN_DIGITS; counter++) {
            if(counter % DIGITS_GROUP_SIZE == 0 && counter != 0 ) {
                tokenBuilder.append(GROUP_CONCATENATION);
            }
            int index = ThreadLocalRandom.current().nextInt(digits.size());
            int digit = digits.get(index);
            tokenBuilder.append(digit);
        }
        return new Token(tokenBuilder.toString());
    }

    private boolean isInValidInput(List<Integer> digits) {
        return digits == null || digits.size() == 0;
    }
}
