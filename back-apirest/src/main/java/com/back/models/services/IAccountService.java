package com.back.models.services;

import java.util.List;

import com.back.models.entity.Account;

public interface IAccountService {

	public List<Account> findAll();
	
	public Account findById(Long id);
	
	public Account save(Account account);
	
	public void delete(Long id);
	
}
