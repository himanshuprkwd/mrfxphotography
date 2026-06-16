package com.mrfx.repository;

import com.mrfx.entity.GalleryCode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GalleryRepository extends JpaRepository<GalleryCode, Long> {

    Optional<GalleryCode> findByCode(String code);
}
