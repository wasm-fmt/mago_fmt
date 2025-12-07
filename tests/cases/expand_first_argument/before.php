<?php

return $propertyMetadata->withSchema(
    ($this->addNullabilityToTypeDefinition)(
        [
            "type" => "string",
            "format" => "decimal",
        ],
        $type
    )
);

return \Psl\Type\shape(
[
'foo' => \Psl\Type\literal_scalar('string'),
'bar' => \Psl\Type\int(),
'baz' => \Psl\Type\bool(),
'qux' => \Psl\Type\float(),
'quux' => \Psl\Type\vec(\Psl\Type\string()),
'corge' => \Psl\Type\dict(\Psl\Type\string(), \Psl\Type\int()),
'grault' => \Psl\Type\shape([
    'garply' => \Psl\Type\string(),
    'waldo' => \Psl\Type\int(),
    'fred' => \Psl\Type\bool(),
    'plugh' => \Psl\Type\float(),
    'xyzzy' => \Psl\Type\vec(\Psl\Type\string()),
    'thud' => \Psl\Type\dict(\Psl\Type\string(), \Psl\Type\int()),
], allow_unknown_fields: true),
], allow_unknown_fields: true);
