package com.example.springbackend;

import static org.hamcrest.core.StringContains.containsString;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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

import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDate;


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
    @Test
    public void testGetStatus() throws Exception {
        mockMvc.perform(get("/employee"))
                .andExpect(status().isOk());

    }
    // Error with the below test Java 8 date/time type `java.time.LocalDate` not supported by default: add Module "com.fasterxml.jackson.datatype:jackson-datatype-jsr310"
//    @Test
//    public void testCreateEmployee() throws Exception {
//        CreateEmployeeDto employeeDto = new CreateEmployeeDto();
//        employeeDto.setAddress("123 example st");
//        employeeDto.setEmail("test@example.com");
//        employeeDto.setFinishDate(LocalDate.of(2023, 3, 14));
//        employeeDto.setStartDate(LocalDate.of(2023, 3, 14));
//        employeeDto.setWorkBasis("Contract");
//        employeeDto.setFirstName("John");
//        employeeDto.setLastName("Doe");
//        employeeDto.setMiddleName("William");
//        employeeDto.setStatus("Full-time");
//        employeeDto.setPhoneNum("0412345678");
//        employeeDto.setOnGoing(false);
//        employeeDto.setHoursPerWeek(35);
//
//        mockMvc.perform(post("/employee")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(objectMapper.writeValueAsString(employeeDto)))
//                .andExpect(status().isCreated())
//                .andExpect(jsonPath("$.firstName").value("John"))
//                .andExpect(jsonPath("$.lastName").value("Doe"))
//                .andExpect(jsonPath("$.email").value("test@example.com"));
//    }
}