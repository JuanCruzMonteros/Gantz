package com.back.models.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.GeneratedValue;

@Entity
@Table(name="accounts")
public class Account {
	
	@Column(nullable=false)
	private String usuario;
	
	@Column(nullable=false)
	private String password;
	
	@Column(nullable=false)
	private String userAcc;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id; 
	
	private String bio;
	private String foto_bio;
	private int followers;
	private int following;
	private int post;

	private String observaciones;
	
	@Temporal(TemporalType.DATE)
	@Column(name="create_at")
	private Date createAt;

	private String HashTagLikes;
	
	@PrePersist
	public void prePersist() {
		//  Aca deberia hacer llamado al servicio de inst //
		createAt = new Date();
	}
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	public String getFoto_bio() {
		return foto_bio;
	}

	public void setFoto_bio(String foto_bio) {
		this.foto_bio = foto_bio;
	}

	public int getFollowers() {
		return followers;
	}
	public void setFollowers(int followers) {
		this.followers = followers;
	}
	public int getFollowing() {
		return following;
	}
	public void setFollowing(int following) {
		this.following = following;
	}
	public int getPost() {
		return post;
	}

	public void setPost(int post) {
		this.post = post;
	}

	public String getObservaciones() {
		return observaciones;
	}

	public void setObservaciones(String observaciones) {
		this.observaciones = observaciones;
	}

	public Date getCreateAt() {
		return createAt;
	}

	public void setCreateAt(Date createAt) {
		createAt = createAt;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	
	public String getUserAcc() {
		return userAcc;
	}
	public void setUserAcc(String userAcc) {
		this.userAcc = userAcc;
	}
	@Override
	public String toString() {
		return "Account [User @" + userAcc + "usuario=" + usuario + ", password=" + password + ", id=" + id + ", bio=" + bio + ", foto_bio="
				+ foto_bio + ", followers=" + followers + ", following=" + following + ", post=" + post
				+ ", observaciones=" + observaciones + ", createAt=" + createAt + "]";
	}
	public String getHashTagLikes() {
		return HashTagLikes;
	}
	public void setHashTagLikes(String hashTagLikes) {
		HashTagLikes = hashTagLikes;
	}
	
	
}
