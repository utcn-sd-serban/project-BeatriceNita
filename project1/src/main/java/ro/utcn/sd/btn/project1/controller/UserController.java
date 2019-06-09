package ro.utcn.sd.btn.project1.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ro.utcn.sd.btn.project1.model.Guide;
import ro.utcn.sd.btn.project1.service.AppUserDetailsService;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final AppUserDetailsService service;

    @GetMapping("/me")
    public Guide readCurrent() {
        return service.loadCurrentUser();
    }
}