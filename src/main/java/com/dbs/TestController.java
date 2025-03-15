package com.dbs;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TestController {
    @GetMapping("/api")
    public String sayHello() {
        return "Hello, Spring Boot is running!";
    }
}
