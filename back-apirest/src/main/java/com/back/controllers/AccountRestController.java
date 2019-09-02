package com.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.back.models.services.*;

@CrossOrigin(origins= { "http://localhost:4200" } )
@RestController
@RequestMapping("/api")
public class AccountRestController {
	
	@Autowired
	private IAccountService accountService;
	
	@GetMapping("/accounts")
	public List<Account> index(){
		return accountService.findAll();
	}
	
	@GetMapping("accounts/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Account show(@PathVariable Long id) {
		return accountService.findById(id);
	}
	
	
	@PostMapping("accounts")
	@ResponseStatus(HttpStatus.CREATED)
	public Account create(@RequestBody Account account) {
		return accountService.save(account);
	}
	
	@PutMapping("accounts/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Account update(@RequestBody Account account , @PathVariable Long id) {
		Account actual = accountService.findById(id);
		
		actual.setBio(account.getBio());
		actual.setFollowers(account.getFollowers());
		actual.setFollowing(account.getFollowing());
		actual.setObservaciones(account.getObservaciones());
		actual.setPost(account.getPost());
		
		accountService.save(actual); 
		
		return actual;
	}
	
	@DeleteMapping("accounts/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		accountService.delete(id);
	}
	
}
