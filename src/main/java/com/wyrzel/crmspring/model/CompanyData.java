package com.wyrzel.crmspring.model;

import com.wyrzel.crmspring.model.ResultInfoModel.ResultsInfo;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "companyData")
public class CompanyData {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String companyName;
    private String nip;
    private String krs;
    private String adres;
    private String email;
    private String phone;
    @OneToMany(mappedBy = "companyData")
    List<ResultsInfo> resultsInfoList;
}
