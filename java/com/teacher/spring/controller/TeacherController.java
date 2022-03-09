package com.teacher.spring.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teacher.spring.exception.ResourceNotFoundException;
import com.teacher.spring.model.*;
import com.teacher.spring.repository.TeacherRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class TeacherController {

	@Autowired
	private TeacherRepository teacherRepo;
	
	//get all teachers
	@GetMapping("/teachers")
	public List<Teacher> getAllTeachers(){
		return teacherRepo.findAll();
	}
	
	//get teacher by id api
	@GetMapping("/teachers/{id}")	
	public ResponseEntity<Teacher> getTeacherById(@PathVariable Integer id) {
		Teacher teacher = teacherRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Teacher with id: " + id + " not found."));
		return ResponseEntity.ok(teacher);
	}
		
	//create teacher api
	@PostMapping("/teachers") 
	public Teacher createTeacher(@RequestBody Teacher teacher) {
		return teacherRepo.save(teacher);
	}
	
	//update teacher api
	@PutMapping("/teachers/{id}")
	public ResponseEntity<Teacher> updateTeacher(@PathVariable Integer id, @RequestBody Teacher t){
		Teacher teacher = teacherRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Teacher with id: " + id + " not found."));
		teacher.setFirstName(t.getFirstName());
		teacher.setLastName(t.getLastName());
		teacher.setEmail(t.getEmail());
		
		Teacher updatedTeacher = teacherRepo.save(teacher);
		return ResponseEntity.ok(updatedTeacher);
	}
	
	//delete teacher api
	@DeleteMapping("/teachers/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteTeacher(@PathVariable Integer id){
		Teacher teacher = teacherRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Teacher with id: " + id + " not found."));
		teacherRepo.delete(teacher);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
}
