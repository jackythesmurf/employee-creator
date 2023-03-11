package com.example.springbackend.employee;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name="employee")
public class Employee {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    Long id;

    @Column
    private String firstName;

    @Column
    private String middleName;

    @Column
    private String lastName;

    @Column
    private String email;

    @Column
    private String phoneNum;

    @Column
    private String address;

    @Column
    private String status;

    @Column
    private LocalDate startDate;

    @Column
    private LocalDate finishDate;

    @Column
    private Boolean onGoing;

    @Column
    private String workBasis;

    @Column
    private Integer hoursPerWeek;

    public Employee(Long id, String firstName, String middleName, String lastName, String email, String phoneNum, String address, String status, LocalDate startDate, LocalDate finishDate, Boolean onGoing, String workBasis, Integer hoursPerWeek) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNum = phoneNum;
        this.address = address;
        this.status = status;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.onGoing = onGoing;
        this.workBasis = workBasis;
        this.hoursPerWeek = hoursPerWeek;
    }

    public Employee() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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
