package ro.utcn.sd.btn.project1.seed;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.sd.btn.project1.model.Guide;
import ro.utcn.sd.btn.project1.persistence.api.GuideRepository;
import ro.utcn.sd.btn.project1.persistence.api.RepositoryFactory;

@Component
@RequiredArgsConstructor
@Order(Ordered.HIGHEST_PRECEDENCE)
public class ApplicationSeed implements CommandLineRunner {
    private final RepositoryFactory repositoryFactory;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        GuideRepository guideRepo = repositoryFactory.createGuideRepository();
        Guide guide = new Guide(1, "otto1", passwordEncoder.encode("food1"));
        guideRepo.save(guide);

        System.out.println(guide.getPassword());
    }

    @Transactional
    public void clear() {

    }
}