package com.example.springbackend;


import com.example.springbackend.employee.CreateEmployeeDto;
import com.example.springbackend.employee.Employee;
import com.example.springbackend.employee.EmployeeRepository;
import com.example.springbackend.employee.EmployeeService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class EmployeeServiceTest {

    @Mock
    private EmployeeRepository employeeRepository;
    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private EmployeeService employeeService;

    public EmployeeServiceTest() {
        MockitoAnnotations.initMocks(this);
    }


    @Test
    public void testCreateEmployee() {
        Employee employee = new Employee(
                1L,
                "John",
                "William",
                "Smith",
                "email@email.com",
                "0412345678",
                "123 example st",
                "Full-time",
                LocalDate.of(2022, 3, 14),
                LocalDate.of(2022, 3, 14),
                false,
                "Contract",
                35
        );
        CreateEmployeeDto createEmployeeDto = new CreateEmployeeDto();
        employee.setFirstName(createEmployeeDto.getFirstName());
        employee.setLastName(createEmployeeDto.getLastName());
        when(modelMapper.map(createEmployeeDto, Employee.class)).thenReturn(employee);
        when(employeeRepository.save(employee)).thenReturn(employee);
        Employee createdEmployee = employeeService.create(createEmployeeDto);
        assertEquals(employee, createdEmployee);
        verify(employeeRepository, times(1)).save(employee);
    }

    @Test
    public void testFindAllEmployees() {
        List<Employee> employeeList = new ArrayList<>();
        employeeList.add(new Employee(
                1L,
                "Jacky",
                "Zicheng",
                "Li",
                "email@email.com",
                "0412345678",
                "123 example st",
                "Full-time",
                LocalDate.of(2022, 3, 14),
                LocalDate.of(2022, 3, 14),
                false,
                "Contract",
                35
        ));
        employeeList.add(new Employee(
                1L,
                "John",
                "William",
                "Smith",
                "email@email.com",
                "0412345678",
                "123 example st",
                "Full-time",
                LocalDate.of(2022, 3, 14),
                LocalDate.of(2022, 3, 14),
                false,
                "Contract",
                35
        ));

        when(employeeRepository.findAll()).thenReturn(employeeList);
        List<Employee> result = employeeService.findAll();
        assertEquals(employeeList, result);
        verify(employeeRepository, times(1)).findAll();
    }

    @Test
    public void testFindEmployeeById() {
        Employee employee = new Employee(
                1L,
                "John",
                "William",
                "Smith",
                "email@email.com",
                "0412345678",
                "123 example st",
                "Full-time",
                LocalDate.of(2022, 3, 14),
                LocalDate.of(2022, 3, 14),
                false,
                "Contract",
                35
        );
        Optional<Employee> optionalEmployee = Optional.of(employee);
        when(employeeRepository.findById(1L)).thenReturn(optionalEmployee);
        Optional<Employee> result = employeeService.findById(1L);
        assertEquals(optionalEmployee, result);
        verify(employeeRepository, times(1)).findById(1L);
    }

    @Test
    public void testDeleteEmployeeById() {
        Long id = 1L;
        doNothing().when(employeeRepository).deleteById(id);
        boolean result = employeeService.deletePostById(id);
        assertTrue(result);
        verify(employeeRepository, times(1)).deleteById(id);
    }

    @Test
    public void testUpdateEmployeeById() {
        Long id = 1L;
        CreateEmployeeDto createEmployeeDto = new CreateEmployeeDto();
        Employee employee = new Employee(
                1L,
                "John",
                "William",
                "Smith",
                "email@email.com",
                "0412345678",
                "123 example st",
                "Full-time",
                LocalDate.of(2022, 3, 14),
                LocalDate.of(2022, 3, 14),
                false,
                "Contract",
                35
        );
        Optional<Employee> optionalEmployee = Optional.of(employee);
        when(employeeRepository.findById(id)).thenReturn(optionalEmployee);
        when(employeeRepository.save(employee)).thenReturn(employee);
        Optional<Employee> result = employeeService.updateById(id, createEmployeeDto);
        assertEquals(optionalEmployee, result);
        verify(employeeRepository, times(1)).findById(id);
        verify(employeeRepository, times(1)).save(employee);
    }
}

