package com.haikuu.validator.controller;

import com.haikuu.validator.model.Token;
import com.haikuu.validator.model.TokenValidation;
import com.haikuu.validator.service.ValidatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ValidatorController {

    private final ValidatorService validatorService;
    @Autowired
    public ValidatorController(ValidatorService validatorService) {
        this.validatorService = validatorService;
    }

    @PostMapping("/token")
    public ResponseEntity<TokenValidation> validateToken(@RequestBody Token token) {
        TokenValidation validation = validatorService.validateToken(token.getValue());
        return ResponseEntity.ok(validation);
    }
}
