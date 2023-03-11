package com.example.springbackend.employee;
import jakarta.validation.constraints.*;

import java.time.LocalDate;

public class CreateEmployeeDto {

    @NotNull(message = "First Name cannot be blank")
    @Size(max = 50, message = "First Name cannot exceed 50 characters")
    private String firstName;

    @Size(max = 50, message = "Middle Name cannot exceed 50 characters")
    private String middleName;

    @NotBlank(message = "Last Name cannot be blank")
    @Size(max = 50, message = "Last Name cannot exceed 100 characters")
    private String lastName;

    @NotBlank(message = "Name cannot be null")
    @Email(message = "Invalid email address")
    private String email;

    @NotBlank(message = "Name cannot be null")
//    @Pattern(regexp = "^(\\+61|0)[2-478](\\s?\\d{4}){3}$", message = "Invalid Australian phone number")
    private String phoneNum;

    @NotBlank(message = "Address cannot be blank")
    private String address;

    @NotBlank(message = "Status cannot be blank")
    private String status;

    @NotNull
    private LocalDate startDate;

    @NotNull
    private LocalDate finishDate;

    @NotNull
    private Boolean onGoing;

    @NotBlank
    private String workBasis;


    @Min (value = 0)
    private Integer hoursPerWeek;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(LocalDate finishDate) {
        this.finishDate = finishDate;
    }

    public Boolean getOnGoing() {
        return onGoing;
    }

    public void setOnGoing(Boolean onGoing) {
        this.onGoing = onGoing;
    }

    public String getWorkBasis() {
        return workBasis;
    }

    public void setWorkBasis(String workBasis) {
        this.workBasis = workBasis;
    }

    public Integer getHoursPerWeek() {
        return hoursPerWeek;
    }

    public void setHoursPerWeek(Integer hoursPerWeek) {
        this.hoursPerWeek = hoursPerWeek;
    }
}
