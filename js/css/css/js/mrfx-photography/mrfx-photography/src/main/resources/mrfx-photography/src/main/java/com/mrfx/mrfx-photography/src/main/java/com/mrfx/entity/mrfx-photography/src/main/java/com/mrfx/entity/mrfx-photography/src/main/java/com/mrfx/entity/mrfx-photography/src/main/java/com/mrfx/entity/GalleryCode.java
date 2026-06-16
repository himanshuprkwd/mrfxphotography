package com.mrfx.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "gallery_codes")
@Data
public class GalleryCode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String code;

    private LocalDateTime createdAt;

    private LocalDateTime expiryDate;

    @ManyToOne
    private Customer customer;
}
