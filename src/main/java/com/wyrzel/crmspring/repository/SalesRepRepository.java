package com.wyrzel.crmspring.repository;

import com.wyrzel.crmspring.model.SalesRep;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalesRepRepository extends CrudRepository<SalesRep, Long>{
}
