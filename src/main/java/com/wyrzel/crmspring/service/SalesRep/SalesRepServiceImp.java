package com.wyrzel.crmspring.service.SalesRep;

import com.wyrzel.crmspring.model.SalesRep;
import com.wyrzel.crmspring.repository.SalesRepRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SalesRepServiceImp implements SalesRepService {

    @Autowired
    private SalesRepRepository salesRepRepository;


    @Override
    public void addSalesRep(SalesRep salesRep) {
        salesRepRepository.save(salesRep);
    }

    @Override
    public SalesRep getSalesRep(Long id) {
        return salesRepRepository.findById(id).orElse(null);
    }

    @Override
    public List<SalesRep> getAllSalesReps() {
        List<SalesRep> allSalesReps = new ArrayList<>();
        salesRepRepository.findAll().forEach(allSalesReps::add);
        return allSalesReps;

    }

    @Override
    public void deleteSalesRep(Long id) {
        salesRepRepository.deleteById(id);

    }

    @Override
    public void updateSalesRep(Long id, SalesRep salesRep) {
        salesRepRepository.save(salesRep);

    }
}
