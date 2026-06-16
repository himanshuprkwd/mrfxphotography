package com.mrfx.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.Map;

@Service
public class CloudinaryService {

    private final Cloudinary cloudinary;

    public CloudinaryService() {
        this.cloudinary = new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "YOUR_CLOUD_NAME",
                "api_key", "YOUR_API_KEY",
                "api_secret", "YOUR_API_SECRET"
        ));
    }

    public Map upload(File file) {
        try {
            return cloudinary.uploader().upload(file, ObjectUtils.emptyMap());
        } catch (Exception e) {
            throw new RuntimeException("Image upload failed");
        }
    }
}
