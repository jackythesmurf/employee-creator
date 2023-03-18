FROM maven:3.8.4-openjdk-17 as builder

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn package -DskipTests

# Second stage: Run the Spring application
FROM eclipse-temurin:17

WORKDIR /app
EXPOSE 8080

COPY --from=builder /app/target/spring-backend-0.0.1-SNAPSHOT.jar .

CMD ["java", "-jar", "./app/target/spring-backend-0.0.1-SNAPSHOT.jar"]