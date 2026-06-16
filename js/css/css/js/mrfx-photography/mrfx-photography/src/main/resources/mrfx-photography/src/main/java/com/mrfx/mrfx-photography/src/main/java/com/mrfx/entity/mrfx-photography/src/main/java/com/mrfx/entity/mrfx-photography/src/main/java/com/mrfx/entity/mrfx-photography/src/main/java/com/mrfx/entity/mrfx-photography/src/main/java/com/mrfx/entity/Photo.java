package com.mrfx.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "photos")
@Data
public class Photo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imageUrl;

    private String publicId; // Cloudinary ID

    @ManyToOne
    private GalleryCode galleryCode;
}
