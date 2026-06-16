package com.mrfx.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
@Data
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String eventName;

    private String location;

    private LocalDateTime bookingDate;

    private String status; // PENDING, CONFIRMED, CANCELLED

    @ManyToOne
    private Customer customer;
}
