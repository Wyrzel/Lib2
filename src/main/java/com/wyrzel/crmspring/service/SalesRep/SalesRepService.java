package com.wyrzel.crmspring.service.SalesRep;

import com.wyrzel.crmspring.model.SalesRep;
import java.util.List;


public interface SalesRepService {

    void addSalesRep(SalesRep salesRep);

    SalesRep getSalesRep(Long id);

    List<SalesRep> getAllSalesReps();

    void deleteSalesRep(Long id);

    void updateSalesRep(Long id, SalesRep salesRep);
}
