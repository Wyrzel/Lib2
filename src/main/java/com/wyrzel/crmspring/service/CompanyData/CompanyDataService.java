package com.wyrzel.crmspring.service.CompanyData;

import com.wyrzel.crmspring.model.CompanyData;

import java.util.List;

public interface CompanyDataService {


    void addCompanyData(CompanyData companyData);

    CompanyData getSCompanyData(Long id);

    List<CompanyData> getAllCompanyData();

    void deleteCompanyData(Long id);

    void updateCompanyData(Long id, CompanyData companyData);
}
