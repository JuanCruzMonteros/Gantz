package com.back.models.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.back.models.entity.Account;

public interface IInstagramAccService {
	
	public Account getUser(String user, String pass);
	

}
