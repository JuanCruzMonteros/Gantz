package com.back.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.back.models.entity.Account;

public interface IAccountDao extends CrudRepository<Account,Long>{

}
