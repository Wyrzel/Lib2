package com.wyrzel.crmspring.service.CompanyData;

import com.wyrzel.crmspring.model.CompanyData;
import com.wyrzel.crmspring.repository.CompanyDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CompanyDataServiceImp implements CompanyDataService{

    @Autowired
    CompanyDataRepository companyDataRepository;

    @Override
    public void addCompanyData(CompanyData companyData) {
        companyDataRepository.save(companyData);
    }

    @Override
    public CompanyData getSCompanyData(Long id) {
        return companyDataRepository.findById(id).orElse(null);
    }

    @Override
    public List<CompanyData> getAllCompanyData() {
        List<CompanyData> companyDataList = new ArrayList<>();
        companyDataRepository.findAll().forEach(companyDataList::add);
        return companyDataList;
    }

    @Override
    public void deleteCompanyData(Long id) {
        companyDataRepository.deleteById(id);

    }

    @Override
    public void updateCompanyData(Long id, CompanyData companyData) {
        companyDataRepository.save(companyData);

    }
}
