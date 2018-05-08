package com.wyrzel.crmspring.model.ResultInfoModel;


import com.wyrzel.crmspring.model.CompanyData;
import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.Map;

@Entity
@Data
public class ResultsInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String producentCode;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "companyData_id")
    private CompanyData companyData;

    @OneToMany
    @JoinColumn(name = "year")
    private List<Year> SellNet;
    @OneToMany
    @JoinColumn(name = "year")
    private List<Year> BuyNet;



}
