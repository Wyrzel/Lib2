package com.wyrzel.crmspring.repository;

import com.wyrzel.crmspring.model.CompanyData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyDataRepository extends CrudRepository<CompanyData, Long>{


}
