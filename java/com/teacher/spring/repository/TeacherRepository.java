package com.teacher.spring.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teacher.spring.model.Teacher;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Integer>{
	List<Teacher> findByFirstName(String firstName);
}
