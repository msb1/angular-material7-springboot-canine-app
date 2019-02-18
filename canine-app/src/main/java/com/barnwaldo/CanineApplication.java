package com.barnwaldo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * The CanineApplication program implements a Spring Boot application that is consumed by an Angular
 * (Material) Client
 *
 * A MySQL database containing web-scraped dog breed info is accessed via Spring Boot JPA (Hibernate)
 *
 * Spring Boot dependencies include: Lombok, Web, Rest Repositories, JPA, MySQL, Elasticsearch and Actuator
 *
 * @author  MS Barnes
 * @version 1.0
 * @since   2018-11-12
 */

@SpringBootApplication
public class CanineApplication {

    public static void main(String[] args) {

        SpringApplication.run(CanineApplication.class, args);
    }
}
