package com.back.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.back.models.dao.IAccountDao;
import com.back.models.entity.Account;

@Service
public class AccountServiceImpl implements IAccountService{

	@Autowired
	private IAccountDao accountDao;

	@Override
	public List<Account> findAll() {
		return (List<Account>) accountDao.findAll();
	}

	@Override
	public Page<Account> findAll(Pageable pageable) {
		return accountDao.findAll(pageable);
	}
	
	@Override
	public Account findById(Long id) {
		return accountDao.findById(id).orElse(null);
	}

	@Override
	public Account save(Account account) {
		// TODO Auto-generated method stub
		return accountDao.save(account);
	}

	@Override
	public void delete(Long id) {
		accountDao.deleteById(id);
		
	}


	
}
