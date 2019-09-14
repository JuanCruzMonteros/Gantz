package com.back.models.services;

import java.io.IOException;

import org.apache.http.client.ClientProtocolException;
import org.brunocvcunha.instagram4j.Instagram4j;
import org.brunocvcunha.instagram4j.requests.InstagramSearchUsernameRequest;
import org.brunocvcunha.instagram4j.requests.payload.InstagramSearchUsernameResult;
import org.springframework.stereotype.Service;

import com.back.models.entity.Account;


@Service
public class InstagramAccService implements IInstagramAccService{

	@Override
	public Account getUser(String user, String pass) {
		Instagram4j instagram = Instagram4j.builder().username( user ).password( pass ).build();

		instagram.setup();

		Account actual = null;

		try {
			instagram.login();
			if (!instagram.login().getStatus().equals("ok")) {
				System.out.println("no logeado. User o password incorrecto");
				return null;
			}
			System.out.println("Usuario logeado: " + instagram.getUsername());

			InstagramSearchUsernameResult userResult = instagram
					.sendRequest(new InstagramSearchUsernameRequest(instagram.getUsername()));

			actual = new Account();
			actual.setUserAcc(userResult.getUser().getUsername());
			
			actual.setBio(userResult.getUser().getBiography());
			actual.setFollowers(userResult.getUser().getFollower_count());
			actual.setFollowing(userResult.getUser().getFollowing_count());
			actual.setFoto_bio(userResult.getUser().getProfile_pic_url());

			// testear si da correctamente numero de posts
			actual.setPost((int) userResult.getUser().getMedia_count());
			actual.setUsuario( user );
			actual.setPassword(pass );

			System.out.println(actual);
		} catch (ClientProtocolException e) {
			e.printStackTrace();
			return null;
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}

		return actual;
	}

}
