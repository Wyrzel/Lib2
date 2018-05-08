package com.wyrzel.crmspring.model.ResultInfoModel;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
class Year {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private int year;
    private int styczen;
    private int luty;
    private int marzec;
    private int kwiecien;
    private int maj;
    private int czerwiec;
    private int lipiec;
    private int sierpien;
    private int wrzesien;
    private int pazdziernik;
    private int listopad;
    private int grudzien;


}

