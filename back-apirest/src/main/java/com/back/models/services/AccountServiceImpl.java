package com.back.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	
}
