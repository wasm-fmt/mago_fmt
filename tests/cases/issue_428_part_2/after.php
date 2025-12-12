<?php

$this->assertTrue(str('jon doe')->replace(['jon', 'jane'], 'luke')->equals('luke doe'));

return new ValidationFailed($failingRules, $subject, Arr\map_iterable($failingRules, function (array $rules, string $field) {
    return Arr\map_iterable($rules, fn (Rule $rule) => $this->getErrorMessage($rule, $field));
}));
