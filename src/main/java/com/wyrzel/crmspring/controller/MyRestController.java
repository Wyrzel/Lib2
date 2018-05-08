package com.wyrzel.crmspring.controller;


import com.wyrzel.crmspring.model.CompanyData;
import com.wyrzel.crmspring.model.responses.Response;
import com.wyrzel.crmspring.service.CompanyData.CompanyDataServiceImp;
import com.wyrzel.crmspring.service.SalesRep.SalesRepServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping
public class MyRestController {

    @Autowired
    CompanyDataServiceImp companyDataService;

    @Autowired
    SalesRepServiceImp salesRepService;


    @GetMapping(value = "/getCompanyData")
    public List<CompanyData> getCompanyData() {
        return companyDataService.getAllCompanyData();
    }



    @PostMapping(value = "/save")
    public Response postCompanyData(@RequestBody CompanyData companyData) {
        companyDataService.addCompanyData(companyData);
        Response response = new Response("Done",companyData.getCompanyName() + " " + companyData.getNip());
        return response;
    }



    @GetMapping(value = "/getCompany/{id}")
    public CompanyData getTaskCompanyData(@PathVariable long id){
       return companyDataService.getSCompanyData(id);
    }

}
