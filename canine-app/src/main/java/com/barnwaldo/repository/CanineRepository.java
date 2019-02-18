package com.barnwaldo.repository;

import com.barnwaldo.model.Canine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
public interface CanineRepository extends JpaRepository<Canine, Long> {

    // exposed at http://localhost:8080/canines/search/byBreed?dogBreed=breed-name
    @RestResource(path = "byBreed", rel = "byBreed")
    List<Canine> findByDogBreed(String dogBreed);

    // exposed at http://localhost:8080/canines/search/byBreedInitial?dogBreed=alphabet-letter
    @RestResource(path = "byBreedInitial", rel = "byBreedInitial")
    List<Canine> findByDogBreedStartingWith(String dogBreed);
}
