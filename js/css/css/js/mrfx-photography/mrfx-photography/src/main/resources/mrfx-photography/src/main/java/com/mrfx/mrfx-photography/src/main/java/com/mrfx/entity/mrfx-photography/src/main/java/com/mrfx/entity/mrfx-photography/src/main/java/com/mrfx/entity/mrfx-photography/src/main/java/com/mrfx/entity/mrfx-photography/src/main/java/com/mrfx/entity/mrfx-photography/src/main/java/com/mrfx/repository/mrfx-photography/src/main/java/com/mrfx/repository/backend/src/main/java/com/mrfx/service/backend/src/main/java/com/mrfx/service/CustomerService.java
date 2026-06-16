package com.mrfx.service;

import com.mrfx.entity.Customer;
import com.mrfx.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public Customer register(Customer customer) {
        customer.setPassword(encoder.encode(customer.getPassword()));
        return customerRepository.save(customer);
    }

    public Optional<Customer> login(String email, String password) {
        Optional<Customer> customerOpt = customerRepository.findByEmail(email);

        if (customerOpt.isPresent()) {
            Customer customer = customerOpt.get();

            if (encoder.matches(password, customer.getPassword())) {
                return Optional.of(customer);
            }
        }
        return Optional.empty();
    }
}
