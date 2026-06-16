package com.mrfx.controller;

import com.mrfx.entity.GalleryCode;
import com.mrfx.repository.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gallery")
@CrossOrigin("*")
public class GalleryController {

    @Autowired
    private GalleryRepository galleryRepository;

    @PostMapping("/create")
    public GalleryCode createGallery(@RequestBody GalleryCode gallery) {
        return galleryRepository.save(gallery);
    }

    @GetMapping("/all")
    public List<GalleryCode> getAll() {
        return galleryRepository.findAll();
    }

    @GetMapping("/{code}")
    public GalleryCode getByCode(@PathVariable String code) {
        return galleryRepository.findByCode(code).orElse(null);
    }
}
