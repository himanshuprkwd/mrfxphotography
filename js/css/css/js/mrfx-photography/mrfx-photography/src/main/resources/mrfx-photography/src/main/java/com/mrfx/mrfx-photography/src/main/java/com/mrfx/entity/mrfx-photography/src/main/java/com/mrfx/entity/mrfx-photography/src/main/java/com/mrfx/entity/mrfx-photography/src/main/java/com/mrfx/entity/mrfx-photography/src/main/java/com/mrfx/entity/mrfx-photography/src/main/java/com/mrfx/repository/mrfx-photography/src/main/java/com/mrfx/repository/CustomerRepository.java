package com.mrfx.repository;

import com.mrfx.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Optional<Customer> findByEmail(String email);
} 
package com.mrfx.repository;

import com.mrfx.entity.Photo;
import com.mrfx.entity.GalleryCode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PhotoRepository extends JpaRepository<Photo, Long> {

    List<Photo> findByGalleryCode(GalleryCode galleryCode);
}
