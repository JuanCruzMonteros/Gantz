package com.back.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.back.models.entity.Account;

public interface IAccountDao extends JpaRepository<Account,Long>{

}
