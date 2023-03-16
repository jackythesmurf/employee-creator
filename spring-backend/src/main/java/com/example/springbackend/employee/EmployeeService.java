package com.example.springbackend.employee;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private ModelMapper mapper;

    public Employee create(CreateEmployeeDto data){
        Employee newEmployee = mapper.map(data, Employee.class);
        return this.employeeRepository.save(newEmployee);
    }
    public List<Employee> findAll() {
        return this.employeeRepository.findAll();
    }
    public Optional<Employee> findById(Long id){
        return this.employeeRepository.findById(id);

    }
    public boolean deletePostById(Long id) {
        employeeRepository.deleteById(id);
        return true;

    }

    public Optional<Employee> updateById(Long id, CreateEmployeeDto data) {
        return this.employeeRepository.findById(id)
                .map(existingEmployee -> {
                    mapper.map(data, existingEmployee);
                    return this.employeeRepository.save(existingEmployee);
                });
    }

}
