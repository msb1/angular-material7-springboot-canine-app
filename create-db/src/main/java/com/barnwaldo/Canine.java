package com.barnwaldo;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import javax.persistence.*;

@Entity
@Getter @Setter
@NoArgsConstructor
@ToString @EqualsAndHashCode
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Canine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", nullable = false, unique = true)
    private Long id;
    private String dogBreed;
    @Column(length = 500)
    private String dogUrl;
    private String dogHeight;
    private String dogWeight;
    @Column(length = 200)
    private String dogTemperament;
    private String dogPopularity;
    @Column(length = 5000)
    private String dogDescription;
    @Column(length = 5000)
    private String dogAbout;
    private String dogExpectancy;
    private String dogGroup;
    @Column(length = 500)
    private String dogImageUrl;

}
