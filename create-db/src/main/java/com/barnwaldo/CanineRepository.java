package com.barnwaldo;

import org.springframework.data.jpa.repository.JpaRepository;
import java.io.Serializable;

public interface CanineRepository extends JpaRepository<Canine, Serializable> {
}
