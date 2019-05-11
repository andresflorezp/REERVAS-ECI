package org.reservas.ReservasECI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"org.reservas.ReservasECI"})
public class ReservasEciApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReservasEciApplication.class, args);
	}

}
