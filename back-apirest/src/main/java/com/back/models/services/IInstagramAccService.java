package com.back.models.services;

import java.io.IOException;
import java.util.List;

import org.apache.http.client.ClientProtocolException;
import org.springframework.stereotype.Service;

import com.back.models.entity.Account;

public interface IInstagramAccService {
	
	public Account getUser(String user, String pass);

	public void LikesRequest(Account acc, int cantidad);

}
