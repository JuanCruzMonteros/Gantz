package com.back.controllers;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.http.client.ClientProtocolException;
import org.brunocvcunha.instagram4j.Instagram4j;
import org.brunocvcunha.instagram4j.requests.InstagramSearchUsernameRequest;
import org.brunocvcunha.instagram4j.requests.payload.InstagramSearchUsernameResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.back.models.entity.Account;
import com.back.models.entity.UserPass;
import com.back.models.services.*;

@CrossOrigin(origins = { "http://localhost:4200" })
@RestController
@RequestMapping("/api")
public class AccountRestController {

	@Autowired
	private InstagramAccService instagramAccService;
	
	@Autowired
	private IAccountService accountService;

	@GetMapping("/accounts")
	public List<Account> index() {
		return accountService.findAll();
	}
	
	@GetMapping("/accounts/page/{page}")
	public Page<Account> index(@PathVariable Integer page) {
		return accountService.findAll(PageRequest.of(page, 5));
	}

	
	@Secured({"ROLE_STARTER","ROLE_ADMIN"})
	@GetMapping("accounts/{id}")
	public ResponseEntity<?> show(@PathVariable Long id) {

		Map<String, Object> response = new HashMap<>();
		Account account = null;
		try {
			account = accountService.findById(id);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar la consulta en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		if (account == null) {
			response.put("mensaje", "La cuenta" + id.toString() + "no existe en la base de datos");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Account>(account, HttpStatus.OK);
	}

	@Secured({"ROLE_ADMIN"})
	// probar postman crear 2 veces el mismo account. 6 - 2
	@PostMapping("accounts")
	public ResponseEntity<?> create(@RequestBody Account account) {

		Map<String, Object> response = new HashMap<>();

		Account accountNew = null;
		try {
			accountNew = accountService.save(account);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar la consulta en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "El mensaje ha sido creado con exito!");
		response.put("account", accountNew);

		instagramAccService.LikesRequest(accountNew, 20);
		
		
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}

	@Secured({"ROLE_ADMIN"})
	@PostMapping("accounts/verify")
	public ResponseEntity<?> verify(@RequestBody UserPass userPass) {
		
		Map<String, Object> response = new HashMap<>();

		Account accountNew = null;
		accountNew = instagramAccService.getUser( userPass.getUsuario(),  userPass.getPass());
		
		if( accountNew == null ) {
			response.put("mensaje", "Usuario o contraseña incorrectos");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		
		response.put("mensaje", "Cuenta verificada con éxito!");
		response.put("account", accountNew);

		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.ACCEPTED);
	} 

	
	@Secured({"ROLE_ADMIN"})
	@PutMapping("accounts/{id}")
	public ResponseEntity<?> update(@RequestBody Account account, @PathVariable Long id) {
		Account accountActual = accountService.findById(id);
		Account accountUpdated = null;
		Map<String, Object> response = new HashMap<>();

		if (accountActual == null) {
			response.put("mensaje",
					"Error: no se pudo editar la cuenta de ID: " + id + "No existe en la base de datos");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		try {
			accountActual = account;
			accountUpdated = accountService.save(accountActual);

		} catch (DataAccessException e) {
			response.put("mensaje", "Error al actualizar en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "La cuenta ha sido actualizada con éxito!");
		response.put("account", accountUpdated);

		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}

	@Secured({"ROLE_ADMIN"})
	@DeleteMapping("accounts/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<?> delete(@PathVariable Long id) {
		Map<String, Object> response = new HashMap<>();

		try {
			accountService.delete(id);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al eliminar el cliente en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		response.put("mensaje", "La cuenta ha sido eliminada con éxito!");
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
	}

}
