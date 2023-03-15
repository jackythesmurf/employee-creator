package com.example.springbackend;


import com.example.springbackend.employee.CreateEmployeeDto;
import com.example.springbackend.employee.Employee;
import com.example.springbackend.employee.EmployeeController;
import com.example.springbackend.employee.EmployeeService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;

@ExtendWith(MockitoExtension.class)
@ExtendWith(SpringExtension.class)
public class EmployeeControllerTest {
    private MockMvc mockMvc;

    @Mock
    private EmployeeService employeeService;

    @InjectMocks
    private EmployeeController employeeController;

    private ObjectMapper objectMapper;

    @BeforeEach
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(employeeController).build();
        objectMapper = new ObjectMapper();
    }

//    @Test
//    public void testCreateEmployee() throws Exception {
//        CreateEmployeeDto employeeDto = new CreateEmployeeDto();
//
//        Employee employee = new Employee();
//        employee.setId(1L);
//        employee.setFirstName(employeeDto.getFirstName());
//        employee.setLastName(employeeDto.getLastName());
//        employee.setEmail(employeeDto.getEmail());
//
//        Mockito.when(employeeService.create(any(CreateEmployeeDto.class))).thenReturn(employee);
//
//        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post("/employee")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(objectMapper.writeValueAsString(employeeDto)))
//                .andExpect(MockMvcResultMatchers.status().isCreated())
//                .andReturn();
//
//        String responseBody = mvcResult.getResponse().getContentAsString();
//        Employee responseEmployee = objectMapper.readValue(responseBody, Employee.class);
//
//        assert responseEmployee.getId().equals(1L);
//        assert responseEmployee.getFirstName().equals(employeeDto.getFirstName());
//        assert responseEmployee.getLastName().equals(employeeDto.getLastName());
//        assert responseEmployee.getEmail().equals(employeeDto.getEmail());
//
//        Mockito.verify(employeeService, Mockito.times(1)).create(any(CreateEmployeeDto.class));
//    }
//
//    @Test
//    public void testFindAllEmployees() throws Exception {
//        List<Employee> employees = new ArrayList<>();
//        employees.add(new Employee());
//        employees.add(new Employee());
//
//        Mockito.when(employeeService.findAll()).thenReturn(employees);
//
//        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/employee"))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andReturn();
//
//        String responseBody = mvcResult.getResponse().getContentAsString();
//        List<Employee> responseEmployees = objectMapper.readValue(responseBody, objectMapper.getTypeFactory().constructCollectionType(List.class, Employee.class));
//
//        assert responseEmployees.size() == 2;
//        assert responseEmployees.get(0).getId().equals(1L);
//        assert responseEmployees.get(0).getFirstName().equals("John");
//        assert responseEmployees.get(0).getLastName().equals("Doe");
//        assert responseEmployees.get(0).getEmail().equals("johndoe@example.com");
//
//        Mockito.verify(employeeService, Mockito.times(1)).findAll();
//    }
}