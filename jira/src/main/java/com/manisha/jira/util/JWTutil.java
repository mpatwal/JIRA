package com.manisha.jira.util;

import io.jsonwebtoken.Jwts;
import lombok.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Signature;
import java.util.Date;
@Component
public class JWTutil
{
    @Value("${jwt.secret}")
    private String secret;

    public String generateToken(UserDetails userDetails){
        return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() +1000 *60*60*24))
                .signWith(SignatureAlgorithm.HS256.secret)
                .compact();
        }
        public String extractUsername(String token){
         return Jwts.parser()
                 .setSigningKey(secret)
                 .parseClaimsJwt(token)
                 .getBody()
                 .getSubject();
    }
    public boolean validateToken(String token,UserDetails userDetails){
        String username = extractUsername(token);
        return username.equals((userdetails.getUsername()));
    }
}
