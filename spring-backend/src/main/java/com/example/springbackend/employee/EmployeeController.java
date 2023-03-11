package com.example.springbackend.employee;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@Valid @RequestBody CreateEmployeeDto data){
        Employee createdEmployee = this.employeeService.create(data);
        return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Employee>> findAll(){
        List<Employee> allEmployees = this.employeeService.findAll();
        return new ResponseEntity<>(allEmployees, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getById(@PathVariable Long id) throws Exception {
        Employee foundEmployee = this.employeeService.findById(id)
                .orElseThrow(() -> new Exception("Could not find post with id " + id));
        return new ResponseEntity<>(foundEmployee, HttpStatus.OK);

    }

    @PatchMapping("/{id}")
    public ResponseEntity<Employee> updateById(@PathVariable Long id, @Valid @RequestBody CreateEmployeeDto data) throws Exception {
        Employee updatedPost = this.employeeService.updateById(id, data)
                .orElseThrow(() -> new Exception("Could not find post with id " + id));
        return new ResponseEntity<>(updatedPost, HttpStatus.OK);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<Employee> deleteById(@PathVariable Long id) throws Exception {
        this.employeeService.deletePostById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }




}
