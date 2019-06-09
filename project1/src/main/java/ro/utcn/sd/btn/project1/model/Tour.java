package ro.utcn.sd.btn.project1.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Tour {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Timestamp date;
    private int maxNrAllowed;
    private double price;

    @ManyToOne
    @JoinColumn
    private Guide guide;

    @OneToOne
    @JoinColumn
    private Location location;

}
