<?php

$this->addNullabilityToTypeDefinition = new ReflectionClass($decorated)
    ->getProperty('addNullabilityToTypeDefinition')
    ->getValue($decorated);
