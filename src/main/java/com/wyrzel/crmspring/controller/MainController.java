package com.wyrzel.crmspring.controller;


import com.wyrzel.crmspring.service.CompanyData.CompanyDataServiceImp;
import com.wyrzel.crmspring.service.SalesRep.SalesRepServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class MainController {

    @Autowired
    CompanyDataServiceImp companyDataService;

    @Autowired
    SalesRepServiceImp salesRepService;

    @GetMapping(value = "/")
    public String main() {
        return "index";

    }


}
