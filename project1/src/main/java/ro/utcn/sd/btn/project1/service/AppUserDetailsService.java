package ro.utcn.sd.btn.project1.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.sd.btn.project1.model.Guide;
import ro.utcn.sd.btn.project1.persistence.api.RepositoryFactory;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class AppUserDetailsService implements UserDetailsService {
    private final RepositoryFactory repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Guide guide = repository.createGuideRepository().findById(1).get();
        return new org.springframework.security.core.userdetails.User(guide.getName(), guide.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_GUIDE"))) {
        };
    }

    @Transactional
    public Guide loadCurrentUser() {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        return repository.createGuideRepository().findById(1).get();
    }

}
