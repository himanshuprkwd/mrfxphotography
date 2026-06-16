package com.mrfx.controller;

import com.mrfx.entity.Admin;
import com.mrfx.entity.Customer;
import com.mrfx.service.AdminService;
import com.mrfx.service.CustomerService;
import com.mrfx.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private JwtService jwtService;

    // ---------- ADMIN REGISTER ----------
    @PostMapping("/admin/register")
    public ResponseEntity<?> adminRegister(@RequestBody Admin admin) {
        return ResponseEntity.ok(adminService.register(admin));
    }

    // ---------- ADMIN LOGIN ----------
    @PostMapping("/admin/login")
    public ResponseEntity<?> adminLogin(@RequestBody Admin admin) {

        Optional<Admin> result = adminService.login(admin.getEmail(), admin.getPassword());

        if (result.isPresent()) {
            String token = jwtService.generateToken(admin.getEmail());
            return ResponseEntity.ok(token);
        }

        return ResponseEntity.status(401).body("Invalid Admin Credentials");
    }

    // ---------- CUSTOMER REGISTER ----------
    @PostMapping("/customer/register")
    public ResponseEntity<?> customerRegister(@RequestBody Customer customer) {
        return ResponseEntity.ok(customerService.register(customer));
    }

    // ---------- CUSTOMER LOGIN ----------
    @PostMapping("/customer/login")
    public ResponseEntity<?> customerLogin(@RequestBody Customer customer) {

        Optional<Customer> result = customerService.login(customer.getEmail(), customer.getPassword());

        if (result.isPresent()) {
            String token = jwtService.generateToken(customer.getEmail());
            return ResponseEntity.ok(token);
        }

        return ResponseEntity.status(401).body("Invalid Customer Credentials");
    }
}
