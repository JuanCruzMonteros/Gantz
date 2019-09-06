package com.back.security.models.service;

import com.back.security.models.entity.Usuario;

public interface IUsuarioService {

	public Usuario findByUsername(String username);
}
