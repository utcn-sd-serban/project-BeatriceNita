package ro.utcn.sd.btn.project1.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.sd.btn.project1.model.Guide;
import ro.utcn.sd.btn.project1.persistence.api.GuideRepository;
import ro.utcn.sd.btn.project1.persistence.api.RepositoryFactory;

@Service
@RequiredArgsConstructor
public class GuideService {

    private final RepositoryFactory repositoryFactory;

    @Transactional
    public Guide addGuide(Integer id, String name, String password, String email) {
        Guide guide = new Guide(id, name, password);
        return repositoryFactory.createGuideRepository().save(guide);
    }

    @Transactional
    public Guide findGuide(String name) {
        GuideRepository repository = repositoryFactory.createGuideRepository();
        Guide guide = repository.findByName(name);
        return guide;
    }

    @Transactional
    public Guide findById(int id) {
        GuideRepository repository = repositoryFactory.createGuideRepository();
        Guide guide = repository.findByIdAgain(id);
        return guide;
    }
}