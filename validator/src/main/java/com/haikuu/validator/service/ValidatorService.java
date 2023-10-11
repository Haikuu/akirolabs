package com.haikuu.validator.service;

import com.haikuu.validator.model.TokenValidation;
import org.apache.commons.validator.routines.checkdigit.LuhnCheckDigit;
import org.springframework.stereotype.Component;

@Component
public class ValidatorService {

    public TokenValidation validateToken(String token) {
        String sanitizedToken = sanitizeToken(token);
        LuhnCheckDigit luhnCheckDigit = new LuhnCheckDigit();
        boolean isValid = luhnCheckDigit.isValid(sanitizedToken);
        return new TokenValidation(isValid);
    }

    private String sanitizeToken(String token) {
        if (token == null) {
            return null;
        }
        return token.replace("-", "");
    }
}
