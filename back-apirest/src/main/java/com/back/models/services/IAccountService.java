package com.back.models.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.back.models.entity.Account;

public interface IAccountService {

	public List<Account> findAll();
	
	public Page<Account> findAll(Pageable pageable);
	
	public Account findById(Long id);
	
	public Account save(Account account);
	
	public void delete(Long id);
	
}
