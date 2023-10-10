package com.haikuu.generator.controller;

import com.haikuu.generator.model.Token;
import com.haikuu.generator.service.GeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GeneratorController {
    private final GeneratorService generatorService;
    @Autowired
    public GeneratorController(GeneratorService generatorService) {
        this.generatorService = generatorService;
    }

    @GetMapping("/token")
    public ResponseEntity<Token> generateToken(@RequestParam List<Integer> digits) {
        Token token = generatorService.generateToken(digits);
        return ResponseEntity.ok(token);
    }
}