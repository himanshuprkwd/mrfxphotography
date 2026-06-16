
package com.mrfx.controller;

import com.mrfx.entity.GalleryCode;
import com.mrfx.entity.Photo;
import com.mrfx.repository.GalleryRepository;
import com.mrfx.repository.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/photo")
@CrossOrigin("*")
public class PhotoController {

    @Autowired
    private PhotoRepository photoRepository;

    @Autowired
    private GalleryRepository galleryRepository;

    @GetMapping("/gallery/{code}")
    public List<Photo> getPhotos(@PathVariable String code) {

        GalleryCode gallery = galleryRepository.findByCode(code).orElse(null);

        if (gallery == null) return null;

        return photoRepository.findByGalleryCode(gallery);
    }

    @PostMapping("/add")
    public Photo addPhoto(@RequestBody Photo photo) {
        return photoRepository.save(photo);
    }
}
