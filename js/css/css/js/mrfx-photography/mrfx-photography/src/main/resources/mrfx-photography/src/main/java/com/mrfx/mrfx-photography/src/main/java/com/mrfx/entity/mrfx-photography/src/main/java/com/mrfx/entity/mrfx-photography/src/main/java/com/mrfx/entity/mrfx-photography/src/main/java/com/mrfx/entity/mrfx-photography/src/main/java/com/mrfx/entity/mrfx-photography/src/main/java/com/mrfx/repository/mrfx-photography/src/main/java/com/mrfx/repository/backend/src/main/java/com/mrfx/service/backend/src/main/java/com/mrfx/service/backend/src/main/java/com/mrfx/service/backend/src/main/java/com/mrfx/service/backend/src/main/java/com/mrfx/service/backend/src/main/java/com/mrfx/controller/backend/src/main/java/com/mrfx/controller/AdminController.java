package com.mrfx.controller;

import com.mrfx.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private CustomerRepository customerRepository;

    // सभी customers देखने के लिए
    @GetMapping("/customers")
    public Object getAllCustomers() {
        return customerRepository.findAll();
    }

    // customer delete
    @DeleteMapping("/customer/{id}")
    public String deleteCustomer(@PathVariable Long id) {
        customerRepository.deleteById(id);
        return "Customer deleted successfully";
    }
}
