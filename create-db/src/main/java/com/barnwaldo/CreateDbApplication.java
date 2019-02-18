package com.barnwaldo;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

/**
 * The CreateDbApplication program reads AKC web scraped data from a JSON file.
 * This data is then committed to a MySQL database
 *
 * Spring Boot dependencies include: Lombok, Web, Rest JPA, MySQL
 *
 * @author  MS Barnes
 * @version 1.0
 * @since   2018-11-10
 */

@SpringBootApplication
public class CreateDbApplication {

    public static void main(String[] args) {

        SpringApplication.run(CreateDbApplication.class, args);
    }

    @Bean
    ApplicationRunner init(CanineRepository canineRepository) {
        return args -> {
            // read json and write to db
            ObjectMapper mapper = new ObjectMapper();
            InputStream inputStream = TypeReference.class.getResourceAsStream("/json/akc-dog-breeds.json");
            try {
                List<Canine> canines = mapper.readValue(inputStream, new TypeReference<List<Canine>>(){});
                canines.forEach(System.out::println);
                // canines.forEach(canineRepository::save);
                canineRepository.saveAll(canines);
                System.out.println("Canines saved to database...");
            } catch (IOException e){
                System.out.println("Unable to save canines: " + e.getMessage());
            }
        };
    }
}
