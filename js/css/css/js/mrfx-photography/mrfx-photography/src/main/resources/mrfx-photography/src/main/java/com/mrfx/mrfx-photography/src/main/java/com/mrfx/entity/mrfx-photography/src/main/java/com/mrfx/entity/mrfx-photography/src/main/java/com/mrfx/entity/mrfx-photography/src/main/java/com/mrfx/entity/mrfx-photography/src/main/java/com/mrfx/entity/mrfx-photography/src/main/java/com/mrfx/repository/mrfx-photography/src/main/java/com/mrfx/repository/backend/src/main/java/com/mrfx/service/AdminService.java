package com.mrfx.service;

import com.mrfx.entity.Admin;
import com.mrfx.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public Admin register(Admin admin) {
        admin.setPassword(encoder.encode(admin.getPassword()));
        return adminRepository.save(admin);
    }

    public Optional<Admin> login(String email, String password) {
        Optional<Admin> adminOpt = adminRepository.findByEmail(email);

        if (adminOpt.isPresent()) {
            Admin admin = adminOpt.get();

            if (encoder.matches(password, admin.getPassword())) {
                return Optional.of(admin);
            }
        }
        return Optional.empty();
    }
}
