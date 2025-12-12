<?php

$this->maxDate( // effective date
    value1: data_get($employee, 'customEffectiveDate'),
    value2: data_get($employee, 'employeeStatusDate'),
);
